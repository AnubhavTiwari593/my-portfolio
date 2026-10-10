$files = Get-ChildItem -Path "src\components\*.jsx", "src\App.jsx"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'blue-', 'amber-'
    $content = $content -replace 'violet-', 'orange-'
    $content = $content -replace 'cyan-', 'rose-'
    $content = $content -replace 'emerald-', 'yellow-'
    $content = $content -replace 'slate-', 'stone-'
    $content = $content -replace 'bg-\[#0d1120\]', 'bg-black/10'
    $content = $content -replace 'bg-\[#0a0f1e\]', 'bg-transparent'
    $content = $content -replace 'bg-\[#0d1526\]', 'bg-stone-800'
    Set-Content -Path $file.FullName -Value $content
}
