/*
STRING - tekstas - raidziu/simboliu grandinele
*/

const firstname='Chuck';
console.log(firstname);

const lastname='Norris';
console.log(lastname);

const fullname=firstname + ' ' + lastname;
console.log(fullname);

const age= 84;

// Hi, my name is Chuck and I am 84 years old.
const chuckIntro='Hi, my name is '+firstname+' and I am '+age+' years old.';
console.log(chuckIntro);

// Kabute: ' (vienguba).
const k1= "kabute: '(vienguba)."
console.log(k1);

// Kabute: " (dviguba).
const k2='kabute: "(dviguba).';
console.log(k2);

// Kabutes: ' (vienguba) ir " (dviguba).
const k12= "Kabutes: ' (vienguba) ir "+'" (dviguba).';
console.log(k12);

/*
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis</p>
    <p>Pomidoras</p>
</div>
*/

const html='<div>\r\n\
\t<h1>Labas rytas, Lietuva!</h1>\r\n\
\t\t<p>Pirmadienis</p>\r\n\
\t<p>Pomidoras</p>\r\n\
</div>';
console.log(html);

// \n - new line
// \r - return
// \r\n - ULTIMATE new line
// \t - tab


// Kabutes: ' (vienguba) ir " (dviguba).
const k3= 'Kabutes: \' (vienguba) ir " (dviguba).';
console.log(k3);
const k4= "Kabutes: \' (vienguba) ir \" (dviguba).";
console.log(k4);
const k5= 'Kabutes: \' (vienguba) ir \" (dviguba).';
console.log(k5);

console.clear();

const b=`labas`;
console.log(b);

const bHtml=`
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis</p>
    <p>Pomidoras</p>
</div>;
`
console.log(bHtml);

// Kabute: ` (backtick).
const backtickBedute1='kabute: `(backtick).';
const backtickBedute2=`kabute: \`(backtick).`;
console.log(backtickBedute1);
console.log(backtickBedute2);

const luckyNumber=13;

// My lucky number is 13.
const lucky= 'My lucky number is '+ luckyNumber+ '.'
console.log(lucky);

const lucky2=`My lucky number is ${luckyNumber}.`;
console.log(lucky2);

const chuckBack=`// Hi, my name is ${firstname} and I am ${age} years old.`
console.log(chuckBack);

// Price: 45.00$
const price=45;
const priceStr=`Price $${price}.00`;
console.log(priceStr);

// C:\Documents\troliai\rekia\namie
const troliai1=`C:\\Documents\\troliai\\rekia\\namie`;
console.log(troliai1);
const troliai2="C:\\Documents\\troliai\\rekia\\namie";
console.log(troliai2);

// String.raw `// C:\Documents\troliai\rekia\namie`;

const broliai= `String.raw \`C:\\Documents\\troliai\\rekia\\namie`;
console.log(broliai);
