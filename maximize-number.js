/**
 * Vytvoř funkci maximizeNumber(num), která zjistí, jaké je
 * maximální číslo, které lze získat změnou nejvýše jedné číslice (6 na 9 nebo 9 na 6).
 * 
 * Vstupní parametr num je kladné celé číslo složené pouze z číslic 6 a 9.
 * Výstupní hodnota je číslo – maximální možné číslo po provedení nejvýše jedné změny.
 */

function maximizeNumber(num) {
        let numStr = num.toString();
        for (let i = 0; i < numStr.length; i++) {
            if (numStr[i] === '6') {
                // Změní první výskyt '6' na '9' a vrátí výsledek jako číslo
                return parseInt(numStr.slice(0, i) + '9' + numStr.slice(i + 1), 10);
            }
        }
        // Pokud není žádná '6', vrátí původní číslo
        return num;
    
}

console.log(maximizeNumber(9669)); // output: 9969
console.log(maximizeNumber(9996)); // output: 9999
console.log(maximizeNumber(9999)); // output: 9999