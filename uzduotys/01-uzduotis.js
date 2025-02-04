// uzduotis 2


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



 console.clear();

 //uzduotis5

 function amziausGrupe(grupe) {

    if (grupe >= 12 && grupe <= 19) {
        return  'Jaunuolis';
 }  else if (grupe >= 19 && grupe <= 64) {
        return  'Suauges';
 }  else if (grupe >= 64 && grupe <= 120) {
        return 'Pensininkas';
 }
    else {
        return 'rip';
    }
 
 }
 console.log(amziausGrupe(39));
 console.log(amziausGrupe(13));
 console.log(amziausGrupe(88));
 console.log(amziausGrupe(130));


//1. Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą: "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias?
//2. Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias?
//3. Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.Kurį metodą čia patartumėte naudoti?
//4. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?
//5. Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų grupių: "Jaunuolis"(13 - 19), "Suaugęs"(20 - 64), "Pensininkas"(65 +).Koks operatorius geriausiai tinka šiam atvejui?
// 6. Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar nelyginis, ir atspausdina atitinkamą pranešimą.Kuris operatorius čia tinkamiausias?