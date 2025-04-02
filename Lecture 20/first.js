const id =document.querySelector('#first');
id.innerHTML="Hello Money";

const id2=document.querySelector('.header2');
id2.style.backgroundColor="pink";

// How to illerate over node list
// const obj=document.querySelectorAll('.header1');

// 1
// obj.forEach((val)=>{
//     val.style.backgroundColor="orange";
// })

// 2
// for(let val of obj)
//     val.style.backgroundColor="orange";

// 3
// for(i=0;i<obj.length;i++)
// {
//     obj[i].style.color="red";
// }


// const team = document.getElementsByTagName('li');
// Array.from(team).forEach((val)=>{
//     val.style.color="red";
// })
// for loop,for of loop




// const list =document.querySelector('li');
// console.log(list.parentNode);
const par=document.querySelector('ul');
console.log(par.childNodes);