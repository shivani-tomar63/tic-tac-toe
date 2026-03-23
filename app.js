let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("resetBtn");
let newgamebtn = document.querySelector("#newgamebtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true;//palyerX ,playerO
//winnig pattern
const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4 ,6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxs.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was click");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{ box.innerText ="X";
            turnO =true;
        }
        box.disabled=true;
        checkWinner();
    });

});
const disableBoxes =()=>{
    for(let box of boxs){
        box.disabled=true;
    }
};
const enableBoxes =()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(wineer)=>{
msg.innerText= 'congratulation , winner is ${wineer}';
msgcontainer.classList.remove("hide");
disableBoxes();
}
const checkWinner =() =>{
   for( let pattern of winPatterns) {
    console.log(pattern[0],pattern[1],pattern[2]);
    console.log(boxs[pattern[0]].innerText,boxs[pattern[1]].innerText,boxs[pattern[2]].innerText);
   
   let pos1=boxs[pattern[0]].innerText;
   let pos2=boxs[pattern[1]].innerText;
   let pos3=boxs[pattern[2]].innerText;
   if(pos1!=""&& pos2!=""&&pos3!=""){
    if(pos1===pos2 && pos2=== pos3 ){
        console.log("winner");
       showWinner(); 
    }
   }
}
};

newgamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);