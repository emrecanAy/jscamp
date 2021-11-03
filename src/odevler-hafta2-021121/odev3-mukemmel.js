/*  
 *  <-- Mükemmel Sayı Kontrolü -->
 * 
 *  *Gereksinim
 *  -Mükemmel sayı, sayılar teorisinde, kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı.
 *   Diğer bir ifadeyle, bir mükemmel sayı, bütün pozitif tam bölenlerinin toplamının yarısına eşittir.
 *   Örnek: 6, 28, 496 ...
 */

function isNumberPerfect(number){

    let sum=0;

    for(let i = 0; i < number; i++){
        if(number % i == 0){
            sum += i;
        }
    }

    if(sum == number) {
        console.log(`${number} is a perfect number!`);
    } else {
        console.log(`${number} is not a perfect number!`);
    }

}

isNumberPerfect(6);