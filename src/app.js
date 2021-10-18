console.log("Merhaba Kodlama.io");


//let, var, const

//var dolarDun = 9.20;
//dolarDun = "Ankara"; //normalde c#, java gibi dillerde type safe olduğu için yapamayız.

var dolarBugun = 9.30;

var dolarDun;
console.log(dolarDun);

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"];
//console.log(konutKredileri);

console.log("<ul>")
for (let i = 0; i< konutKredileri.length; i++) {
    console.log("<li>"+ konutKredileri[i] + "</li>");
}
console.log("</ul>")




