const questionBank = [
    {
      question: "Who won the ICC Cricket World Cup in 2019?",
      options: ["India", "England", "Australia", "New Zealand"],
      answer: "England"
    },
    {
      question: "Who is known as the 'God of Cricket'?",
      options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Brian Lara"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Which country has won the most ICC Cricket World Cups?",
      options: ["India", "Australia", "West Indies", "England"],
      answer: "Australia"
    },
    {
      question: "What is the maximum number of overs in a T20 match per team?",
      options: ["10", "20", "50", "40"],
      answer: "20"
    },
    {
      question: "Which bowler has taken the most wickets in Test cricket?",
      options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
      answer: "Muttiah Muralitharan"
    },
    {
      question: "Who was the captain of India when they won the 2011 World Cup?",
      options: ["MS Dhoni", "Virat Kohli", "Sourav Ganguly", "Rahul Dravid"],
      answer: "MS Dhoni"
    },
    {
      question: "Where is the headquarters of the International Cricket Council (ICC)?",
      options: ["London", "Dubai", "Melbourne", "Mumbai"],
      answer: "Dubai"
    },
    {
      question: "Which cricketer is nicknamed 'Boom Boom'?",
      options: ["Chris Gayle", "Shahid Afridi", "David Warner", "AB de Villiers"],
      answer: "Shahid Afridi"
    },
    {
      question: "What is the term for scoring 100 runs in a single innings?",
      options: ["Double", "Century", "Half-century", "Duck"],
      answer: "Century"
    },
    {
      question: "Which country hosted the first ever Cricket World Cup?",
      options: ["Australia", "England", "India", "South Africa"],
      answer: "England"
    },
    {
      question: "Which Indian player holds the record for fastest T20I century?",
      options: ["Suryakumar Yadav", "Yuvraj Singh", "Rohit Sharma", "KL Rahul"],
      answer: "Rohit Sharma"
    },
    {
      question: "Who holds the record for most sixes in international cricket?",
      options: ["MS Dhoni", "Chris Gayle", "Rohit Sharma", "Shahid Afridi"],
      answer: "Rohit Sharma"
    },
    {
      question: "What does LBW stand for?",
      options: ["Leg Before Wicket", "Long Ball Wicket", "Leg By Wide", "Left Bat Wide"],
      answer: "Leg Before Wicket"
    },
    {
      question: "Which Indian bowler took a hat-trick in World Cup 2019?",
      options: ["Bhuvneshwar Kumar", "Mohammed Shami", "Jasprit Bumrah", "Yuzvendra Chahal"],
      answer: "Mohammed Shami"
    },
    {
      question: "Which format of cricket lasts up to 5 days?",
      options: ["T10", "ODI", "Test", "T20"],
      answer: "Test"
    },
    {
      question: "What color clothing do players wear in Test cricket?",
      options: ["Blue", "White", "Yellow", "Red"],
      answer: "White"
    },
    {
      question: "Which Indian cricketer is called 'Hitman'?",
      options: ["Virat Kohli", "KL Rahul", "Rohit Sharma", "Shikhar Dhawan"],
      answer: "Rohit Sharma"
    },
    {
      question: "Which country is known as the Black Caps?",
      options: ["South Africa", "New Zealand", "Sri Lanka", "Pakistan"],
      answer: "New Zealand"
    },
    {
      question: "Who is the only cricketer to score 100 international centuries?",
      options: ["Sachin Tendulkar", "Ricky Ponting", "Virat Kohli", "Kumar Sangakkara"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Which bowler delivered the fastest ball in cricket history?",
      options: ["Shoaib Akhtar", "Brett Lee", "Mitchell Starc", "Shaun Tait"],
      answer: "Shoaib Akhtar"
    },
    {
      question: "How many players are there in a cricket team on the field?",
      options: ["9", "10", "11", "12"],
      answer: "11"
    },
    {
      question: "Which Indian cricketer was known as 'The Wall'?",
      options: ["Sachin Tendulkar", "Rahul Dravid", "Virat Kohli", "VVS Laxman"],
      answer: "Rahul Dravid"
    },
    {
      question: "Which batsman hit six sixes in an over in T20 World Cup?",
      options: ["Chris Gayle", "Yuvraj Singh", "AB de Villiers", "David Miller"],
      answer: "Yuvraj Singh"
    },
    {
      question: "Which team won the first T20 World Cup in 2007?",
      options: ["Pakistan", "India", "Australia", "South Africa"],
      answer: "India"
    },
    {
      question: "What is it called when a batter gets out without scoring?",
      options: ["Single", "Golden run", "Duck", "Out"],
      answer: "Duck"
    },
    {
      question: "Who was the first cricketer to score a double century in ODIs?",
      options: ["Virender Sehwag", "Rohit Sharma", "Chris Gayle", "Sachin Tendulkar"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Who holds the record for most Test centuries?",
      options: ["Virat Kohli", "Ricky Ponting", "Jacques Kallis", "Sachin Tendulkar"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Which Indian cricketer is known for helicopter shot?",
      options: ["Suresh Raina", "Virat Kohli", "MS Dhoni", "Hardik Pandya"],
      answer: "MS Dhoni"
    },
    {
      question: "Which ground is known as the 'Home of Cricket'?",
      options: ["Eden Gardens", "Wankhede", "Lords", "MCG"],
      answer: "Lords"
    },
    {
      question: "Who is the fastest batsman to 8000 ODI runs?",
      options: ["Virat Kohli", "Sachin Tendulkar", "Babar Azam", "Joe Root"],
      answer: "Virat Kohli"
    }
  ];


// HTML page 


function random_question(){
    // const answer =[];
    // const index=Math.floor(Math.random()*30);
    /*const data = new Set();
    while(data.size!=5){
        const index=Math.floor(Math.random()*30);
        data.add(questionBank[index]);
    }
    return [...data];*/
    // Time complexity= log n
    
    // questionBank.sort(()=>Math.random()-0.5);
    // return questionBank.slice(0,5);
    // Time complexity = nlogn

    const arr=[];
    let length = questionBank.length;
    for(let i=0;i<5;i++)
    {
      const index=Math.floor(Math.random()*length);
      arr.push(questionBank[index]);
      // swap
      [questionBank[index],questionBank[length-1]]=[questionBank[length-1],questionBank[index]];
      length--;
    }
    return arr;
}  



// select the form and insert all element

const form = document.querySelector('form');
const problem=random_question();

const original_answer={};

let index=0;
problem.forEach((obj,index)=>{
    const div_element=document.createElement('div');
    div_element.className='question';
    original_answer[`q${index+1}`]=obj['answer'];


    const para=document.createElement('p');
    para.textContent=`${index+1}. ${obj['question']}`;
    div_element.appendChild(para);

    // Create 4 options
    obj['options'].forEach((data)=>{
        const label=document.createElement('label');
        const input=document.createElement('input');
        input.type="radio";
        input.name=`q${index+1}`;
        input.value=data;
        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'));
    })
    form.appendChild(div_element);
})
const button=document.createElement('button');
button.type='submit';
button.className="submit-btn";
button.textContent="Submit";

form.appendChild(button);


// Check the answer 



// const original_answer=["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]
// const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const data= new FormData(form);
    let result=0;
    for(let [key,value] of data.entries())
    {
        if(value===original_answer[key])
            result++;
    }


    // console.log(result);
    const out=document.getElementById('out');
    out.innerHTML=`${result} out of 5 is correct`;
    // document.getElementById('container').append(out);
    // form.reset();
})

