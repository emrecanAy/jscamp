/*  
 *  <-- Arkadaş Sayı Kontrolü -->
 * 
 *  *Gereksinim
 *  -İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
 *  Örnek: 220 ve 284 ...
 * 
 */

let sum1, sum2;

let areNumbersFriend = (number1, number2) => {

    sum1 = sumOfDivisors(number1);
    sum2 = sumOfDivisors(number2);

    if(number1 == sum2 && number2 == sum1){
        console.log(`${number1} and ${number2} are friend numbers!`);
    } else {
        console.log(`${number1} and ${number2} are not friend numbers!`);
    }
    
}

let sumOfDivisors = (number) => {

    let sum;

    for(let i = 0; i < number; i++){
        if(number % i == 0){
            sum += i;
        }
    }
    
    return sum;
    
}

areNumbersFriend(220, 284);