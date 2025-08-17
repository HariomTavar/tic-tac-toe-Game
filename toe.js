let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg=document.querySelector("#msg");
let gameDiv = document.querySelector(".game");
let container = document.querySelector(".container");
let newGamebtn = document.querySelector("#newGame");
let msgContainer1 = document.querySelector(".msgcontainer");
let turn0 = true;

const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];
const resetGame =() =>{
  turn0 = true;
  enaleboxes();
  msgContainer1.classList.add("hide");

}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.style.background ="#4E76A1";
    box.disabled = true;
    checkwinner();

  });
});
const enaleboxes =() => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText ="";
  }
}
const disbleboxes =() => {
  for(let box of boxes){
    box.disabled = true;
  }
}

const showWinner =(winner)=>{
  msg.innerText="congratulation, winner is "+winner;
  msgContainer1.classList.remove("hide");
  disbleboxes();
}
const checkwinner =()=>{
    for( let pattern of winPattern){
        
            let pos1= boxes[pattern[0]].innerText;
          let pos2 =   boxes[pattern[1]].innerText;
          let pos3 =  boxes[pattern[2]].innerText;
if(pos1!=""&&pos2 !=""&&pos3 !=""){
  if(pos1===pos2&& pos2===pos3){
    console.log("winner............",pos1);
    showWinner(pos1);

  }
}
    }
};
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);