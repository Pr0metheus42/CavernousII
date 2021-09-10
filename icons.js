const svgStart = `<svg
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:cc="http://creativecommons.org/ns#"
xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns:svg="http://www.w3.org/2000/svg"
xmlns="http://www.w3.org/2000/svg"
width="14"
height="14"
viewBox="0 0 100 100"
version="1.1"><g>`;
const svgEnd = `</g></svg>`;

const upArrowSVG = svgStart + `<path
style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.195532px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
d="M 75.685627,99.4946 75.347197,54.404488 99.797843,64.146031 48.867133,-0.04885298 0.40663777,64.892147 23.207155,54.795838 l 0.33843,45.09011 z"
sodipodi:nodetypes="cccccccc" />` + svgEnd;
const downArrowSVG = svgStart + `<path
style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.195532px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
d="M 24.679697,0.09776622 V 45.189149 L 0.30285443,35.264368 50.75032,99.839696 99.69686,35.264246 76.821208,45.189143 V 0.09776622 Z"
sodipodi:nodetypes="cccccccc" />` + svgEnd;
const leftArrowSVG = svgStart + `<path
style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.195532px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
d="M 99.710792,24.30587 54.62068,24.6443 64.362223,0.19365396 0.16734307,51.124364 65.108339,99.584859 55.01203,76.784342 l 45.09011,-0.33843 z"
sodipodi:nodetypes="cccccccc" />` + svgEnd;
const rightArrowSVG = svgStart + `<path
style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.195532px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
d="M 0.49689686,75.469431 45.587009,75.131001 35.845466,99.581647 100.04035,48.650937 35.09935,0.19044171 45.195659,22.990959 0.10554886,23.329389 Z"
sodipodi:nodetypes="cccccccc" />` + svgEnd;
const interactSVG = svgStart + `<ellipse
style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:24.8532;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
cx="50.000019"
cy="50.000023"
rx="37.573391"
ry="37.573414" />` + svgEnd;
const hammerSVG = svgStart.replace(/"14"/g, '"22"') + `<path
style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1.70587;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
d="M 91.9799,91.807365 18.079698,16.036452 25.563263,8.5529065 101.33436,82.452928 Z"
sodipodi:nodetypes="ccccc" />
<rect
style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1.02885;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
width="24.971128"
height="13.971112"
x="22.162033"
y="7.162077"
transform="matrix(0.70710772,0.70710584,-0.70710756,0.70710601,0,0)" />
<path
style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
d="M 18.115658,40.012506 8.6448037,30.806257 21.500632,17.265495 C 34.342634,4.4235229 48.2233,-2.5167945 52.503969,1.763861 L 62.503992,11.763863 C 58.223325,7.4832065 44.342658,14.423523 31.500655,27.265494 Z"
sodipodi:nodetypes="ccccccc" />` + svgEnd;
const repeatInteractSVG = svgStart.replace("0 0 100 100", "-10 -10 120 120") + `<ellipse
style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:20;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
id="path841"
cx="50.000019"
cy="50.000023"
rx="37.573391"
ry="37.573414" />
<rect
style="fill:#000000;stroke:#000000;stroke-width:10;stroke-miterlimit:4;stroke-dasharray:none"
id="rect831"
width="32.915249"
height="1.9515609"
x="15.293995"
y="34.624523"
transform="rotate(-45)" />
<rect
style="fill:#000000;stroke:#000000;stroke-width:10;stroke-miterlimit:4;stroke-dasharray:none"
id="rect831-7"
width="32.915249"
height="1.9515609"
x="34.624523"
y="-17.245558"
transform="rotate(45)" />
<rect
style="fill:#000000;stroke:#000000;stroke-width:10;stroke-miterlimit:4;stroke-dasharray:none"
id="rect831-3"
width="32.915249"
height="1.9515609"
x="15.016818"
y="-106.00282"
transform="rotate(135)" />
<rect
style="fill:#000000;stroke:#000000;stroke-width:10;stroke-miterlimit:4;stroke-dasharray:none"
id="rect831-7-0"
width="32.915249"
height="1.9515609"
x="-106.00282"
y="-16.968386"
transform="rotate(-135)" />` + svgEnd;

document.querySelector("#add-action-up").innerHTML = upArrowSVG.replace(/"14"/g, '"22"');
document.querySelector("#add-action-down").innerHTML = downArrowSVG.replace(/"14"/g, '"22"');
document.querySelector("#add-action-right").innerHTML = rightArrowSVG.replace(/"14"/g, '"22"');
document.querySelector("#add-action-left").innerHTML = leftArrowSVG.replace(/"14"/g, '"22"');
document.querySelector("#add-action-interact").innerHTML = interactSVG.replace(/"14"/g, '"22"');
document.querySelector("#add-action-repeat-interact").innerHTML = repeatInteractSVG.replace(/"14"/g, '"22"');