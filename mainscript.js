
"use strict";

const planetSystem = document.getElementById("planetSystem");
let sunColors = ["yellow", "red", "purple", "white", "orange", "darkblue", "greenyellow", "cyan", "darkred"];
const sun = document.createElement('div');
sun.classList.add('sun');
let randomColorSun = sunColors[Math.floor(Math.random()*sunColors.length)];
sun.style.background = randomColorSun;
sun.style.boxShadow = `0 0 20px ${randomColorSun}, 0 0 60px ${randomColorSun}`;
planetSystem.appendChild(sun);

if(window.matchMedia('(min-width: 300px) and (max-width: 800px)').matches) {
    for(let i = 0; i < getRandomInt(1, 3); i++) {
        const planet = document.createElement('div');
        planet.classList.add('orbit');
        planet.setAttribute("style", `--col: rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}); --sizes:${getRandomInt(75, 250)}px;
        --speed: ${getRandomInt(1, 10)}s`);
        planet.classList.add('planet');
        planetSystem.appendChild(planet);
    }
} else {
    for(let i = 0; i < getRandomInt(1, 9); i++) {
        const planet = document.createElement('div');
        planet.classList.add('orbit');
        planet.setAttribute("style", `--col: rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}); --sizes:${getRandomInt(100, 655)}px;
        --speed: ${getRandomInt(1, 15)}s`);
        planet.classList.add('planet');
        planetSystem.appendChild(planet);
    }
    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
