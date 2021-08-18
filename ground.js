class ground{
    constructor(x,y,w,h) {
        let options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w
        this.y = y
        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position
        push()
        rectMode(CENTER)
        stroke(225)
        fill("yellow")
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}