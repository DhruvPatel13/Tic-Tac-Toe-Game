let boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
let TurnO = true;

const winPatters = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    TurnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (TurnO) {
      box.innerText = "O";
      TurnO = false;
    } else {
      box.innerText = "X";
      TurnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
    for (const box of boxes) { //ek sath sath btn disable karne ke liye
        box.disabled =true;
    }
}
const enableBoxes = () => {
    for (const box of boxes) { //ek sath sath btn enable karne ke liye
        box.disabled =false;
        box.innerText ="";
    }
}

const showWinner = (winner) => {// show case winner X or O;
    msg.innerText = `Congratulations, The Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => { // check X or O winning pattern
    for (let pattern of winPatters) {
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val!= "" && pos3Val!= "" ) {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            setTimeout(() => {
                showWinner(pos1Val);
            }, 500);
        }
    }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);