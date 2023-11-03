/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
console.log('-------- 1 uzduotis')

let vardas = 'Deimantas'
let pavarde = 'Damkus'
let metai = 23
console.log(`As esu ${ vardas} ${pavarde}. Ir man yra ${metai} metai.`)
console.log('')

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
console.log('-------- 2 uzduotis')


let numb1 = Math.random() * 5
let numb2 = Math.random() * 5
let rezultatas

if(numb1 > numb2){
 rezultatas = numb1 / numb2
 console.log('Rezultatas:',rezultatas.toFixed(2))
} else if(numb1 < numb2){
  rezultatas = numb2 / numb1
  console.log('Rezultatas:',rezultatas.toFixed(2))
} else {console.log('kintamieji yra lygus')}
console.log('')


/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

console.log('-------- 3 uzduotis')

let skaicius1 = Math.random() * 26
let skaicius2 = Math.random() * 26
let skaicius3 = Math.random() * 26

console.log('Pirmas skaicius:',skaicius1)
console.log('Antras skaicius:',skaicius2)
console.log('Trecias skaicius:',skaicius3)

if(skaicius1 < skaicius2 && skaicius1 > skaicius3 || skaicius1 > skaicius2 && skaicius1 < skaicius3){
  console.log('Vidurinis skaicius yra:', skaicius1)
} else if(skaicius2 < skaicius1 && skaicius2 > skaicius3 || skaicius2 > skaicius1 && skaicius2 < skaicius3){
  console.log('Vidurinis skaicius yra:', skaicius2)
} else if(skaicius3 < skaicius2 && skaicius3 > skaicius1 || skaicius3 > skaicius2 && skaicius3 < skaicius1){
  console.log('Vidurinis skaicius yra:',skaicius3)
} else{
  console.log('Vidurinis skaicius yra: KLAIDA')
}
 // suapvalint neprase :D


console.log('')


/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
console.log('-------- 4 uzduotis')

kr1 = Math.floor(Math.random() * 10) + 1;
kr2 = Math.floor(Math.random() * 10) + 1;
kr3 = Math.floor(Math.random() * 10) + 1;

console.log(kr1)
console.log(kr2)
console.log(kr3)

function trikampis(pirma, antra, trecia){
  if(pirma + antra > trecia && antra + trecia > pirma && trecia + pirma > antra){
    console.log('Trikampi sudaryti galima')
  } else {
    console.log('Trikampio sudaryti negalima')
  }
}

trikampis(kr1, kr2, kr3)

console.log("")

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
console.log('--------- 5 uzduotis ')

let kint1 = Math.round(Math.random() * 2)
let kint2 = Math.round(Math.random() * 2)
let kint3 = Math.round(Math.random() * 2)
let kint4 = Math.round(Math.random() * 2)





console.log('')
/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
console.log('-------- 6 uzduotis')


for(let i = 0; i < 3;i++){
let randomskaicius = Math.round((Math.random() * 21) - 10);

if(randomskaicius < 0){
  console.log(`[${randomskaicius}]`)
}else if (randomskaicius === 0){
  console.log(`(${randomskaicius})`)
} else {
  console.log(`{${randomskaicius}}`)
}

}



console.log('')
/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

console.log('-------- 7 uzduotis')
function apskaiciuotizvakiuKaina(zvakiuKiekis){
  let zvakesKaina = 1
  let kaina
  let nuolaida
  

  if(zvakiuKiekis < 1000){
    kaina = zvakiuKiekis * zvakesKaina
    console.log(`Zvakiu kaina yra: `, kaina)
  }
  else if(zvakiuKiekis >= 1000 && zvakiuKiekis < 2000){
    nuolaida = zvakiuKiekis * zvakesKaina * 0.03
    kaina = zvakiuKiekis * zvakesKaina - nuolaida
    console.log(`Zvakiu kaina yra:`,kaina)
  }  
  else if(zvakiuKiekis >= 2000){
    nuolaida = zvakiuKiekis * zvakesKaina * 0.04
    kaina = zvakiuKiekis * zvakesKaina - nuolaida
    console.log(`Zvakiu kaina yra:`,kaina)
  } else {
    console.log(`Klaida`)
  }
  }  

  const min = 5;
  const max = 3000;
  
 // Math.floor(Math.random() * (max - min + 1)) + min;


  let randomzvakiukiekis = Math.floor(Math.random() * (max - min + 1)) + min
  apskaiciuotizvakiuKaina(randomzvakiukiekis)


  console.log('')

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
console.log('-------- 8 uzduotis')

let a = Math.random() * 100
let b = Math.random() * 100
let c = Math.random() * 100

let vid = (a+b+c)/3
console.log('Vidurkis:', vid)

let vid2

if(a < 10 || a > 90){
  
}



console.log('')

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
console.log('9 uzduotis')

let valandos = Math.floor(Math.random() * 24);
let minutes = Math.floor(Math.random() * 60)
let sekundes = Math.floor(Math.random() * 60)
let papildomos = Math.floor(Math.random() * 301)


console.log(`${valandos} : ${minutes} : ${sekundes}`)



console.log('')
/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let pirmaskintamasis = Math.floor(Math.random() * 9000) + 1000;
let antraskintamasis = Math.floor(Math.random() * 9000) + 1000;
let treciaskintamasis = Math.floor(Math.random() * 9000) + 1000;
let ketvirtaskintamasis = Math.floor(Math.random() * 9000) + 1000;
let penktaskintamasis = Math.floor(Math.random() * 9000) + 1000;
let sestaskintamasis = Math.floor(Math.random() * 9000) + 1000;