import { useState } from "react";
import Cell from "./Cell";
import "./GameBoard.css";
import { winningMove } from "../constants";

const GameBoard = () => {
  const defaultCellValue = new Array(9).fill("");
  const [cellValue, setCellValue] = useState(defaultCellValue);
  const [move, setMove] = useState("O");
  const [playerWon, setPlayerWon] = useState(false);
  const [matchDraw, setMatchDraw] = useState(false);
  const [numberOfMoves, setNumberOfMoves] = useState(0);

  const handleClick = (id: number) => {
    cellValue[id] = move;
    setCellValue([...cellValue]);
    setNumberOfMoves((moves) => moves + 1);
    if (numberOfMoves === 8) setMatchDraw(true);
    didPlayerWon();
  };
  const handleReset = () => {
    setCellValue(defaultCellValue);
    setPlayerWon(false);
    setMatchDraw(false);
    setNumberOfMoves(0);
  };
  const didPlayerWon = () => {
    winningMove.forEach((indexs) => {
      if (
        move === cellValue[indexs[0]] &&
        move === cellValue[indexs[1]] &&
        move === cellValue[indexs[2]]
      )
        setPlayerWon(true);
      else setMove(getMove());
    });
  };
  function getMove() {
    if (move === "O") return "X";
    return "O";
  }
  return (
    <>
      {matchDraw && !playerWon && <h1>No Player Won</h1>}
      {playerWon && <h1>Player {getMove()} won</h1>}
      <div className="game-board-container">
        {cellValue.map((value, index) => (
          <Cell
            value={value}
            key={index}
            onClick={handleClick}
            id={index}
            allowClick={playerWon}
          />
        ))}
      </div>
      <button
        className="reset-button"
        type="button"
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </>
  );
};

export default GameBoard;
