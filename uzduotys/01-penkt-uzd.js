const a= 'labas rytas, einam dar pamiegoti';
console.log(a.toUpperCase());

const b= 'meow ';
console.log(`Cat says ${b.repeat(100)}`);



const sakinys1 = 'Jonas turi daug draugu ir jie visi mieli labai.';
const sakinys2 = 'Jonas gyvena Kauno rajone.';
const zodis = 'labai';
 
function arYra(sakinys1, sakinys2) {
    if (sakinys1.includes(zodis)) {
        return `Sakinyje yra '${zodis}'.`;
     } 
     if (sakinys2.includes(zodis)){ 
        return `Sakinyje 2 yra '${zodis}'.`;
    } 
        return 'Tokio zodzio sakinyje nera.';
    
    
}
console.log(arYra(sakinys1, sakinys2));






let c='meow meow meow meow';
let result=c.slice(0,15);
console.log(result);

const d='If it was a snake it would have bit you';
console.log(d.replace('snake','cat'));

