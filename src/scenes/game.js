import Intro from './intro';
import state from '../state';
import newBall from '../objects/newball';
//import { Layer } from '../layers';
import Player from '../objects/player';
import Walls from '../objects/walls';
import Block from '../objects/block'

//let layer;
let player;
let wallgroup;
let wallinit
let walls = []
let balls = []
let cols = 10
let rows = 8
let blockgroup
export default class Game {
    constructor(p) {
        //inital game setup
        this.setup = () => {
            p.useQuadTree(true)
            p.frameRate(60)
            //layer = new Layer(wallgroup)
            player = new Player(p)
            wallgroup = new p.Group(p)
            blockgroup = new p.Group(p)
            for (let i = 0; i < cols; i++) {
                let col = 130 + i * 60
                for (let j = 0; j < rows; j++) {

                    let row = 110 + j * 30
                    let block = new Block(p, col, row, 20, 35, blockgroup)

                }

            }
        }

        //load game state on scene switch
        this.enter = () => {
            wallinit = new Walls(wallgroup, p, walls)
            this.y = state.y
        }

        //draw game scene
        this.draw = () => {
            p.background("grey");
            wallgroup.draw(p);
            p.line(0, this.y, p.width, this.y);
            this.y++;
            if (this.y > p.height) {
                this.y = 0;
            }
            p.fill(0,250,0)
            p.text(Math.floor(p.frameRate()),10,10)
            p.line(0,p.frameRate(), p.width, p.frameRate())
    
            balls.forEach(ball => {
                ball.update(p, state.ballgroup)
            });

            player.update(p);

            player.paddle.displace(state.ballgroup, this.Test)
            state.ballgroup.bounce(blockgroup, this.blockHit)
            state.ballgroup.bounce(wallgroup)
            state.ballgroup.draw(p)
            blockgroup.draw(p)
            player.draw(p)
            
            state.ballgroup.draw(p)
        }


        //controls
        this.keyPressed = () => {
            state.y = this.y
            switch (p.keyCode) {
                case '1':
                    state.y = this.y - 200
                    break;
                case '2':
                    state.y = this.y + 200
                    break;
                case 32:
                    state.y = this.y
                    this.sceneManager.showScene(Intro);
                    state.ballgroup.removeSprites()
                    wallgroup.removeSprites()
                    state.balls = []
                    break;
                default:
                    break;
            }
        }

        this.mousePressed = () => {
            let newball = new newBall(p.mouseX, p.mouseY, p, state.ballgroup, balls)//make a new ball at the mouse position
            //layer.children.push(newball)
            state.balls.push(newball)//add to list of balls

        }


    }
    blockHit (ball, block) {
        block.remove()
    }

    Test(paddle, ball){
        let direction = ball.getDirection()
        let contact = paddle.position.x - ball.position.x
        if (paddle.touching.left) {
            ball.setSpeed(12, -direction - 180)
        }
        if (paddle.touching.right) {
            ball.setSpeed(12, -direction - 180)
        }
        if (paddle.touching.top) {
            if (contact >= 0 && contact < 55) {//left
                if (direction < 155 && direction > 5) {
                    ball.setSpeed(12, -direction * 0.8 - contact)
                } else {
                    ball.setSpeed(12, -direction)
                }
            } else if (contact < 0 && contact > -55) {//right
                if (direction < 175 && direction > 30) {
                    let newDir = -direction / 0.8 - contact
                    ball.setSpeed(12, newDir)
                } else {
                    ball.setSpeed(12, -direction)
                }
            }
        } else {
            if (paddle.touching.bottom) {
                ball.setSpeed(12, -direction)
            }
        }

    }
}