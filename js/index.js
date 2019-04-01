console.log("%c Project 0: TIC-TAC-TOE", "color: blue; background-color: yellow");

/*
RULES FOR TIC-TAC-TOE

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

const matrix = new Array(3)

for(let i = 0 ; i < 3 ; i++) {
  // row
  matrix[i] = new Array(3);
  for(let j = 0 ; j < 3 ; j++) {
    // column
    matrix[i][j] = "*";
    console.log(matrix[i][j]);
  }
};

