
/*  
 *  <-- Asal Sayı Kontrolü -->
 * 
 *  *Gereksinim
 *  -Sayı sadece 1'e ve kendisine bölünebilir.
 *  Örnek: 2, 3, 5, 7 ...
 * 
 */


function findPrimeNumber(...numbers){
    numbers.forEach(number => {
        if(isNumberPrime(number)){
            console.log(`${number} is a prime number!`);
        } else {
            console.log(`${number} is not a prime number!`);
        }
    });
}

function isNumberPrime(number){
    for(let i = 2; i < number; i++){
        if(number % i == 0) return false;
        
    }
    return true;
}

console.log(`The values that we entered: 5, 4, 3, 9, 8`)
findPrimeNumber(5, 4, 3, 9, 8);