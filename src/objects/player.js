import state from '../state'
//import Gamepad from '../gamepad'

export default class Player {
    constructor(p) {
        console.log("New Player")
        //this.ballVector = p.createVector(x, y) 
        p.rectMode(p.CENTER)
        this.paddle = p.createSprite(p.width / 2, p.height - 100, 100, 13)
        this.paddle.setCollider("rectangle")

        this.paddle.mass = 100
        this.paddle.friction = 0.4
        this.paddle.maxSpeed = 36
        this.paddle.debug = false;

        this.draw = (p) => {
            p.fill(250, 250, 250)
            p.rectMode(p.CENTER)
            p.rect(this.paddle.position.x, p.height - 100, 100, 13)
        }
    }

    update(p) {
        this.paddle.position.y = p.height - 100
        if (p.keyIsDown(65)) {
            this.paddle.addSpeed(8, 180)
        } else if (p.keyIsDown(68)) {
            this.paddle.addSpeed(8, 0)
        }
    }

}