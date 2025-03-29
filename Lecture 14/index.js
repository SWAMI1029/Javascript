let obj= {
    name: "Rohan",
    age:23,
    gender:"Male",
    city:"kotdwar"
};
for(let key in obj){
    console.log(key,obj[key]);
}
console.log(Object.keys(obj));
let obj2= Object.create(obj);
obj2.money=420;
obj2.id="Roh";
// console.log(obj2);
console.log(Object.keys(obj2));
for(let key in obj2)
{
    console.log(key,obj2[key]);
}
