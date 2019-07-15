
import state from './state';

export class Layer {
    constructor(p) {
        this.children = [];
        this.Draw = (p) => {
            this.children.forEach(child => {
                child.draw(p)
            });
        };
        this.Update = (p) => {
            this.children.forEach(child => {
                child.update(p, state.ballgroup)
            });
        };
    }
}

