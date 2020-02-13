const length = lengthSlider.value;
const ballSize = massSlider.value;
const startAngle = angleSlider.value;

let testPen = new Pendulum(WIDTH / 2, 0, startAngle, length, ballSize);

function initialize() {
    let speed = 10;

    let loop = function() {
        drawBackground();
        testPen.draw();
        if (play) {
            playButton.value = "Stop";
            testPen.update(time);
            time += speed / 100;
        }
        else {
            playButton.value = "Play";
            time = 0;
        }
   }

    let interval = setInterval(loop, 1);
}

document.onload = initialize();

//When the sliders are changed, reset their values
lengthSlider.oninput = function() { 
    lengthOutput.innerHTML = lengthSlider.value; 
    testPen.changeLength(lengthSlider.value);
}
massSlider.oninput = function() { 
    massOutput.innerHTML = massSlider.value; 
    testPen.changeMass(massSlider.value);
}
angleSlider.oninput = function() { 
    play = false;
    angleOutput.innerHTML = angleSlider.value;
    testPen.changeAngle(angleSlider.value); 
}

bSlider.oninput = function() {
    bOutput.innerHTML = bSlider.value;
}

//If the damped checkbox is checked
dampedCheck.onchange = function() {
    testPen.changeDamped(bOutput.innerHTML);
}

//If the spacebar is pressed, pause the pendulum
document.body.onkeyup = function(key) {
    if (key.keyCode == 32) {
        playChange();
    }
}

function playChange() {
    play = !play;
    time = 0;
}

function drawBackground() {
    ctx.fillStyle = "rgb(51, 51, 51)";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}