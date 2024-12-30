import { useState } from "react";

export default function TicTac({ size = 3 }) {
  const [boards, setBoards] = useState(generateBoard(size));
  const [xTurn, setXturn] = useState(true);
  const winner = getWinner(boards, size);
  const boardClickHandle = (rowIndex, columnIndex) => {
    let prevBoards = [...boards];
    if (prevBoards[rowIndex][columnIndex] || winner) {
      return;
    }
    prevBoards[rowIndex][columnIndex] = xTurn ? "X" : "O";
    setBoards(prevBoards);
    setXturn(!xTurn);
  };
  return (
    <>
      <div
        className="board"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size},1fr)`,
          gap: "5px",
          width: "300px",
          margin: "auto",
        }}
      >
        {boards.map((row, rowIdx) => {
          return row.map((column, columnIdx) => {
            return (
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => boardClickHandle(rowIdx, columnIdx)}
              >
                {column}
              </div>
            );
          });
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p> {winner ? winner : xTurn ? "X Turn" : "O Turn"}</p>
        <button
          onClick={() => {
            setXturn(true);
            setBoards(generateBoard(size));
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
function generateBoard(n) {
  return Array.from({ length: n }, () => {
    return Array(n).fill(null);
  });
}
function getWinner(board, size) {
  // row checking
  const winner = "winner is ";
  for (let i = 0; i < size; i++) {
    if (board[i][0] && board[i].every((cell) => cell === board[i][0])) {
      return winner + board[i][0];
    }
  }
  //column checking
  for (let j = 0; j < size; j++) {
    let column = [];
    for (let i = 0; i < size; i++) {
      column.push(board[i][j]);
    }
    if (column[0] && column.every((cell) => cell === column[0])) {
      return winner + column[0];
    }
  }
  // main diagonal
  let mainD = [];
  for (let i = 0; i < size; i++) {
    mainD.push(board[i][i]);
  }
  if (mainD[0] && mainD.every((cell) => cell == mainD[0])) {
    return winner + mainD[0];
  }
  // cross diagonal
  let CrossD = [];
  for (let i = 0; i < size; i++) {
    CrossD.push(board[i][size - 1 - i]);
  }
  if (CrossD[0] && CrossD.every((cell) => cell == CrossD[0])) {
    return winner + CrossD[0];
  }
  // draw checking
  const isDraw = board.flat()?.every((cell) => cell !== null);
  if (isDraw) {
    return "Game is Draw";
  }
  return null;
}
