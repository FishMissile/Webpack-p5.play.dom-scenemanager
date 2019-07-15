export default class block{
    constructor(p,x,y,h,w,blockgroup){
        this.block = p.createSprite(x,y,w,h)
        this.block.setCollider("rectangle",0,0,w-5,h-5 )
        this.block.debug = true;
        this.w = w
        this.h = h

        this.block.draw =()=>{    
            p.push()
            p.ellipseMode(p.CORNER)
            p.fill(200,0,0)
            p.rect(0,0,w,h)
            p.pop()
        }
        blockgroup.add(this.block)
    }
}