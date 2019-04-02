console.log(
  "%c Project 0: TIC-TAC-TOE",
  "color: blue; background-color: yellow"
);

/*RULES FOR TIC-TAC-TOE

1. CSS FILE: The game is played on a grid that's 3 squares by 3 squares.
2. JS LOGIC: You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.
3. JS LOGIC: The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
4. JS LOGIC: When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
---------------
1. Separate HTML, CSS, and JavaScript files
2. Create the HTML/CSS board/grid of game to play
3. Create the js logic to play the tic tac toe
4. Add a readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
5. Improve the style of CSS sheet
*/
matrix: {
  line0: [
    [0][0],
    [0][1],
    [0][2]
  ]

  line1: [
    [1][0],
    [1][1],
    [1][2]
  ]

  line2: [
    [2][0],
    [2][1],
    [2][2]
  ]

  column0: [
    [0][0],
    [1][0],
    [2][0]
  ]

  column1: [
    [0][1],
    [1][1],
    [2][1]
  ]

  column2: [
    [0, 2],
    [1, 2],
    [2, 2]
  ]

  diagonalRight: [
    [0][2],
    [1][1],
    [2][0]
  ]

  diagonalLeft: [
    [0][0],
    [1][1],
    [2][2]
  ]

};

const matrix = new Array(3); //Creating Two Dimensional Arrays
let rounds = 9;

$(document).ready(() => {
  for (let i = 0; i < 3; i++) {
    matrix[i] = new Array(3);

    $(".board").append(`<div id="row-${i}" class="row">`);
    for (let j = 0; j < 3; j++) {
      matrix[i][j] = "-";

      $(`#row-${i}`).append(`<div id="column-${i}-${j}" class="column">`);
      $(`#column-${i}-${j}`).append(
        `<div class="square nes-container is-rounded"><span>${
          matrix[i][j]
        }</span></div>`
      );

      console.log(matrix[i][j]);

      $(`#column-${i}-${j}`).click(function() {
        if (rounds % 2 !== 0) {
          matrix[i][j] = "X";
          insideBalloon = "Your turn!";
          // $(`#column-${i}-${j} .square span`).addClass("nes-icon is-large heart");
        } else {
          matrix[i][j] = "O";
          insideBalloon = "Wait!";
          // $(`#column-${i}-${j} .square span`).addClass("nes-icon is-large star");
        }

        $(`#column-${i}-${j} .square`).text(matrix[i][j]);
        $("#inside-balloon").text(insideBalloon);

        if (matrix[0][0] == "X" && matrix[0][1] == "X" && matrix[0][2] == "X") {
          $("#inside-balloon").text("You won!");
        }
        if (matrix[1][0] == "X" && matrix[1][1] == "X" && matrix[1][2] == "X") {
          $("#inside-balloon").text("You won!");
        }

        rounds = rounds - 1;
      });
    }
  }
});

/*
Check for occurrences of the same element (X or O): (and looking for a winner)

1)in the lines of the board.
• matrix[R][C]
matrix[0][0] - - -
matrix[0][1]
matrix[0][2]

matrix[1][0]
matrix[1][1] - - -
matrix[1][2]

matrix[2][0]
matrix[2][1]
matrix[2][2] - - -

2)in the columns of the board.
• matrix[R][C]
matrix[0][0] |
matrix[1][0] |
matrix[2][0] |

matrix[0][1]  |
matrix[1][1]  |
matrix[2][1]  |

matrix[0][2]    |
matrix[1][2]    |
matrix[2][2]    |

3)on the diagonals of the board.
• matrix[R][C]
matrix[0][2]     /
matrix[1][1]    /
matrix[2][0]   /

matrix[0][0]   \
matrix[1][1]    \
matrix[2][2]     \
*/