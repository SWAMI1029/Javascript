const set1 = new Set([10,20,30,40,30]);
// console.log(typeof set1);
console.log(set1);
set1.add(4);
set1.add(6);
set1.add("rohit");
set1.add(30);
console.log(set1);
set1.delete(6);
console.log(set1);
console.log(set1.has("rohit"));
console.log(set1.size);
set1.clear();
console.log(set1);
// let set2=new Set([10])
let arr=[10,20,30,10,20,30,10,20,30];
const set3=new Set(arr);
console.log(set3);
arr=[...set3];
console.log(arr);
let set2= new Set([60,70,80,90,10,20]);

// union set
// let set4= new Set([...set2,...set3]);
// console.log(set4);

// intersection set
const result3=[...set2].filter((num)=>set3.has(num));
console.log(result3);

for(let value of set2)
    console.log(value);
set3.forEach((value)=>console.log(value));