// Add your Circle class here
const pi = Math.pi

class Circle {
    constructor (radius){
        this.radius = radius;
    }
}

    get diameter(){
        return this.radius * 2
}

    set diameter(diameter){
        this.radius = diameter/2
}

    get circumfrence(){
        return (this.radius * 2) * pi
}

    set circumfrence(circumfrence){
        this.radius = circumfrence/(pi * 2)
}

    get area() {
        return pi * ( this.radius * this.radius )
  }

    set area( area ) {
        this.radius = Math.sqrt( area / pi )
  }
}