// let obj={};
// obj.name="rohit";
// obj.age=45;
// obj.money=854;
// obj.gender="male";
// // console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// obj.name="Mohit";
// console.log(obj);

let obj={};
Object.defineProperty(obj,'name',{
    value:"rohit",
    writable:true,
    enumerable:true,
    configurable:false,
});
console.log(obj);
Object.defineProperty(obj,"name",{
    writable:false,
})
obj.name="mohit";
console.log(obj);

let obj1={
    name:"Rohit",
    age:23,
    account_number:9487288456,
};
Object.defineProperty(obj1,"account_number",{
    writable:false,

})
obj1.account_number=834643287;
console.log(obj1.account_number);

const customer={
    name:"Rohit",
    age:23,
    account_num:123,
    balance:8944,
};
Object.defineProperty(customer,"name",{
    enumerable:false,
})
// console.log(customer.name);
for(let key in customer)
    console.log(key);
// console.log(\n);
let customer2= Object.create(customer);
customer2.city="Haridwar";
customer2.place="Delhi";
for(let key in customer2)
    console.log(key);




console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));
Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
})
for(let key in customer2)
    console.log(key);

