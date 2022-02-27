interface Component{
    operation(): string;
}

class ConcreteComponent implements Component{
    public operation(): string {
    return 'Concrete component';
    }
}

class Decorator implements Component{
    protected component: Component;

    constructor(component: Component){
        this.component = component;
    }
    public operation(): string {
        return this.component.operation(); 
    }
}

class ConcreteDecoratorA extends Decorator{

    operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`
    }
}

class ConcreteDecoratorB extends Decorator{

    operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`
    }
}

function clientCode(component: Component) {
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
// clientCode(decorator2);
console.log(decorator2.operation())