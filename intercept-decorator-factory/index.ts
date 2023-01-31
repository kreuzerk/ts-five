class OnePieceCharacter {

    constructor(private name: string) {
    }

    @findOpponent('Arlongpark')
    logFight() {
        console.log(`${this.name} is winning`)
    }
}

new OnePieceCharacter('Luffy').logFight();

type places = 'Arlongpark' | 'Dresrosa' | 'Alabasta' | 'Waterseven' | 'Wanu Kuni';
type opponents = 'Arlong' | 'Do Flamingo' | 'Sir Crocodile' | 'Kaku' | 'Killer';

interface Fight {
    place: places,
    opponent: opponents
}

export type fightMap = { [key: string]: Fight[] }


function findOpponent(place: places) {
    return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
        function replaceMethod(this, ...args: any[]) {
            const {name} = this;
            const opponent = getOpponent(name, place);
            console.log(`${name} is fighting ${opponent} on ${place}`);
            originalMethod.call(this, ...args);
        }

        return replaceMethod;
    }
}

function getOpponent(name: string, place: places): opponents | undefined {
    const fightMap: fightMap =
        {
            luffy: [
                {
                    place: 'Arlongpark',
                    opponent: 'Arlong'
                },
                {
                    place: 'Dresrosa',
                    opponent: 'Do Flamingo'
                },
                {
                    place: 'Alabasta',
                    opponent: 'Sir Crocodile'
                }
            ],
            zorro: [
                {
                    place: 'Waterseven',
                    opponent: 'Kaku'
                },
                {
                    place: 'Wanu Kuni',
                    opponent: 'Killer'
                }
            ]
        }
    const opponent = fightMap[name.toLowerCase()].find(fight => fight.place === place)?.opponent;
    if (!opponent) {
        console.warn(`${name} was not fighting on ${place}`);
    }
    return opponent;
}
