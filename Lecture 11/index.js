// let obj={a:20,b:2};

// let obj3 = structuredClone(obj);
// obj3.a=30;
// console.log(obj,obj3);

// const udr ={
//     name:"Rohit",
//     balance:566,
//     address:{
//         pincode:786876,
//         city:"kotdwar"
//     }

// }
// console.log(udr);
// console.log(udr.address.pincode);
// udr.address.pincode=934;
// console.log(udr.address.pincode);

// Destructing the Object

/*let obj = {
    name:"Rohit",
    money:430,
    balance:30,
    age:20,
    addhar_card:84726582275247,
};
// const {name:fullname,balance:amount,age:umar}=obj;
// console.log(fullname,amount,umar);
const {name,age,...obj1}=obj;
console.log(name,age);
console.log(obj1);
const arr =[5,6,7,8,9,2];
// const [first,second,,third]=arr;
const[first,second,...third]=arr;
console.log(first,second,third);
*/

let obj = {
    name:"Rohit",
    money:430,
    balance:30,
    age:20,
    arr:[90,60,40,50],
    addhar_card:84726582275247,
    greet:function(){
        console.log("Hello coder army");
    },
    meet:function(){
        return 20;
    },
    address:{
        pincode:984254,
        city:"kotdwar",
        state:"UK",
    },
};

// const {address:adds}=obj;
// const {pincode}=adds;
//{address:adds}=obj;
//{pincode}=adds;

const {address:{pincode}}=obj; 
const {address:{pincode:unicode,city,state}}=obj;
console.log(pincode);
console.log(unicode,city,state);
const {arr:[first]}=obj;
console.log(first);
obj.greet();
console.log(obj.meet());