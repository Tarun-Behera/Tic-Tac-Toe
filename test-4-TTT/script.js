console.log("wellcome to my Tic-Tac-Toe game");
let message = document.querySelector("#message");
let cells = Array.from(document.querySelectorAll(".cell"));
let restart = document.querySelector("#reset");
let turn = "X";
let gameRunning = true;
// let isgameover = false

// function to switch turn
const changeTurn = () => {
  /* if (turn === 'X') 
        return 'O'
    else
        return 'X' */
  return turn === "X" ? "O" : "X";
};

//display message
const turnMessage = () => {
  message.innerText = "Turn for " + turn;
};

// function to check for a win
const checkWin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      cells[e[0]].innerText === cells[e[1]].innerText &&
      cells[e[2]].innerText === cells[e[1]].innerText &&
      cells[e[0]].innerText !== ""
    ) {
      message.innerText = cells[e[0]].innerText + " Won";
      gameRunning = false;
      // isgameover = true
    }
  });
};

// game logic and clickable
turnMessage();
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameRunning && cell.innerText === "") {
      cell.innerText = turn;
      turn = changeTurn();
      turnMessage();
      checkWin();
      /*  if (!isgameover) {
                turnMessage()
            } */
    }
  });
});

// game restart
restart.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.innerText = "";
    gameRunning = true;
    changeTurn();
    turnMessage();
  });
});
