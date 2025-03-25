const obj ={
    0:20,
    name:"rohit",
    account_balance:240,
    gender:"Male",
    age:30,
    "account number":98245985,
    undefined:30,
    null:"Mohit",
};

console.log(obj.age);
console.log(obj["account number"]);
console.log(obj["0"]); 
console.log(obj[0]);
console.log(obj);
console.log(obj.undefined);
console.log(obj.null);

const person= new Object();
person.name="Rohit";
person.age=70;
person.gender="Male";
console.log(person);
delete person.age;
console.log(person);
person.name="Mohit";
console.log(person);

class people{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}
let per1=new people("Rohit",20,"male");
let per2=new people("Mohit",30,"male");
console.log(per1);
console.log(per2);

let obje={
    name:"rohit",
    age:30,
    account_balance:400,
    gender:"male",
};
const arr=Object.keys(obje);
console.log(arr);
const arr1=Object.values(obje);
console.log(arr1);

const arr2=Object.entries(obje);
console.log(arr2);

let obja1={a:1,b:2};
let obja2={c:3,d:4};

const obja3=Object.assign({},obja1,obja2);
console.log(obja3);
const obja5={...obja1,...obja2,...obja3};
console.log(obja5);