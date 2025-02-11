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
function balse(raide) {
    raide = raide.toLowerCase();

    const balses = ['a', 'ą', 'e', 'ę', 'ė', 'i', 'į', 'y', 'o', 'u', 'ū', 'ų'];
    const priebalse =  ['b', 'c', 'č', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'š', 't', 'v', 'z', 'ž'];

    return balses.includes(raide) ? 'Balse' : priebalse.includes(raide) ? 'Priebalse' : 'neteisingai ivesta';
 }

 console.log(balse('a'));
 console.log(balse('h'));

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
function weather(temp){
    switch (true) {
        case (temp < 10):
            return 'salta'
        case (temp >= 10 && temp < 25):
            return 'silta'
        case (temp >= 25):
            return 'karsta';
        default:
            return 'netinkamai ivesta';
        }
  }
console.log(weather(20));
console.log(weather(-1));
console.log(weather(30));



/* 
Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3, tiek 5.
Kurį operatorių naudoti?
*/ 

function daliklis(num) {
    if (num % 3 === 0 && num % 5 === 0){
        return 'daliklis'
    } else 
        return 'sis skaicius nedalus'
  }
  
  console.log(daliklis(30));
  console.log(daliklis(4));

/*
Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") išveda atitinkamą veiklą:
"Dirbti", "Ilsėtis".Kuri struktūra geriausiai tinka?
*/

function ilsetis(diena) {
switch (diena){
    case 'darbo diena':   
        return 'dirbti';
    case 'savaitgalis':
        return 'ilsėtis';
    default:
        return 'neteisingai ivesta';
    }
}
   
console.log(ilsetis('darbo diena'));
console.log(ilsetis('savaitgalis'));

/*
Parašykite programą, kuri nustato, ar vartotojo įvestas metai yra keliamieji.Kurį operatorių naudoti?
*/

function keliami(metai) {
    return metai % 4 === 0 ? 'keliamieji' : 'nekeliamieji';
}

console.log(keliami(2008));
console.log(keliami(1970));

/*
Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius) priskiria aprangos rekomendaciją:
"Kepurių nereikia", "Kepurės reikalingos", "Geriau neik į lauką".Koks operatorius geriausiai tinka?
*/

function kepure(celsius) {
    switch (true) {
        case (celsius < -10):
            return 'Geriau neik į lauką'
        case (celsius >= -10 && celsius < 10):
            return 'Kepurės reikalingos'
        case (celsius >= 10):
            return 'Kepurės nereikia';
        default:
            return 'netinkamai įvesta temperatūra';
        }
  }

console.log(kepure(-20));
console.log(kepure(9));
console.log(kepure(25));
    