/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/
console.log('ANTRO LAPO 01 UZDUOTIS')

x = 10
while(x >= 1){
  console.log(x);
  x--;
}
console.log('')
/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/
console.log('ANTRO LAPO 02 UZDUOTIS')
for(let i = 10; i >= 1; i--){
  console.log(i)
}


console.log('')
/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/
console.log('ANTRO LAPO 03 UZDUOTIS')
let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

while(numMenuo <= kiekMenSpausdinti){
  numAvys *= 4
  console.log(`Po ${numMenuo} menesio bus ${numAvys} aviu`)
  numMenuo++
}
 


console.log('')
/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/
console.log('ANTRO LAPO 04 UZDUOTIS')

let Avys = 4;
let Menuo = 1;
let MenSpausdinti = 12;


for(let i = 1; i <= MenSpausdinti; i++){
  Avys *= 4
  console.log(`Po ${Menuo} menesio bus ${Avys} aviu`)
  Menuo++
}




console.log('')
/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/
console.log('ANTRO LAPO 05 UZDUOTIS')
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;



  


/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/



/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/
console.log('ANTRO LAPO 07 UZDUOTIS')
let num=10;
while (num > 0) {
if(num % 2==0){
  console.log(num);
}


num--;
}


/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/
console.log('ANTRO LAPO 08 UZDUOTIS')
function kurisdidesnis(sk1, sk2){
  if(sk1 > sk2){
    console.log(`Iš skaičių ${sk1} ir ${sk2} didesnis yra: ${sk1}`)
  }else if (sk1 < sk2){
    console.log(`Iš skaičių ${sk1} ir ${sk2} didesnis yra: ${sk2}`)
  } else {
    console.log('Duoti skaičiai yra lygus')
  }
}

kurisdidesnis(7,7)

console.log('')