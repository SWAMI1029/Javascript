const form=document.querySelector('form');
// form.addEventListener('input',(event)=>{
//     console.log(event.target.value);
// })
// form.addEventListener('change',(event)=>{
//     console.log(event.target.value);
// })
// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('submit',(event)=>{
//     // console.log(event.target.value);
//     event.preventDefault();
//     const first=document.getElementById("first");
//     console.log(first.value);
//     const second=document.getElementById("second");
//     console.log(second.value);
//     const third=document.getElementById("third");
//     console.log(third.value);
//     console.log(`${first.value} ${second.value} is the good boy`);
// })

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    for(let [key,value]of data.entries())
        console.log(key, value);
    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));

})
