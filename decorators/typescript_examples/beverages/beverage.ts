interface Beverage{
    cost():number
}

class Espresso implements Beverage{ //Concrete class

    cost(): number {
        return 1;
    } 
}

class AddOnDecorator implements Beverage{
    protected beverage:Beverage

    constructor(beverage:Beverage) {
        this.beverage = beverage
    }

    cost(): number {
        return this.beverage.cost();
    }

}

class Caramel extends AddOnDecorator{
    cost(): number {
        return this.beverage.cost() + 2;
    }
}

class Milk extends AddOnDecorator{
    cost(): number {
        return this.beverage.cost() + 3;
    }
}

const espresso = new Espresso()
const caramel = new Caramel(espresso)
const milk = new Caramel(caramel)
console.log(milk.cost())
