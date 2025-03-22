// Comparsion Operator
let a1=1;
let a2=2;
console.log(a1<=a2);
let b1=10;
let b2 = "10";
console.log(b1<=b2);
console.log(b1===b2);
let b3=10;
console.log(b1===b3);
console.log(null==b3);

// Null comparsion
console.log(null==undefined);
console.log(null===undefined);
console.log(null==0);
console.log(null>0);
console.log(null<0);
console.log(null>=0);
console.log(null<=0);

// Undefined Comparsion
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
console.log(undefined>=0);
console.log(undefined<=0);

console.log(NaN==NaN);
let str1 ="Rohit";
let str2="Rohan";
console.log(Number(str1));
console.log(Number(str1)==Number(str2));

let abc1=123;
let abc2="123";
let abc3=123;
console.log(abc1==abc2==abc3);
console.log(abc1==abc2==true);

let age=18;
let money =420;
console.log(age>=18&&money>200);
console.log(age<10||money>200);
console.log(!(age>10));

console.log(10&14);
console.log(5^7);
console.log(5<<3);
console.log(20>>3);
