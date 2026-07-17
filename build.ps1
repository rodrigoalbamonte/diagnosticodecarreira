# Regenera dist/index.html (bundle single-file) a partir de site/index.html + css/js/data.
# Sempre parte do site/ como fonte da verdade — nunca edite dist/index.html manualmente.
$root = $PSScriptRoot
$siteDir = Join-Path (Split-Path $root -Parent) "site"

$html = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "index.html")
$css = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "css\style.css")
$sharedJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "js\shared-data.js")
$setoresJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "data\setores.js")
$relacionamentoJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "data\relacionamento.js")
$suporteJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "data\suporte-tecnico.js")
$producaoJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "data\producao.js")
$criacaoJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "data\criacao.js")
$audiovisualJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "data\audiovisual.js")
$sucessoClienteJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "data\sucesso-cliente.js")
$comercialJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "data\comercial.js")
$scoringJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "js\scoring.js")
$appJs = Get-Content -Raw -Encoding UTF8 (Join-Path $siteDir "js\app.js")

$html = $html.Replace('<link rel="stylesheet" href="css/style.css" />', "<style>`n$css`n</style>")
$html = $html.Replace('<script src="js/shared-data.js"></script>', "<script>`n$sharedJs`n</script>")
$html = $html.Replace('<script src="data/setores.js"></script>', "<script>`n$setoresJs`n</script>")
$html = $html.Replace('<script src="data/relacionamento.js"></script>', "<script>`n$relacionamentoJs`n</script>")
$html = $html.Replace('<script src="data/suporte-tecnico.js"></script>', "<script>`n$suporteJs`n</script>")
$html = $html.Replace('<script src="data/producao.js"></script>', "<script>`n$producaoJs`n</script>")
$html = $html.Replace('<script src="data/criacao.js"></script>', "<script>`n$criacaoJs`n</script>")
$html = $html.Replace('<script src="data/audiovisual.js"></script>', "<script>`n$audiovisualJs`n</script>")
$html = $html.Replace('<script src="data/sucesso-cliente.js"></script>', "<script>`n$sucessoClienteJs`n</script>")
$html = $html.Replace('<script src="data/comercial.js"></script>', "<script>`n$comercialJs`n</script>")
$html = $html.Replace('<script src="js/scoring.js"></script>', "<script>`n$scoringJs`n</script>")
$html = $html.Replace('<script src="js/app.js"></script>', "<script>`n$appJs`n</script>")

$outPath = Join-Path $root "index.html"
[System.IO.File]::WriteAllText($outPath, $html, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "Bundle written to $outPath ($(($html).Length) chars)"
