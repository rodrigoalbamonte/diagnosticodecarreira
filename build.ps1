# Regenera dist/index.html (bundle single-file) a partir de site/index.html + css/js.
# Sempre parte do site/ como fonte da verdade — nunca edite dist/index.html manualmente.
$root = $PSScriptRoot
$siteDir = Join-Path (Split-Path $root -Parent) "site"

$html = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "index.html")
$css = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "css\style.css")
$dataJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "js\data.js")
$scoringJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "js\scoring.js")
$appJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "js\app.js")

$html = $html.Replace('<link rel="stylesheet" href="css/style.css" />', "<style>`n$css`n</style>")
$html = $html.Replace('<script src="js/data.js"></script>', "<script>`n$dataJs`n</script>")
$html = $html.Replace('<script src="js/scoring.js"></script>', "<script>`n$scoringJs`n</script>")
$html = $html.Replace('<script src="js/app.js"></script>', "<script>`n$appJs`n</script>")

$outPath = Join-Path $root "index.html"
[System.IO.File]::WriteAllText($outPath, $html, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "Bundle written to $outPath ($(($html).Length) chars)"
