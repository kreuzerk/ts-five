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

function logMethod(originalMethod: any, context: ClassMethodDecoratorContext){

    function replaceMethod(this: any, ...args: any[]){
        console.log('Start the method');
        const result = originalMethod.call(this, ...args);
        console.log('End the method');
        return result;
    }

    return replaceMethod;
}
