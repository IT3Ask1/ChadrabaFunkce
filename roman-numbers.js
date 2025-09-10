/**
 * Vytvoř funkci convertRomanToNumber(romanNumber), která převede římské číslo na přirozené číslo.
 * Vstupní parametr romanNumber je římské číslo.
 * Výstupní hodnota je přirozené číslo, které odpovídá římskému číslu, př. III -> 3
 * 
 * Symbol       Hodnota
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */

function convertRomanToNumber(romanNumber) {
    const romanToInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < romanNumber.length; i++) {
        const current = romanToInt[romanNumber[i]];
        const next = romanToInt[romanNumber[i + 1]];

        if (next > current) {
            // Pokud je další hodnota větší, odečti aktuální hodnotu
            result -= current;
        } else {
            // Jinak přičti aktuální hodnotu
            result += current;
        }
    }

    return result;
    
}

console.log(convertRomanToNumber("III")); // output: 3
console.log(convertRomanToNumber("XXXIV")); // output: 34
console.log(convertRomanToNumber("MMXXIII")); // output: 2023