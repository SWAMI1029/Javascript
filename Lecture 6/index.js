// const obj={
//     id:20,
//     name:"Robot"
// };
// console.log(obj);
// obj.id=30;
// console.log(obj);
// let obj2=obj;
// obj2.name="Mohit";
// console.log(obj2);
// let obj3={
//     money:30,
// };
// obj2=obj3;
// console.log(obj2);

// obj=obj3;
// console.log(obj);
// Error

let str1="Hello Coder army";
let str2='Hello Coder army';
let str3=`Hello Coder Army`; //Modern way to write
console.log(str1,str2,str3);
let price=80;
console.log(`price of tomato is ${price}`);
let s1="hello";
let s2="Coder Army";
console.log(s1+s2);
console.log((s1+s2).length);
console.log('"Hello coder army"');
console.log("'Hello coder army'");
let message="Hello world \ncoders army";
console.log(message);
// Escape character
let message1="Hello world \\ncoders army";
console.log(message1);
let special="Rohit";
console.log(special[4]);
console.log(special.charAt(3));
// Lower case 
console.log(special.toLowerCase());
// Upper case
console.log(special.toUpperCase());
let hero="Hello coder army coder";
console.log(hero.indexOf("coder"));
console.log(hero.lastIndexOf("coder"));
console.log(hero.includes("coder"));

let newstring="HelloDon";
console.log(newstring.slice(-4,8));
console.log(newstring.substring(0,4));
console.log(newstring.substr(0,4)); //Older use

let str10="Hello Everyone how are you";
console.log(str10.replace("Everyone","Team"));
let str11="Hello Everyone how are you Everyone";
console.log(str11.replaceAll("Everyone","Team"));

let str12="Money,honey,Sunny,funny";
console.log(str12.split(","));

let str13=" Hello All of you ";
console.log(str13.trim());

// New way to create string
let lateststring=new String("Hello coder army"); //new memory allocation in heap
console.log(lateststring);
