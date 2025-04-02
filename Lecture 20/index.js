function timing(){
const timer = document.getElementById('root');
const now=new Date();
const IndianTime=now.toLocaleTimeString();
timer.innerHTML=IndianTime;
}

setInterval(timing,1000);  //1000 milisecond == 1 second
const timer = document.getElementById('root');


timer.style.fontSize="50px";
timer.style.height="100vh";
timer.style.display = "flex";
timer.style.justifyContent="center";
timer.style.alignItems="center";
