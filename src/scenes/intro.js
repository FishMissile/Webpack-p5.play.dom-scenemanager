import Game from './game'
import state from '../state'

export default class Intro {
    constructor(p) {
        let loc = this
        
        //initial scene setup
        this.setup = () => {
            p.background("teal");
            
        }
        //load game state on scene switch
        this.enter = () => {
            this.y = state.y
            let txt = p.createP("Press Spacebar to switch scenes.")
            txt.position(20, 20)
        }

        //draw intro scene
        this.draw = () => {
            p.background("teal");
            p.line(0, this.y, p.width, this.y);
            this.y++;
            if (this.y > p.height){
                this.y = 0;
            }
        }

        this.keyPressed = () => {
            state.y = loc.y
            console.log("Key Pressed: " + p.keyCode);
            if (p.keyCode == "32") { // 32 = Spacebar
                state.y = this.y
                this.sceneManager.showScene(Game)
            }
        }
    }
}