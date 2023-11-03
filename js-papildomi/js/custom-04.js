/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
console.log('KETVIRTO LAPO 01 UZDUOTIS')

let augalai = ['Roze', 'Tulpe', 'Lelija', 'Orchideja', 'Kaktusas', 'Medis', 'Zole', 'Gele', 'Narcizas', 'Gvazdikas']
console.log('')
/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
console.log('KETVIRTO LAPO 02 UZDUOTIS')

// console.log(augalai[0])
// console.log(augalai[1])
// console.log(augalai[2])
// console.log(augalai[3])
// console.log(augalai[4])
// console.log(augalai[5])
// console.log(augalai[6])
// console.log(augalai[7])
// console.log(augalai[8])
// console.log(augalai[9])


for(let i = 0; i < augalai.length;i++){
  console.log('Augalas:', augalai[i])
}

console.log('')
/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
console.log('KETVIRTO LAPO 03 UZDUOTIS')

for(let i = augalai.length - 1; i >= 0;i--){
  console.log('Augalas:',augalai[i])
}
console.log('')

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
console.log('KETVIRTO LAPO 04 UZDUOTIS')

let trumpesninei5 = 0
let ilgesninei7 = 0


for( i in augalai){
if(augalai[i].length < 5){
  trumpesninei5++;
} else if(augalai[i].length > 7){
  ilgesninei7++;
}
}

console.log('Zodziu trumpesniu uz 5raides yra:',trumpesninei5)
console.log('Zodziu ilgesniu nei 7raudes yra:',ilgesninei7)