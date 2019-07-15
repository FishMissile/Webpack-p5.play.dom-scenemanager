export default class newBall {
    constructor(x, y, p, ballgroup,balls) {
        console.log("New Ball")
        //this.ballVector = p.createVector(x, y)
        this.ballSprite = p.createSprite(x, y, 12, 15)
        this.ballSprite.setCollider("circle", 0, 0, 15)
        this.ballSprite.mass = 0.01
        this.ballSprite.maxSpeed = 9
        //this.ballSprite.friction = 0.05
        // this.ballSprite.setSpeed(8, 130) //down-left
        this.ballSprite.setSpeed(8, 50) //down-right
        this.ballSprite.debug = false;

        this.ballSprite.draw = () => {
            p.ellipseMode(p.CENTER)
            p.fill(200, 200, 200)
            p.stroke(0, 200, 0)
            p.ellipse(0, 0, 22)
            p.push()
            p.fill(0, 200, 0)
            p.translate(0, 0)
            p.rotate(p.radians(this.ballSprite.getDirection()), this.ballSprite.position)
            p.stroke(0, 0, 0)
            p.ellipse(+8, +4, 5)
            p.ellipse(+8, -4, 5)
            p.pop()
        }
        ballgroup.add(this.ballSprite)
        balls.push(this)
    }

    update(p, ballgroup) {
        // this.ballSprite.attractionPoint(10, p.width, p.height)
        ballgroup.bounce(ballgroup)
        // this.ballSprite.addSpeed(0.2 , 90) gravity
        //this.ballSprite.attractionPoint(0.1, p.mouseX, p.mouseY)
    }

}