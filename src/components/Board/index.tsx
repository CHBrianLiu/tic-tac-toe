import React, { useMemo, useState } from "react";
import Row from "./Row";
import {Symbol} from "../Mark";

function generateEmptyGrid(): Symbol[][] {
  const grid: Symbol[][] = [];
  for (let i = 0; i < 3; i++) {
    const row: Symbol[] = [];
    for (let j = 0; j < 3; j++) {
      row.push(Symbol.none);
    }
    grid.push(row);
  }
  return grid;
}

type Turn = "o" | "x";

function nextTurn(current: Turn): Turn {
  return current === "o" ? "x" : "o";
}

export default function Board() {
  const grid: Symbol[][] = useMemo(generateEmptyGrid, []);
  const [turn, setTurn]: [Turn, Function] = useState("o");

  const cellSize = { height: 100, width: 100 };
  const setMarkHandler = (row: number, col: number) => () => {
    grid[row][col] = Symbol[turn];
    setTurn(nextTurn);
  };

  const rows = [];
  for (let rowId = 0; rowId < 3; rowId++) {
    rows.push(
      <Row
        rowId={rowId}
        size={cellSize}
        setMarkHandler={setMarkHandler}
        marks={grid[rowId]}
      />
    );
  }

  return <table>{rows}</table>;
}
