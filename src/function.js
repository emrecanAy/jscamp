function addToCart(productName="Elma", quantity){
    console.log("Sepete eklendi : " + productName + 
                ", Adet : " + quantity );
}

//addToCart(undefined, 50);
///ddToCart("Yumurta", 12);
//addToCart(15);

let sayHello = () => {
    console.log("Hello world!");
}

//sayHello();

let sayHello2 = function (){
    console.log("Hello world 2!")
}

//sayHello2();

function addToCart2(productName, quantity, unitPrice){

}

addToCart2("Elma", 5, 10);
addToCart2("Armut", 2, 20);
addToCart2("Limon", 3, 145);

let product1 = {productName: "Elma", quantity: 5, unitPrice: 10}

function addToCart3(product){
    console.log("Ürün: " + product.productName);
    console.log("Adet: " + product.quantity);
    console.log("Fiyat: " + product.unitPrice);
}

addToCart3(product1);

let product2 = {productName: "Elma", quantity: 5, unitPrice: 10}
let product3 = {productName: "Elma", quantity: 5, unitPrice: 10}
product2 = product3;
product2.productName = "KARPUZ";
console.log(product3.productName);

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
console.log(sayi1);

function addToCart4(products){
    console.log(products);
}

let products = [
    {productName: "Elma", quantity: 5, unitPrice: 10},
    {productName: "Elma", quantity: 5, unitPrice: 10},
    {productName: "Elma", quantity: 5, unitPrice: 10}
];

addToCart4(products);

function add(...numbers){
    let total = 0;
    for(let i=0; i<numbers.length;i++){
        total = total + numbers[i];
    }
    console.log(total);
}

add(20, 30);

let numbers = [30, 10, 500, 600, 120];
console.log(Math.max(...numbers));


let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {name: "İç Anadolu", population: "20M"},
    {name: "Marmara", population: "30M"},
    {name: "Karadeniz", population: "10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]

console.log(icAnadolu.name);
console.log(marmara.population);
console.log(icAnadoluSehirleri);
console.log(marmaraSehirleri);
console.log(karadenizSehirleri);

let newProductName, newUnitPrice, newQuantity = 
{productName: "Elma", unitPrice: 10, quantity:5}