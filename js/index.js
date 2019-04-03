console.log(
  "%c Project 0: TIC-TAC-TOE",
  "color: blue; background-color: yellow"
);

const matrix = new Array(3);
let rounds = 0;
const PLAYER_1 = "X";
const PLAYER_2 = "O";
const EMPTY_SLOT = "-";

const checkWinner = function(player) {

  const horizontal0 = [matrix[0][0], matrix[0][1], matrix[0][2]].every(
    item => item === player
  );
  if (horizontal0) {
    $('.horizontal0').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},2000);
  }
  const horizontal1 = [matrix[1][0], matrix[1][1], matrix[1][2]].every(
    item => item === player
  );
  if (horizontal1) {
    $('.horizontal1').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},2000);
  }
  const horizontal2 = [matrix[2][0], matrix[2][1], matrix[2][2]].every(
    item => item === player
  );
  if (horizontal2) {
    $('.horizontal2').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},2000);
  }

  const horizontal = [horizontal0, horizontal1, horizontal2].some(
    result => result === true
  );

  const vertical0 = [matrix[0][0], matrix[1][0], matrix[2][0]].every(
    item => item === player
  );
  if (vertical0) {
    $('.vertical0').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},2000);
  }
  const vertical1 = [matrix[0][1], matrix[1][1], matrix[2][1]].every(
    item => item === player
  );
  if (vertical1) {
    $('.vertical1').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},2000);
  }
  const vertical2 = [matrix[0][2], matrix[1][2], matrix[2][2]].every(
    item => item === player
  );
  if (vertical2) {
    $('.vertical2').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},2000);
  }

  const vertical = [vertical0, vertical1, vertical2].some(
    result => result === true
  );

  const diagonalRight = [matrix[0][2], matrix[1][1], matrix[2][0]].every(
    item => item === player
  );
  if (diagonalRight) {
    $('.diagonalRight').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},2000);
  }
  const diagonalLeft = [matrix[0][0], matrix[1][1], matrix[2][2]].every(
    item => item === player
  );
  if (diagonalLeft) {
    $('.diagonalLeft').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},2000);
  }

  const diagonal = [diagonalRight, diagonalLeft].some(
    result => result === true
  );

  return horizontal || vertical || diagonal;
};

const row = function(id) {
  return `<div id="${id}" class="row">`;
};

const column = function(id) {
  return `<div id="${id}" class="column">`;
};

const square = function() {
  return `<div class="square nes-container is-rounded"><span>-</span></div>`;
};

const createBoard = function() {
  for (let i = 0; i < 3; i++) {
    matrix[i] = new Array(3);

    $(".board").append(row(`row-${i}`));

    for (let j = 0; j < 3; j++) {
      matrix[i][j] = EMPTY_SLOT;

      $(`#row-${i}`).append(column(`column-${i}-${j}`));

      $(`#column-${i}-${j}`).append(square());
    }
  }
};

const createGameplay = function() {
  let gameEnded = false;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      $(`#column-${i}-${j}`).click(function() {
        if (gameEnded) {
          return;
        }

        if (matrix[i][j] !== EMPTY_SLOT) {
          return;
        }

        if (rounds % 2 !== 0) {
          matrix[i][j] = PLAYER_1;
          insideBalloon = `${PLAYER_2}'s turn`;
          $('input:radio[name="answer-dark"]').filter('[value="O"]').removeAttr('checked')
          $('input:radio[name="answer-dark"]').filter('[value="X"]').attr('checked', true)
        } else {
          matrix[i][j] = PLAYER_2;
          insideBalloon = `${PLAYER_1}'s turn`;
          $('input:radio[name="answer-dark"]').filter('[value="X"]').removeAttr('checked')
          $('input:radio[name="answer-dark"]').filter('[value="O"]').attr('checked', true)
        }

        $(`#column-${i}-${j} .square`).text(matrix[i][j]);
        $("#inside-balloon").text(insideBalloon);

        if (checkWinner(PLAYER_1)) {
          $("#inside-balloon").text(`${PLAYER_1} won!`);
          $( "i#characters" ).removeClass( "nes-squirtle" ).addClass( "nes-icon trophy is-large" );
          gameEnded = true;
        }

        if (checkWinner(PLAYER_2)) {
          $("#inside-balloon").text(`${PLAYER_2} won!`);
          $( "i#characters" ).removeClass( "nes-squirtle" ).addClass( "nes-icon trophy is-large" );
          gameEnded = true;
        }
        if (!checkWinner(PLAYER_1) && !checkWinner(PLAYER_2) && rounds >= 8){
          $("#inside-balloon").text(`It's a draw!`);
          $( "i#characters" ).removeClass( "nes-squirtle" ).addClass( "nes-icon is-large star is-half" );
          gameEnded = true;
        }

        rounds = rounds + 1;

      });
    }
  }
};

const restartGame = function(){
  $("#inside-balloon").text("Let's Start!");
  $( "i#characters" ).removeClass().addClass( "nes-squirtle" );
  $(".board").empty();
  rounds = 0;
  createBoard();
  createGameplay();

}

$(document).ready(() => {
  restartGame();

  $(".nes-btn").click(function() {
    restartGame();
  });
});

$('.horizontal0').css({'visibility': 'show'})
$('.horizontal1').css({'visibility': 'show'})
$('.horizontal2').css({'visibility': 'show'})