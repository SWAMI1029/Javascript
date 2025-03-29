// let user={
//     name:"Rohan",
//     age:30,
// };
// console.log(Object.getOwnPropertyDescriptor(user,"name"))
// Object.defineProperty(user,"name",{
//     writable:false,
// });
// console.log(Object.getOwnPropertyDescriptor(user,"name"))

// for of loop

const arr=[10,20,30,40,50,60];
for(let value of arr)
    console.log(value);

let str="Rohit is good boy";
console.log(str);
// for(let value of str)
//     console.log(value);

// for each loop
function greet(num,index){
    console.log(num,index);
}

let arr1=[10,20,30,40,50];
arr1.forEach(function(num,index,arr1){
    // console.log(num,index);
    arr1[index]=num*2;
    console.log(arr1[index]);
})

// arr.forEach(greet);

// filter
let arr2=[10,25,30,63,40,50];
const result=arr2.filter((num)=>{
    return num%2==0;
})
console.log(result);

// const student ={
//     {name:"Rohan",age:23 , marks:70},
//     {name:"mohit", age:34 , marks:50}
// };
const arr3=[2,3,4,5,6];
const result2=arr3.map((value,index)=>{
    return value*index;
})
console.log(result2);

const result3=arr3.filter((num)=>num%2==0).map((num1)=>num1*num1);
console.log(result3);