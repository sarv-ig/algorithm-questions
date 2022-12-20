//  My dictionary  type is { word: enable }
const DICTIONARY: { [word: string]: boolean; } = {
    th: true,
    the: false,
    this: true,
    is: true,
    sarv: true,
    group: true,
    s: true,
    sa: true,
    sar: true,
    arv: true,
    rv: true,
    v: true,
} as const;

const enabledDictionaryWords: string[] = Object.keys(DICTIONARY).filter((word: string) => DICTIONARY[word]);

const findDictionary = (sentensece: string): void => {
    const dictionaryCore = (sentensece: string, dicOut: string = '') => {
        if (sentensece.length === 0) {
            console.log(dicOut)
        } else {
            for (let i = 1; i <= sentensece.length; i++) {
                const prefix = sentensece.substring(0, i);
                if (enabledDictionaryWords.includes(prefix)) {
                    dictionaryCore(sentensece.substring(i), `${dicOut} ${prefix}`)
                }
            }
        }
    }
    dictionaryCore(sentensece);
}


console.log(findDictionary('thisissarvgroup'));