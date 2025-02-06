/*
 Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) išvedasezono pavadinimą
 ("Pavasaris", "Vasara", "Ruduo", "Žiema").
 Kuri struktūra geriausiai tinka šiam uždaviniui?
*/
function getSeason(month){
    switch(month){
        case 1:
        case 2:
        case 12:
            return 'ziema';
        case 3:
        case 4:
        case 5:
            return 'pavasaris';
        case 6:
        case 7:
        case 8:
            return 'vasara';
        case 9:
        case 10:
        case 11:
            return 'ruduo';
        default:
            return 'neteisingai ivesta';
    }
}

console.log(getSeason(3));
console.log(getSeason(7));
console.log(getSeason(11));
console.log(getSeason(13));


/* 
Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, ar ne, ir atitinkamai išveda pranešimą.
Kuris operatorius naudoti?
*/

function isEqual(n1,n2){
    return n1===n2 ? 'skaiciai yra lygus':'skaiciai nera lygus';
}

console.log(isEqual(3,5));
console.log(isEqual(3,3));


/*
Sukurkite funkciją, kuri patikrina, ar vartotojo įvestas simbolis yra balsė, priebalsė ar nėra raidė.
Koks operatorius geriausiai tinka?
*/ 


/*
Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) išveda, 
ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti?
*/
function checkWeekday(weekday){


    switch(weekday){
        case 'pirmadienis':
        case 'antradienis':
        case 'treciadienis':
        case 'ketvirtadienis':
        case "penktadienis":
            return 'darbo diena';
        case 'sestadienis':
        case 'sekmadienis':
            return 'savaitgalis';
        default:
            return 'neteisingai ivesta';
    }
}

console.log(checkWeekday ('pirmadienis'));
console.log(checkWeekday('sestadienis'));



/*
Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę: "Šalta"(< 10°C), "Šilta"(10 - 25°C),
"Karšta"(> 25°C).Koks operatorius geriausiai tinka?
*/


/* 
Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3, tiek 5.
Kurį operatorių naudoti?
*/ 


/*
Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") išveda atitinkamą veiklą:
"Dirbti", "Ilsėtis".Kuri struktūra geriausiai tinka?
*/


/*
Parašykite programą, kuri nustato, ar vartotojo įvestas metai yra keliamieji.Kurį operatorių naudoti?
*/


/*
Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius) priskiria aprangos rekomendaciją:
"Kepurių nereikia", "Kepurės reikalingos", "Geriau neik į lauką".Koks operatorius geriausiai tinka?
*/


    