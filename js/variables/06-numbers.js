/*
NUMBERS

- sveikieji, desimtainiai
- teigiami, neigiami
- Infinity, NaN (skaiciaus tipo klaida)

*/

const n1=1;
console.log(n1);

const n2=-5;
console.log(n2);

const n3=3.14;
console.log(n3);

const n4=-2.727;
console.log(n4);

const n5=Infinity;
console.log(n5);

const n6=-Infinity;
console.log(n6);

const n7=NaN;
console.log(n7);

console.log('labas rytas'/2);

console.log(7*5);
console.log(7**5);

console.log(2**0);
console.log(2**1);
console.log(2**2);

console.clear();

// Math- matematiniu funkciju "biblioteka"
// js math

console.log('matematines konstantos');
console.log(Math.E);
console.log(Math.PI);

console.log('trigonometrija - naudoja radianus')
console.log(Math.sin(2));

console.log('kubine saknis');
console.log(Math.cbrt(27));

console.log('apvalinimas: ceil');
console.log(Math.ceil(10));
console.log(Math.ceil(9.6));
console.log(Math.ceil(9.2));
console.log(Math.ceil(8.5));

console.log('apvalinimas: floor');
console.log(Math.floor(10));
console.log(Math.floor(9.8));
console.log(Math.floor(8.7));

console.log('apvalinimas: round');
console.log(Math.round(7.8));
console.log(Math.round(7.4));

console.log('"apvalinimas"; trunc');
console.log(Math.trunc(10));
console.log(Math.trunc(9.5));
console.log(Math.trunc(-10));
console.log(Math.trunc(-9.99));


console.log();
console.log('exp');
console.log(Math.exp(2), Math.E **2);

console.log();
console.log('pow');
console.log(Math.pow(2,2), 2 ** 2);

console.log();
console.log('hypot');
console.log(Math.hypot(3,4), Math.sqrt(3**2+4**2));
console.log(Math.hypot(9,6), Math.sqrt(9**2+9**2));

console.log();
console.log('min');
console.log(Math.min(1, 2, 4, 8, -1, 3.5, -2.7, 99));

console.log();
console.log('max');
console.log(Math.max(1, 2, 4, 8, -1, 3.5, -2.7, 99));

console.log();
console.log('sign');
console.log(Math.sign(5));
console.log(Math.sign(-5));

console.log();
console.log('random');
console.log(Math.random());


/**
* generuojamas atsitiktinis skaicius intervale (imtinai)
* @param {number} min Nuo
* @param {number} max Iki
* @returns {number} Atsitiktinis sveikasis skaicius
*/

function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

for (let i=0; i<10; i++){
console.log(i, randomNumber(10,20));
}
 console.clear();

 console.log((3.1314).toFixed());
 console.log((3.1314).toFixed(1));
 console.log((3.1314).toFixed(2));
 console.log((3.1314).toFixed(3));
 
 console.log((3.1).toFixed(2));
 console.log((3.145).toFixed(2));

 function apvalinimas(n, amount){

return Math.round (n*(10**amount))/(10**amount);
 }

 console.log(apvalinimas(10,2));
 console.log(apvalinimas(9.5,2));
 console.log(apvalinimas(3.145,2));

console.clear()

let k=5;
console.log(k);

k=k+10;
console.log(k);

k+=10;
console.log(k);

k/=10;
console.log(k);

++k;
console.log(k);

k+=1;
console.log(k);

++k;
console.log(k);

console.clear()

let k=10;
console.log(k++);
console.log(k);
console.log(k++);
console.log(k);









