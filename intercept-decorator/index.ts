class OnePieceCharacter {
    constructor(private name: string) {
    }

    @logOpponent
    fightOpponent(character: string) {
        console.log(`${this.name} is fighting ${character}`);
    }
}

const luffy = new OnePieceCharacter('Luffy');
luffy.fightOpponent('Luffy');
luffy.fightOpponent('Zorro');

// DECORATORS

function logOpponent(originalMethod: any, context: any) {

    function replaceMethod(this: any, ...args: any[]) {
        const [name] = args;
        let opponent;

        if (name === 'Luffy') {
            opponent = 'Arlong';
        }

        if (name === 'Zorro') {
            opponent = 'Mihawk';
        }

        console.log('Start the method');
        const result = originalMethod.call(this, opponent);
        console.log('End the method');
        return result;
    }

    return replaceMethod;
}
