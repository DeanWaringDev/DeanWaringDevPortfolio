$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.Drawing
function NewBrush($r,$g,$b,$a=255) { New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($a,$r,$g,$b)) }
function DrawRoundedRect($graphics, $rect, $radius, $fillBrush, $borderPen) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $x=$rect.X; $y=$rect.Y; $w=$rect.Width; $h=$rect.Height; $d=$radius*2
  $path.AddArc($x,$y,$d,$d,180,90)
  $path.AddArc($x+$w-$d,$y,$d,$d,270,90)
  $path.AddArc($x+$w-$d,$y+$h-$d,$d,$d,0,90)
  $path.AddArc($x,$y+$h-$d,$d,$d,90,90)
  $path.CloseFigure()
  $graphics.FillPath($fillBrush,$path)
  if ($borderPen) { $graphics.DrawPath($borderPen,$path) }
}
function DrawParkrunEvents($path) {
  $width=1400; $height=900
  $bmp=New-Object System.Drawing.Bitmap $width,$height
  $g=[System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode='AntiAlias'
  $g.Clear([System.Drawing.Color]::FromArgb(250,252,255))
  $brushTitle = NewBrush 34 45 63
  $fontTitle = New-Object System.Drawing.Font('Segoe UI Semibold', 42)
  $fontSubtitle = New-Object System.Drawing.Font('Segoe UI', 20)
  $g.DrawString('Browse Parkrun Events',$fontTitle,$brushTitle,60,40)
  $g.DrawString('Showing 50 of 1318 events',$fontSubtitle,(NewBrush 102 110 125),60,105)
  function DrawFilterBox($graphics,$label,$value,$x) {
    $rect = New-Object System.Drawing.Rectangle $x,160,300,70
    DrawRoundedRect $graphics $rect 14 (NewBrush 255 255 255) (New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(220,229,239),2))
    $fontLabel = New-Object System.Drawing.Font('Segoe UI Semibold',11)
    $fontValue = New-Object System.Drawing.Font('Segoe UI',18)
    $graphics.DrawString($label,$fontLabel,(NewBrush 120 129 146),$rect.X+18,$rect.Y+10)
    $graphics.DrawString($value,$fontValue,(NewBrush 36 51 70),$rect.X+18,$rect.Y+28)
    $fontLabel.Dispose(); $fontValue.Dispose()
  }
  $filters = @(
    @{label='Search Events'; value='by name or location...'; x=60},
    @{label='Mobility Aid Type'; value='All Mobility Aids'; x=380},
    @{label='Minimum Score'; value='0'; x=700},
    @{label='Country'; value='United Kingdom'; x=1020}
  )
  foreach ($f in $filters) { DrawFilterBox $g $f.label $f.value $f.x }
  $cardFontTitle = New-Object System.Drawing.Font('Segoe UI Semibold',20)
  $cardFontSub = New-Object System.Drawing.Font('Segoe UI',12)
  $scoreLabelFont = New-Object System.Drawing.Font('Segoe UI',11)
  $scoreValueFont = New-Object System.Drawing.Font('Segoe UI Semibold',11)
  $cards = @(
    @{title='Horton Park parkrun'; location='Horton Park, United Kingdom'; color=[System.Drawing.Color]::FromArgb(63,168,240); scores=@('Day Chair','Off Road Chair','Walking Frame'); values=@(100,100,100)},
    @{title='Cycle Route 43 parkrun, Ystalyfera'; location='Ystalyfera, United Kingdom'; color=[System.Drawing.Color]::FromArgb(107,203,119); scores=@('Racing Chair','Day Chair','Off Road Chair'); values=@(100,100,100)},
    @{title='Wakehurst parkrun'; location='Wakehurst, United Kingdom'; color=[System.Drawing.Color]::FromArgb(243,156,18); scores=@('Racing Chair','Day Chair','Off Road Chair'); values=@(100,100,100)},
    @{title='Pont y Bala parkrun'; location='Lower Tryweryn, United Kingdom'; color=[System.Drawing.Color]::FromArgb(108,99,255); scores=@('Day Chair','Off Road Chair','Walking Frame'); values=@(100,100,100)},
    @{title='Valentines parkrun'; location='Valentines Park, United Kingdom'; color=[System.Drawing.Color]::FromArgb(93,132,255); scores=@('Racing Chair','Day Chair','Off Road Chair'); values=@(100,100,100)},
    @{title='Hackney Marshes parkrun'; location='Hackney Marshes, United Kingdom'; color=[System.Drawing.Color]::FromArgb(0,190,160); scores=@('Day Chair','Off Road Chair','Walking Frame'); values=@(100,100,100)}
  )
  $startX=60; $startY=260; $cardW=360; $cardH=250; $gapX=30; $gapY=30
  for ($i=0; $i -lt $cards.Count; $i++) {
    $row=[Math]::Floor($i/3)
    $col=$i%3
    $x=$startX + ($cardW + $gapX) * $col
    $y=$startY + ($cardH + $gapY) * $row
    $rect = New-Object System.Drawing.Rectangle $x,$y,$cardW,$cardH
    DrawRoundedRect $g $rect 22 (NewBrush 255 255 255) (New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(220,229,239),2))
    $g.DrawString($cards[$i].title,$cardFontTitle,$brushTitle,$x+20,$y+18)
    $g.DrawString($cards[$i].location,$cardFontSub,(NewBrush 120 129 146),$x+20,$y+50)
    $mapRect = New-Object System.Drawing.Rectangle $x+20,$y+80,$cardW-40,100
    DrawRoundedRect $g $mapRect 18 (NewBrush 243 248 252) $null
    $routePen = New-Object System.Drawing.Pen($cards[$i].color,5)
    $routePen.LineJoin='Round'; $routePen.StartCap='Round'; $routePen.EndCap='Round'
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddCurve([System.Drawing.Point[]]@(
        New-Object System.Drawing.Point($mapRect.X+15,$mapRect.Y+$mapRect.Height-25),
        New-Object System.Drawing.Point($mapRect.X+($mapRect.Width/2),$mapRect.Y+20),
        New-Object System.Drawing.Point($mapRect.Right-20,$mapRect.Y+$mapRect.Height-25)
      ))
    $g.DrawPath($routePen,$path)
    $scoreY=$y+190
    $g.DrawString('Top Accessibility Scores',$scoreLabelFont,(NewBrush 120 129 146),$x+20,$scoreY)
    for ($s=0; $s -lt $cards[$i].scores.Count; $s++) {
      $label = $cards[$i].scores[$s]
      $value = $cards[$i].values[$s]
      $barY=$scoreY+18+($s*22)
      $g.DrawString($label,$scoreValueFont,$brushTitle,$x+20,$barY)
      $g.DrawString($value.ToString(),$scoreValueFont,(NewBrush 58 173 93),$x+$cardW-60,$barY)
      $barRect = New-Object System.Drawing.Rectangle $x+140,$barY+4,$cardW-210,5
      DrawRoundedRect $g $barRect 3 (NewBrush 224 244 233) $null
      $fillRect = New-Object System.Drawing.Rectangle $barRect.X,$barRect.Y,[int]($barRect.Width*($value/100)),$barRect.Height
      DrawRoundedRect $g $fillRect 3 (NewBrush 58 173 93) $null
    }
  }
  $bmp.Save($path,[System.Drawing.Imaging.ImageFormat]::Png)
  $cardFontTitle.Dispose(); $cardFontSub.Dispose(); $scoreLabelFont.Dispose(); $scoreValueFont.Dispose()
  $g.Dispose(); $bmp.Dispose()
}
function DrawScores($path) {
  $width=520; $height=1200
  $bmp=New-Object System.Drawing.Bitmap $width,$height
  $g=[System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode='AntiAlias'
  $g.Clear([System.Drawing.Color]::White)
  $headingFont = New-Object System.Drawing.Font('Segoe UI Semibold',34)
  $bodyFont = New-Object System.Drawing.Font('Segoe UI',14)
  $entryFont = New-Object System.Drawing.Font('Segoe UI Semibold',18)
  $statusFont = New-Object System.Drawing.Font('Segoe UI',12)
  $legendHeadingFont = New-Object System.Drawing.Font('Segoe UI Semibold',18)
  $legendTextFont = New-Object System.Drawing.Font('Segoe UI',14)
  $g.DrawString('Accessibility Scores',$headingFont,(NewBrush 40 52 70),40,40)
  $g.DrawString('Scores are based on course description analysis using 11 keyword matches.',$bodyFont,(NewBrush 120 129 146),40,110)
  $scores = @(
    @{label='Racing Chair'; value=0; color=(NewBrush 196 207 214)},
    @{label='Day Chair'; value=90; color=(NewBrush 58 173 93)},
    @{label='Off Road Chair'; value=100; color=(NewBrush 58 173 93)},
    @{label='Handbike'; value=37; color=(NewBrush 255 99 99)},
    @{label='Frame Runner'; value=46; color=(NewBrush 243 156 18)},
    @{label='Walking Frame'; value=100; color=(NewBrush 58 173 93)},
    @{label='Crutches'; value=100; color=(NewBrush 58 173 93)},
    @{label='Walking Stick'; value=100; color=(NewBrush 58 173 93)}
  )
  $baseY=200
  for ($i=0; $i -lt $scores.Count; $i++) {
    $entry=$scores[$i]
    $y=$baseY + $i*90
    $g.DrawString($entry.label,$entryFont,(NewBrush 40 52 70),40,$y)
    $g.DrawString("{0}/100" -f $entry.value,$entryFont,$entry.color,360,$y)
    $barRect=New-Object System.Drawing.Rectangle 40,$y+35,440,16
    DrawRoundedRect $g $barRect 8 (NewBrush 232 236 240) $null
    if ($entry.value -gt 0) {
      $fillWidth = [int](440*($entry.value/100))
      $fillRect = New-Object System.Drawing.Rectangle 40,$y+35,$fillWidth,16
      DrawRoundedRect $g $fillRect 8 $entry.color $null
    }
    $statusText = switch ($entry.value) {
      {$_ -ge 80} { 'Excellent'; break }
      {$_ -ge 60} { 'Good'; break }
      {$_ -ge 40} { 'Moderate'; break }
      default { 'Challenging' }
    }
    $g.DrawString($statusText,$statusFont,(NewBrush 120 129 146),40,$y+58)
  }
  $legendY=$baseY + $scores.Count*90 + 40
  $legendItems=@(
    @{label='80-100: Excellent'; color=(NewBrush 58 173 93)},
    @{label='60-79: Good'; color=(NewBrush 255 193 7)},
    @{label='40-59: Moderate'; color=(NewBrush 247 159 31)},
    @{label='20-39: Challenging'; color=(NewBrush 255 99 99)},
    @{label='0-19: Very Challenging'; color=(NewBrush 180 190 200)}
  )
  $g.DrawString('Score Guide',$legendHeadingFont,(NewBrush 40 52 70),40,$legendY)
  $y=$legendY+36
  foreach ($item in $legendItems) {
    $rect = New-Object System.Drawing.Rectangle 40,$y,20,20
    $g.FillRectangle($item.color,$rect)
    $g.DrawRectangle(New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(230,230,230),1),$rect)
    $g.DrawString($item.label,$legendTextFont,(NewBrush 90 99 120),70,$y-2)
    $y+=32
  }
  $bmp.Save($path,[System.Drawing.Imaging.ImageFormat]::Png)
  $headingFont.Dispose(); $bodyFont.Dispose(); $entryFont.Dispose(); $statusFont.Dispose(); $legendHeadingFont.Dispose(); $legendTextFont.Dispose()
  $g.Dispose(); $bmp.Dispose()
}
function DrawMap($path) {
  $width=1100; $height=750
  $bmp=New-Object System.Drawing.Bitmap $width,$height
  $g=[System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode='AntiAlias'
  $g.Clear([System.Drawing.Color]::FromArgb(244,247,250))
  $titleFont = New-Object System.Drawing.Font('Segoe UI Semibold',38)
  $subTitleFont = New-Object System.Drawing.Font('Segoe UI',20)
  $panelHeadingFont = New-Object System.Drawing.Font('Segoe UI Semibold',24)
  $panelBodyFont = New-Object System.Drawing.Font('Segoe UI',14)
  $g.DrawString('Market Harborough parkrun',$titleFont,(NewBrush 34 45 63),40,40)
  $g.DrawString('Welland Park',$subTitleFont,(NewBrush 120 129 146),40,100)
  $panel=New-Object System.Drawing.Rectangle 40,150,$width-80,$height-210
  DrawRoundedRect $g $panel 28 (NewBrush 255 255 255) (New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(220,229,239),2))
  $mapRect = New-Object System.Drawing.Rectangle $panel.X+30,$panel.Y+80,$panel.Width-60,$panel.Height-130
  DrawRoundedRect $g $mapRect 20 (NewBrush 229 240 236) $null
  for ($i=0; $i -le 6; $i++) {
    $x=$mapRect.X + ($mapRect.Width/6)*$i
    $g.DrawLine(New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(210,224,220),1),$x,$mapRect.Y,$x,$mapRect.Bottom)
  }
  for ($i=0; $i -le 4; $i++) {
    $y=$mapRect.Y + ($mapRect.Height/4)*$i
    $g.DrawLine(New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(210,224,220),1),$mapRect.X,$y,$mapRect.Right,$y)
  }
  $riverPath=New-Object System.Drawing.Drawing2D.GraphicsPath
  $riverPath.AddCurve([System.Drawing.Point[]]@(
    New-Object System.Drawing.Point($mapRect.X+20,$mapRect.Y+($mapRect.Height*0.6)),
    New-Object System.Drawing.Point($mapRect.X+($mapRect.Width*0.3),$mapRect.Y+($mapRect.Height*0.2)),
    New-Object System.Drawing.Point($mapRect.Right-20,$mapRect.Y+($mapRect.Height*0.5))
  ))
  $riverPen=New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(152,209,240),28)
  $riverPen.LineJoin='Round'
  $g.DrawPath($riverPen,$riverPath)
  $routePath=New-Object System.Drawing.Drawing2D.GraphicsPath
  $routePath.AddCurve([System.Drawing.Point[]]@(
    New-Object System.Drawing.Point($mapRect.X+80,$mapRect.Y+$mapRect.Height-80),
    New-Object System.Drawing.Point($mapRect.X+180,$mapRect.Y+120),
    New-Object System.Drawing.Point($mapRect.Right-160,$mapRect.Y+160),
    New-Object System.Drawing.Point($mapRect.Right-120,$mapRect.Bottom-90),
    New-Object System.Drawing.Point($mapRect.X+200,$mapRect.Bottom-60)
  ))
  $routePen=New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(0,158,96),18)
  $routePen.LineJoin='Round'; $routePen.StartCap='Round'; $routePen.EndCap='Round'
  $g.DrawPath($routePen,$routePath)
  function DrawMarker($graphics,$point,$color) {
    $brush = NewBrush $color.R $color.G $color.B
    $graphics.FillEllipse($brush,$point.X-16,$point.Y-16,32,32)
    $graphics.DrawEllipse(New-Object System.Drawing.Pen([System.Drawing.Color]::White,4),$point.X-16,$point.Y-16,32,32)
  }
  $points=@(
    @{pt=New-Object System.Drawing.Point($mapRect.X+80,$mapRect.Y+$mapRect.Height-80); color=[System.Drawing.Color]::FromArgb(0,158,96)},
    @{pt=New-Object System.Drawing.Point($mapRect.Right-120,$mapRect.Bottom-90); color=[System.Drawing.Color]::FromArgb(233,64,87)}
  )
  foreach ($marker in $points) { DrawMarker $g $marker.pt $marker.color }
  $g.DrawString('Route Map',$panelHeadingFont,(NewBrush 34 45 63),$panel.X+30,$panel.Y+30)
  $g.DrawString('Interactive map showing the actual parkrun route. Click and drag to pan, scroll to zoom.',$panelBodyFont,(NewBrush 120 129 146),$panel.X+30,$panel.Bottom-40)
  $bmp.Save($path,[System.Drawing.Imaging.ImageFormat]::Png)
  $titleFont.Dispose(); $subTitleFont.Dispose(); $panelHeadingFont.Dispose(); $panelBodyFont.Dispose()
  $g.Dispose(); $bmp.Dispose()
}
if (!(Test-Path 'src/assets/projects')) { New-Item -ItemType Directory -Path 'src/assets/projects' | Out-Null }
DrawParkrunEvents 'src/assets/projects/parkrun-events.png'
DrawScores 'src/assets/projects/parkrun-scores.png'
DrawMap 'src/assets/projects/parkrun-map.png'
