class OnePieceCharacter {
    constructor(private name: string) {
    }

    @logMethod
    greet(){
        console.log(`${this.name} is saying hello`);
    }

    @logMethod
    static greetStatic(){
        console.log(`hello there`);
    }
}

const luffy = new OnePieceCharacter('Luffy').greet();

// DECORATORS

function logMethod<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
){
    function replaceMethod(this: This, ...args: Args){
        console.log('Start the method');
        const result = originalMethod.call(this, ...args);
        console.log('End the method');
        return result;
    }

    return replaceMethod;
}
