/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
console.log('TRECIO LAPO 01 UZDUOTIS')
for ( let i = 0; i < 10; i++) {
  console.log( "labas" ); }
  console.log('')

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
console.log('TRECIO LAPO 02 UZDUOTIS')
for(let i = 0; i < 10; i++){
  console.log(i)
}
console.log('')
/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
console.log('TRECIO LAPO 03 UZDUOTIS')
for(let i = 10; i < 51; i++){
  if(i % 2==0){
    console.log(i)
  }
}
console.log('')
/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
console.log('TRECIO LAPO 04 UZDUOTIS')
for(let i = 10; i < 51; i++){
  if(i % 10 === 0){
    continue
  } else if( i % 2==0){
    console.log(i)
  }
}

/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
console.log('TRECIO LAPO 05 UZDUOTIS')    

let ciklas = 0
let lyginiusuma = 0
for(let i = 0; i < 21;i++){
  console.log(i)
  if(i %2==0){
    lyginiusuma += 1
  }
} console.log(`Lyginiu skaiciu suma: ${lyginiusuma}`)


/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
console.log('TRECIO LAPO SUNKESNI 01 UZDUOTIS') 
let daugiaunei150 = 0
let skaiciai = ''

for(let i = 0; i < 301;i++){
  let random = Math.floor(Math.random() * 300)
  if(random > 150){
    daugiaunei150++
  } if(random > 275){
    skaiciai += `[${random}]`
  } continue
}
skaiciai += `${random}`

console.log(skaiciai)
console.log(`Daugiau kaip 150: ${daugiaunei150}`)

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
console.log('TRECIO LAPO SUNKESNI 02 UZDUOTIS') 

let string = ''

for(let i = 1; i < 3001; i++){
  if(i === Math.floor(3000/77) * 77){
    string += `${i}`
  } else if(i % 77 ==0){
    string += `${i}, `
  }
}
console.log(string)

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
console.log('TRECIO LAPO/SUNKESNE 3 UZDUOTIS')  

console.log(`* * * * * * * * * * 
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * * 
* * * * * * * * * *`)