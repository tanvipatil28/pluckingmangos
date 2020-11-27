class Tree{
    constructor(x,y) {
        var options = {
            isStatic:true
        }
this.body=Bodies. rectangle(x,y,5,5, options);
this.width=5;
this.height=5;
        this.image=loadImage("sprites/tree.png")
World.add(world,this.body)
}
display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,500,500);

}
}