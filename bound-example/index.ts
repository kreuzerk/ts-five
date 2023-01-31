class OnePieceCharacter {
    constructor(private name: string) {
    }

    @bound
    @logMethod
    greet(){
        console.log(`${this.name} is saying hello`);
    }
}
const luffy = new OnePieceCharacter('Luffy');
luffy.greet();
const myFunc = luffy.greet;
myFunc();

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

function bound(originalMethod: any, context: ClassMethodDecoratorContext){
    const methodName = context.name;
    if(context.private){
        throw new Error('bound can not be used on private methods');
    }
    context.addInitializer(function (){
        this[methodName] = this[methodName].bind(this);
    });
}
