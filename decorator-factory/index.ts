class OnePieceCharacter {
    constructor(private name: string) {
    }

    @logWithPrefix('One piece logger')
    greet(){
        console.log(`${this.name} is saying hello`);
    }

}

new OnePieceCharacter('Luffy').greet();

function logWithPrefix(prefix: string){
    return function actulDecorator(method: any, context: ClassMethodDecoratorContext){
        function replaceMethod(this: any, ...args: any[]){
            console.log(`${prefix}: method start`);
            const result = method.call(this, args);
            console.log(`${prefix}: method end`);
            return result;
        }
        return replaceMethod;
    }
}
