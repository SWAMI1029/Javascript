// reduce
const arr=[10,20,30,40,50];
const result=arr.reduce((acc,curr)=>{
    // console.log(acc,curr);
    acc+=curr;
    return acc;
},0)
const result2=arr.reduce((acc,curr)=>acc+=curr,0);
console.log(result2);

let arr4=["orange","apple","grapes","orange","apple","grapes","orange","apple","pineapple"];

const result_fruit=arr4.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;
    return acc;
},{});
console.log(result_fruit);