/*
1. Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą:
 "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias?
*/

function getRating(rating){
    switch (true){
        case(rating>=9&&rating<=10):
            return 'labai gerai';
        case(rating>=7&&rating<=8):
            return 'gerai';
        case(rating>=5&&rating<=6):
            return 'patenkinamai';
        case(rating>=1&&rating<=4):
            return 'nepatenkinamai';
        default:
            return 'neteisingai ivestas ivertinimas';
    }
}

console.log(getRating(7));
console.log(getRating(9));
console.log(getRating(1));
console.log(getRating(11));



/*
2. Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).
Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias?
*/


function balsavimas (amzius){
if (amzius>=18) {
    return 'gali balsuoti';
}
    else {
    return 'negali balsuoti';
}
}
 console.log(balsavimas(14));
 console.log(balsavimas(18));
 console.log(balsavimas(35));
 console.log(balsavimas(70));



/*
3. Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.
Kurį metodą čia patartumėte naudoti?
*/
 function getWeekday(dayNumber){
    switch (true){
        case (dayNumber==1):
            return 'Pirmadienis';
        case (dayNumber==2):
            return 'Antradienis';
        case (dayNumber==3):
            return 'Treciadienis';
        case (dayNumber==4):
            return 'Ketvirtadienis';
        case (dayNumber==5):
            return 'Penktadienis';
        case (dayNumber==6):
            return 'Sestadienis';
        case (dayNumber==7):
            return 'Sekmadienis';
        default:
            return 'Neteisingai ivesta'
    }
 }
console.log(getWeekday(5));
console.log(getWeekday(3));
console.log(getWeekday(1));
console.log(getWeekday(9));



/*
4. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, ir atitinkamai išveda pranešimą.
Kurį operatorių naudoti?
*/
function getNumberType(num){
    return num>=0 ? (num>0 ? 'Teigiamas': 'Nulis'):'Neigiamas';
}
console.log(getNumberType(7));
console.log(getNumberType(-5));
console.log(getNumberType(0));


 /*
 5. Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų grupių:
 "Jaunuolis"(13 - 19), "Suaugęs"(20 - 64), "Pensininkas"(65 +).Koks operatorius geriausiai tinka šiam atvejui?
*/


 function amziausGrupe(grupe) {

    if (grupe >= 12 && grupe <= 19) {
        return  'Jaunuolis';
 }  else if (grupe >= 19 && grupe <= 64) {
        return  'Suauges';
 }  else if (grupe >= 64) {
        return 'Pensininkas';
 }
    else {
        return 'Neteisingai ivesta';
    }
 
 }
 console.log(amziausGrupe(39));
 console.log(amziausGrupe(13));
 console.log(amziausGrupe(88));
 console.log(amziausGrupe(0));


/*
 6. Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar nelyginis, ir atspausdina atitinkamą pranešimą.
 Kuris operatorius čia tinkamiausias?
*/

function oddOrEven(num){
    return num % 2 === 0 ? 'Lyginis':'Nelyginis';
}
console.log(oddOrEven(2));
console.log(oddOrEven(5));
console.log(oddOrEven(0));
console.log(oddOrEven(-2));
