const lanes = document.querySelectorAll('.lane');

// SVG string for the flower
const flowerSVG = `
<svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 200 200'>
  <defs>
    <radialGradient id='petalGrad' cx='50%' cy='40%' r='65%'>
      <stop offset='0%' stop-color='#ff8fa3'/>
      <stop offset='100%' stop-color='#ff4d6d'/>
    </radialGradient>
    <radialGradient id='centerGrad' cx='50%' cy='50%' r='70%'>
      <stop offset='0%' stop-color='#fff4a3'/>
      <stop offset='100%' stop-color='#ffb703'/>
    </radialGradient>
  </defs>
  <g transform='translate(100,100)'>
    <path d='M0,-65 C30,-75 60,-35 45,-5 C35,20 5,35 0,20 C-5,35 -35,20 -45,-5 C-60,-35 -30,-75 0,-65 Z' fill='url(#petalGrad)'/>
    <g transform='rotate(60)'><path d='M0,-65 C30,-75 60,-35 45,-5 C35,20 5,35 0,20 C-5,35 -35,20 -45,-5 C-60,-35 -30,-75 0,-65 Z' fill='url(#petalGrad)'/></g>
    <g transform='rotate(120)'><path d='M0,-65 C30,-75 60,-35 45,-5 C35,20 5,35 0,20 C-5,35 -35,20 -45,-5 C-60,-35 -30,-75 0,-65 Z' fill='url(#petalGrad)'/></g>
    <g transform='rotate(180)'><path d='M0,-65 C30,-75 60,-35 45,-5 C35,20 5,35 0,20 C-5,35 -35,20 -45,-5 C-60,-35 -30,-75 0,-65 Z' fill='url(#petalGrad)'/></g>
    <g transform='rotate(240)'><path d='M0,-65 C30,-75 60,-35 45,-5 C35,20 5,35 0,20 C-5,35 -35,20 -45,-5 C-60,-35 -30,-75 0,-65 Z' fill='url(#petalGrad)'/></g>
    <g transform='rotate(300)'><path d='M0,-65 C30,-75 60,-35 45,-5 C35,20 5,35 0,20 C-5,35 -35,20 -45,-5 C-60,-35 -30,-75 0,-65 Z' fill='url(#petalGrad)'/></g>
    <circle cx='0' cy='0' r='26' fill='url(#centerGrad)'/>
  </g>
</svg>`;

function spawnFlower(lane){
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.innerHTML = flowerSVG;
  flower.style.left = Math.random() * 80 + '%';
  flower.style.width = (20 + Math.random() * 30) + 'px';
  flower.style.animationDuration = (4 + Math.random() * 4) + 's';
  lane.appendChild(flower);
  setTimeout(() => lane.removeChild(flower), 8000);
}

setInterval(() => {
  lanes.forEach(lane => spawnFlower(lane));
}, 200);