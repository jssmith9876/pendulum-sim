


function initialize() {

    const length = HEIGHT - 50;
    const ballSize = 30;
    const startAngle = 30;

    let testPen = new Pendulum(WIDTH / 2, 0, startAngle, length, ballSize);

    let speed = 10;

    let time = 0;

    let loop = function() {
        drawBackground();

        testPen.draw();
        testPen.update(time);
        time += speed / 100;
    }

    let interval = setInterval(loop, 1);

}

document.onload = initialize();


function drawBackground() {
    ctx.fillStyle = "rgb(51, 51, 51)";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}