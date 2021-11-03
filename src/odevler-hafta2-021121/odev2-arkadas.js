/*  
 *  <-- Arkadaş Sayı Kontrolü -->
 * 
 *  *Gereksinim
 *  -İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
 *  Örnek: 220 ve 284 ...
 * 
 */

let areNumbersFriend = function(number1, number2){

    let sum1 = sumOfDivisors(number1); //220
    let sum2 = sumOfDivisors(number2); //284

    if(number1 == sum2 && number2 == sum1){
        console.log(`${number1} and ${number2} are friend numbers!`);
    } else {
        console.log(`${number1} and ${number2} are not friend numbers!`);
    }
    
}

let sumOfDivisors = function(number){

    let sum=0;

    for(let i = 0; i < number; i++){
        if(number % i == 0){
            sum += i;          
        }

    }
    
    return sum;
    
}

areNumbersFriend(220, 284);