let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector(".newGame");

let turn0 = true;
let count = 0;

let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    turn0 = true;
    enabledBoxes();
    count = 0;
    msg.classList.add("hide");
}

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } 
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});

const showWinner = (winner) =>{
    msg.innerText = `Congratulation, the winner is : ${winner}`
    msg.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () =>{
    for(let pattern of winningPattern){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner",pos1);
            showWinner(pos1);
            return;
        }
    }
    }
    
    if(count === 9){
        msg.innerText = "Its a Draw";
        msg.classList.remove("hide");
        disabledBoxes();
    }

};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
