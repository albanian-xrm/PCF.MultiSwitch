const backgroundImage = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 300 300">
<defs>
<circle id="Circle0" r="32" cy="0" cx="0" stroke-width="16" fill="green" stroke="gold"/>
<circle id="Circle1" r="10" cy="-120" cx="0" stroke-width="10" fill="green" stroke="gold"/>  
<circle id="Circle2" r="6" cy="-104.5499" cx="39" stroke-width="6" fill="green" stroke="gold"/>  
<circle id="Circle3" r="6" cy="-104.5499" cx="-39" stroke-width="6" fill="green" stroke="gold"/>     
<line id="Line1" x1="0" y1="-32" x2="0" y2="-110" stroke-width="16" stroke="gold"/>
<path id="Path1" d="M16 -27.71281 L28 -48.4974 L28 -84.4974 L36 -99.3538" stroke-width="10" fill="transparent" stroke="gold"/>
<path id="Path2" d="M-16 -27.71281 L-28 -48.4974 L-28 -84.4974 L-36 -99.3538" stroke-width="10" fill="transparent" stroke="gold"/>
</defs>
<rect x="5" y="5" width="290" height="290" stroke="darkgreen" stroke-width="10" fill="green" rx="15" ry="15" />
<use x="150" y="150" xlink:href="#Circle0" />
<use xlink:href="#Line1" transform="translate(150,150)" />
<use xlink:href="#Circle1" transform="translate(150,150)"/> 
<use xlink:href="#Path1" transform="translate(150,150)" />
<use xlink:href="#Path2" transform="translate(150,150)" />
<use xlink:href="#Circle2" transform="translate(150,150)"/> 
<use xlink:href="#Circle3" transform="translate(150,150)"/>
<use xlink:href="#Line1" transform="translate(150,150) rotate(60)" />
<use xlink:href="#Circle1" transform="translate(150,150) rotate(60)"/>
<use xlink:href="#Path1" transform="translate(150,150) rotate(60)" />
<use xlink:href="#Path2" transform="translate(150,150) rotate(60)" />
<use xlink:href="#Circle2" transform="translate(150,150) rotate(60)"/>
<use xlink:href="#Circle3" transform="translate(150,150) rotate(60)"/>
<use xlink:href="#Line1" transform="translate(150,150) rotate(120)" />
<use xlink:href="#Circle1" transform="translate(150,150) rotate(120)"/>
<use xlink:href="#Path1" transform="translate(150,150) rotate(120)" />
<use xlink:href="#Path2" transform="translate(150,150) rotate(120)" />
<use xlink:href="#Circle2" transform="translate(150,150) rotate(120)"/>
<use xlink:href="#Circle3" transform="translate(150,150) rotate(120)"/>
<use xlink:href="#Line1" transform="translate(150,150) rotate(180)" />
<use xlink:href="#Circle1" transform="translate(150,150) rotate(180)"/>
<use xlink:href="#Path1" transform="translate(150,150) rotate(180)" />
<use xlink:href="#Path2" transform="translate(150,150) rotate(180)" />
<use xlink:href="#Circle2" transform="translate(150,150) rotate(180)"/>
<use xlink:href="#Circle3" transform="translate(150,150) rotate(180)"/>
<use xlink:href="#Line1" transform="translate(150,150) rotate(240)" />
<use xlink:href="#Circle1" transform="translate(150,150) rotate(240)"/>
<use xlink:href="#Path1" transform="translate(150,150) rotate(240)" />
<use xlink:href="#Path2" transform="translate(150,150) rotate(240)" />
<use xlink:href="#Circle2" transform="translate(150,150) rotate(240)"/>
<use xlink:href="#Circle3" transform="translate(150,150) rotate(240)"/>
<use xlink:href="#Line1" transform="translate(150,150) rotate(300)" />
<use xlink:href="#Circle1" transform="translate(150,150) rotate(300)"/>
<use xlink:href="#Path1" transform="translate(150,150) rotate(300)" />
<use xlink:href="#Path2" transform="translate(150,150) rotate(300)" />
<use xlink:href="#Circle2" transform="translate(150,150) rotate(300)"/>
<use xlink:href="#Circle3" transform="translate(150,150) rotate(300)"/>
</svg>
`);

console.info(
  '%c\tMultiSwitch\t\r\n%c\t\r\n%cNeed high quality components?\r\nContact us: %c%s%s%s',
  'font-size:16px;',
  `background-image: url('data:image/svg+xml;utf8,${backgroundImage}');background-repeat: no-repeat;background-position: center;font-size:84px;`,
  ``,
  `font-weight: bold;`,
  'albanian',
  '\x40',
  'xrm.al',
);
