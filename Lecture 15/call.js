// call back function
function name(fun){
    console.log("hello i am name");
    fun();
}
function greet(){
    console.log("I am call back function");
    // name();
}
// greet();
// name(greet);

function fetchdata(){
    console.log("I am fetching data");
}
setInterval(fetchdata,5000);