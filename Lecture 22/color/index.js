document.body.addEventListener('click',()=>{
    const circle = document.createElement('div');
    circle.className='circle';
    circle.textContent="Hi";
    // <div class="circle"> Hi </div>
    const x= event.clientX;
    const y= event.clientY;
    
    circle.style.left=`${x-25}px`;
    circle.style.top=`${y-25}px`;

    const color=["red","blue","orange","purple","white","wheat","yellow"];
    circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
    document.body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    },5000)
    // setTimeout(circle.remove(),5000);
})