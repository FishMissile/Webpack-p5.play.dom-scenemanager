export default class wall {
    constructor(wallgroup, p, walls) {
        //p.rectMode(p.CORNER)
        //this.ballVector = p.createVector(x, y)
        this.left = p.createSprite(10, p.height / 2, 20, p.height)
        this.left.setCollider("rectangle")
        this.left.immovable = true
        this.left.debug = false
        this.left.draw = () => {
            p.push()
            p.rectMode(p.CENTER)
            p.fill(100, 100, 100)
            p.rect(0, 0, 20, p.height)
            p.pop()
        }

        this.top = p.createSprite(p.width / 2, 10, p.width, 20)
        this.top.setCollider("rectangle")
        this.top.immovable = true
        this.top.debug = false
        this.top.draw = () => {
            p.push()
            p.rectMode(p.CENTER)
            p.fill(100, 100, 100)
            p.rect(0, 0, p.width, 20)
            p.pop()
        }

        this.bottom = p.createSprite(p.width / 2, p.height - 10, p.width, 20)
        this.bottom.setCollider("rectangle")
        this.bottom.immovable = true
        this.bottom.debug = false
        this.bottom.draw = () => {
            p.push()
            p.rectMode(p.CENTER)
            p.fill(100, 100, 100)
            p.rect(0, 0, p.width, 20)
            p.pop()
        }

        this.right = p.createSprite(p.width - 10, p.height / 2, 20, p.height)
        this.right.setCollider("rectangle")
        this.right.immovable = true
        this.right.debug = false
        this.right.draw = () => {
            p.push()
            p.rectMode(p.CENTER)
            p.fill(100, 100, 100)
            p.rect(0, 0, 20, p.height)
            p.pop()
        }

        wallgroup.add(this.left)
        wallgroup.add(this.top)
        wallgroup.add(this.bottom)
        wallgroup.add(this.right)
        walls.push(this.left)
        walls.push(this.top)
        walls.push(this.bottom)
        walls.push(this.right)
    }

}