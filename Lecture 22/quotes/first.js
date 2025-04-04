const quotes = [
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Happiness depends upon ourselves. – Aristotle",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Don’t count the days, make the days count. – Muhammad Ali",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "Act as if what you do makes a difference. It does. – William James",
    "Courage is resistance to fear, mastery of fear, not absence of fear. – Mark Twain",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Do what you love, and you’ll never work a day in your life. – Confucius",
    "Difficulties strengthen the mind, as labor does the body. – Seneca",
    "Opportunities don’t happen. You create them. – Chris Grosser",
    "Dream big and dare to fail. – Norman Vaughan",
    "A journey of a thousand miles begins with a single step. – Lao Tzu",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis"
  ];
function generate_quote(){
const text=document.getElementById("quote");
const index=Math.floor(Math.random()*quotes.length);
text.textContent=quotes[index];
}
// setInterval(generate_quote,3000);
const button = document.querySelector('button');
button.addEventListener('click',(event)=>{
  console.log(event.target);
  console.log(event.type);
  console.log(event.clientX);
  console.log(event.clientY);
  generate_quote();
})

// document.addEventListener('keydown',(event)=>{
//   // console.log(event.key);
//   if(event.key==="Enter"){
//   generate_quote();
//   }
//   console.log(event.target);
// })