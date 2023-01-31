import * as os from "os";

export class OnePieceCharacter {
    @fullName
    name = 'Luffy'
}

console.log(new OnePieceCharacter().name);

function fullName(field, context: ClassFieldDecoratorContext){
    function replacement(initialValue: string){
        return `Monkey D. ${initialValue}`;
    }
    return replacement;
}
