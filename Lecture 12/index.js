// function
function greet(){
    console.log("Hello coder army");
}
greet();
// add program
function add(number1,number2){
    return number1+number2;
}
console.log(add(3,4));
console.log(add(3,10));
function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(3,4));
const fun1=function()
{
    console.log("Hello coder army");
}
fun1();
const math_add = function(numb1,numb2){
    return numb1+numb2;
};
// math_add(3,4);
console.log(math_add(3,4));

const fun =()=>{
    console.log("Hello coder army");
}
fun();
const sum=(num3,num4)=>{
    return num3+num4;
}
console.log(sum(3,6));
const multi=(num5,num6)=>num5*num6;
console.log(multi(5,6));
const cube=num7=>num7*num7*num7;
console.log(cube(4));

const sum2=function(...number4){
    console.log(number4);
}
sum2(2,3,4);
sum2(6,2,6,8,9);
let obj={
    name:"Rohit",
    age:30,
    balance:689,
};
function fun3(obj1){
    console.log(obj1.name,obj1.age);
};
fun3(obj);
// Destructuring Object in function

function fun4({name,age}){
    console.log(name,age);
}
fun4(obj);