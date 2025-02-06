/**
 * Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina "true", jei jis teigiamas, ir "false", jei neigiamas arba nulis.
 */
 function iNeedSleep(num){
    return num>0;
 }

 console.log(iNeedSleep(9));
 console.log(iNeedSleep(0));
 console.log(iNeedSleep(-9));

 
/**
 * Užduotis Nr. 2
 * Parašykite funkciją, kuri priima skaičių nuo 1 iki 12 ir grąžina mėnesio pavadinimą.
 */

function getMonthName (month){
    switch (month){
        case 1:
            return 'sausis';
        case 2:
            return 'vasaris';
        case 3:
            return 'kovas';
        case 4:
            return 'balandis';
        case 5:
            return 'geguze';
        case 6:
            return 'birzelis';
        case 7:
            return 'liepa';
        case 8:
            return 'rugpjutis';
        case 9:
            return 'rugsejis';
        case 10:
            return 'spalis';
        case 11:
            return 'lapkritis';
        case 12:
            return 'gruodis';
        default:
            return 'neteisingai ivesta';
    }
 }

 console.log(getMonthName(2));
 console.log(getMonthName(9));
 console.log(getMonthName(20));

 
/**
 * Užduotis Nr. 3
 * Parašykite funkciją, kuri priima du skaičius ir grąžina "Pirmas didesnis", "Antras didesnis" arba "Lygūs".
 */
 function greaterLessNum(n1,n2){
    return n1>=n2 ? (n1>n2 ? 'pirmas didesnis': 'lygus'): 'antras didesnis';
 }

 console.log(greaterLessNum(2,5));
 console.log(greaterLessNum(5,5));
 console.log(greaterLessNum(5,2));

/**
 * Užduotis Nr. 4
 * Parašykite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir grąžina ją Farenheito laipsniais.
 * P.S.: Dirbame tik su skaičiais, be "°C" ir "°F".
 */
function celsiusToFahrenheit (temp){
    return temp*9/5+32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(20));
console.log(celsiusToFahrenheit(-50));

 
/**
 * Užduotis Nr. 5
 * Parašykite funkciją, kuri priima teigiamą skaičių ir grąžina visų jo skaitmenų sumą.
 * P.S.: Jei pateikiamas vienženklis skaičius - grąžiname tą patį skaičių.
 */
function skaiciuSuma(skaicius) {
    let suma = 0;
    skaicius = skaicius.toString();
 
    for (let i = 0; i < skaicius.length; i++) {
        suma += Number(skaicius[i]);
    }
 
    return suma;
}


/**
 * Užduotis Nr. 6
 * Parašykite funkciją, kuri grąžina atsitiktinį procentą nuo 0 iki 100 (sveikasis skaičius).
 */
 function goodnight(){
    return Math.floor(Math.random()*101);
 }

 console.log(goodnight());
 
/**
 * [BONUS] Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina masyvą su jo daugybos lentelės rezultatais iki 10.
 */
