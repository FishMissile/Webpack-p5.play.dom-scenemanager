import * as p5 from 'p5';
import './lib/p5.play'
import './lib/p5.dom'
import './css.css'
import SceneManager from './lib/scenemanager'
import Intro from './scenes/intro'
import state from './state'

let width = window.innerWidth
let height = window.innerHeight
let ball
let mgr

//p5 Sketch
let s = (p) => {
    p.setup = () => {

        p.createCanvas(800, 800)

        state.ballgroup = new p.Group()
        p.useQuadTree(true)

        //Setup Scenes
        mgr = new SceneManager(p);
        mgr.wire();
        mgr.showScene(Intro);//Go straight to Intro
    }

}
const P5 = new p5(s);

