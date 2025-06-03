//  Print 
let turn='O';
let total_turn =0;
let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
function check_winner(){
    for(let [index0,index1,index2] of winner)
    {
        if(board_arr[index0]!="E"&&board_arr[index0]==board_arr[index1]&&board_arr[index1]==board_arr[index2])
            return 1;
        // else
        // return 0;
    }
    return 0;
}
let board_arr=new Array(9).fill('E');
const printer = (event)=>{
    const element=event.target;
    if(board_arr[element.id]==="E")
    {
        total_turn++;
    // element.innerHTML=turn;
    if(turn==='O')
    {
        element.innerHTML='O';
        board_arr[element.id]='O';
        if(check_winner())
        {
            document.getElementById('winningMessage').innerHTML='Winner is O';
            board.removeEventListener('click',printer);
            return;
        }
        turn ='X';
    }
    else
    {
        element.innerHTML='X';
        board_arr[element.id]='X';
        if(check_winner())
            {
                document.getElementById('winningMessage').innerHTML='Winner is X';
                board.removeEventListener('click',printer);
                return;
            }
        turn='O';
    }
    if(total_turn==9)
    {
        document.getElementById('winningMessage').innerHTML='Match is Draw';
    }
}
}
const board=document.querySelector('.board');
board.addEventListener('click',printer);

const Restart = document.getElementById("restartButton");
Restart.addEventListener('click',()=>{
    const cell=document.getElementsByClassName('cell');
    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    })
    turn='O';
    total_turn=0;
    board_arr = new Array(9).fill('E');
    document.getElementById('winningMessage').innerHTML='';
    board.addEventListener('click',printer);
})