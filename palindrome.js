/**
 * Vytvoř funkci isPalindrome(str), která zjistí, zda je zadaný řetězec palindromem (slovo, které se čte stejně pozpátku)
 * Vstupní parametr str je řetězec.
 * Výstupní hodnota je booleanovská hodnota, která označuje, zda je zadaný řetězec palindromem.
 */
function isPalindrome(str) {
    // Převod na malá písmena a odstranění mezer
    const cleanedStr = str.toLowerCase().replace(/\s+/g, '');
    // Porovnání řetězce s jeho obrácenou verzí
    return cleanedStr === cleanedStr.split('').reverse().join('');
}


console.log(isPalindrome("racecar")); // output: true
console.log(isPalindrome("hello")); // output: false
