console.log(
  "%c Project 0: TIC-TAC-TOE",
  "color: blue; background-color: yellow"
);

const checkWinner = function(player) {
  const horizontal0 = [matrix[0][0], matrix[0][1], matrix[0][2]].every(
    item => item === player
  );
  const horizontal1 = [matrix[1][0], matrix[1][1], matrix[1][2]].every(
    item => item === player
  );
  const horizontal2 = [matrix[2][0], matrix[2][1], matrix[2][2]].every(
    item => item === player
  );

  const horizontal = [horizontal0, horizontal1, horizontal2].some(
    result => result === true
  );

  const vertical0 = [matrix[0][0], matrix[1][0], matrix[2][0]].every(
    item => item === player
  );
  const vertical1 = [matrix[0][1], matrix[1][1], matrix[2][1]].every(
    item => item === player
  );
  const vertical2 = [matrix[0][2], matrix[1][2], matrix[2][2]].every(
    item => item === player
  );

  const vertical = [vertical0, vertical1, vertical2].some(
    result => result === true
  );

  const diagonalRight = [
    matrix[0][2],
    matrix[1][1],
    matrix[2][0]
  ].every(item => item === player);
  const diagonalLeft = [matrix[0][0], matrix[1][1], matrix[2][2]].every(
    item => item === player
  );

  const diagonal = [diagonalRight, diagonalLeft].some(
    result => result === true
  );

  return horizontal || vertical || diagonal

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

        if (checkWinner("X") || checkWinner("O")) {
          $("#inside-balloon").text(`Player won!`);
        }

        rounds = rounds - 1;

        if (rounds === 0) {
          $("#inside-balloon").text("Try again!");
        }
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