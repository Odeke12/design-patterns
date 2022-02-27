interface IColor{
    giveColor(): string
}

class Green implements IColor{
    giveColor(): string {
        return "This shape is green"
    }
}

class Yellow implements IColor{
    giveColor(): string {
        return "This shape is yellow"
    }
}

abstract class Shape{
    private color:IColor
    constructor(color:IColor) {
        this.color = color
    }

    abstract createShape(): string
    getShapeColor():string{
        return this.color.giveColor()
    }
}

class Triangle extends Shape{
    createShape(): string {
        return "This shape is a triangle"
    }
    
}

class Square extends Shape{
    createShape(): string {
        return "This shape is a square"
    }
}

let greenSquare = new Square(new Green())
console.log(greenSquare.createShape())
console.log(greenSquare.getShapeColor())

