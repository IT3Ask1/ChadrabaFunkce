/**
 * Vrátí "Fizz", "Buzz", "FizzBuzz" nebo zadané číslo jako řetězec podle následujících pravidel:
 * - Vrátí "FizzBuzz" pokud je číslo dělitelné 3 i 5
 * - Vrátí "Fizz" pokud je číslo dělitelné 3
 * - Vrátí "Buzz" pokud je číslo dělitelné 5
 * - Jinak vrátí zadané číslo jako řetězec
 * 
 * @param {number} num - Vstupní číslo
 * @return {string} Výsledek podle pravidel FizzBuzz
 */
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num.toString();
    }
    
}

// Testovací případy
console.log(fizzBuzz(1));   // Výstup: "1"
console.log(fizzBuzz(3));   // Výstup: "Fizz"
console.log(fizzBuzz(5));   // Výstup: "Buzz"
console.log(fizzBuzz(15));  // Výstup: "FizzBuzz"
console.log(fizzBuzz(98));  // Výstup: "98"
console.log(fizzBuzz(99));  // Výstup: "Fizz"
console.log(fizzBuzz(100)); // Výstup: "Buzz"