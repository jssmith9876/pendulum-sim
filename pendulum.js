class Pendulum {
    constructor(hangX, hangY, theta, length, size) {
        this.hangX = hangX;
        this.hangY = hangY;
        this.theta = theta;
        this.theta_inital = theta;
        this.length = length;
        this.size = size;
    }

    draw() {
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";

        let ballX = this.length * Math.sin(this.theta * Math.PI / 180) + this.hangX;
        let ballY = this.length * Math.cos(this.theta * Math.PI / 180) + this.hangY;

        ctx.beginPath();
        ctx.moveTo(this.hangX, this.hangY);
        ctx.lineTo(ballX, ballY);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(ballX, ballY, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update(time) {
        this.theta = this.theta_inital * Math.cos(Math.sqrt(g / this.length) * time);
    }
}