param([string]$Path)

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($Path)

function Get-EntryText($zip, $name) {
  $entry = $zip.Entries | Where-Object { $_.FullName -eq $name }
  if (-not $entry) { return $null }
  $sr = New-Object System.IO.StreamReader($entry.Open(), [System.Text.Encoding]::UTF8)
  $text = $sr.ReadToEnd()
  $sr.Close()
  return $text
}

$sharedXml = Get-EntryText $zip "xl/sharedStrings.xml"
$sheetXml = Get-EntryText $zip "xl/worksheets/sheet1.xml"
$zip.Dispose()

[xml]$sharedDoc = $sharedXml
$ns = New-Object System.Xml.XmlNamespaceManager($sharedDoc.NameTable)
$ns.AddNamespace("a", "http://schemas.openxmlformats.org/spreadsheetml/2006/main")

$shared = @()
foreach ($si in $sharedDoc.sst.si) {
  $text = ($si.InnerText)
  $shared += $text
}

[xml]$sheetDoc = $sheetXml
$rows = $sheetDoc.worksheet.sheetData.row

foreach ($row in $rows) {
  $rIdx = $row.r
  foreach ($c in $row.c) {
    if ($null -eq $c) { continue }
    $ref = $c.r
    $type = $c.t
    $val = $c.v
    $text = ""
    if ($type -eq "s") {
      $idx = [int]$val
      $text = $shared[$idx]
    } elseif ($null -ne $c.'is') {
      $text = $c.'is'.t.InnerText
    } else {
      $text = $val
    }
    if ($text) {
      $textOneLine = $text -replace "`r`n", " | " -replace "`n", " | "
      Write-Output "[$ref] $textOneLine"
      Write-Output "---"
    }
  }
}
