let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const WIDTH = window.innerWidth,
      HEIGHT = window.innerHeight;

ctx.canvas.width = WIDTH;
ctx.canvas.height = HEIGHT;

const g = 9.8;

let play = false;

let time = 0;

//Gets the values from the sliders 
let lengthSlider = document.getElementById("lengthSlider");
let massSlider = document.getElementById("massSlider");
let angleSlider = document.getElementById("angleSlider");
let bSlider = document.getElementById("bSlider");

let lengthOutput = document.getElementById("lengthValue");
let massOutput = document.getElementById("massValue");
let angleOutput = document.getElementById("angleValue");
let bOutput = document.getElementById("bValue");

lengthOutput.innerHTML = lengthSlider.value;
massOutput.innerHTML = massSlider.value;
angleOutput.innerHTML = angleSlider.value;
bOutput.innerHTML = bSlider.value;

let dampedCheck = document.getElementById("dampedCheck");

let dampedDiv = document.getElementById("dampedElements");


let playButton = document.getElementById("playButton");