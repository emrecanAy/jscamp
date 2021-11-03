/*  
 *  <-- 1000'e Kadar Olan Asal Sayılar Kontrolü -->
 * 
 *  *Gereksinim
 *  1000'e kadar olan asal sayılar.
 *  -Sayı sadece 1'e ve kendisine bölünebilir.
 *  Örnek: 2, 3, 5, 7 ...
 * 
 */

let findPrimeNumbersUpTo1000 = () => {

    
    let primeNumbers = [];
   
    for(let i = 2; i < 1000; i++){ 

        let total = 0;
        for (let j = 2; j < i; j++){
            if(i % j == 0){
                total++;
            }
        }

        if(total == 0){
            primeNumbers.push(i);
        }
    }

    console.log(primeNumbers);

}

findPrimeNumbersUpTo1000();

