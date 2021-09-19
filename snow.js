class Snow{
    constructor(x,y,10,10){
    var options = {
        isStatic: false,
        friction:1
    }

    this.snow = Bodies.rectangle(x,y,10,10,options);
    World.add(world, this.body);
    this.snow = loadImage("snow4.webp")
    

    }




} 