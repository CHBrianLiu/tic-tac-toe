import React from "react";
import Cell from "./Cell";
import { Symbol } from "../Mark";

interface RowProps {
  rowId: number;
  marks: Symbol[];
  size: { width: number; height: number };
  setMarkHandler: (arg0: number, arg1: number) => () => void;
}

const Row = ({ rowId, marks, size, setMarkHandler }: RowProps) => {
  const cells = [];
  for (let colId = 0; colId < 3; colId++) {
    cells.push(
      <Cell
        rowId={rowId}
        colId={colId}
        mark={marks[colId]}
        size={size}
        setMarkHandler={setMarkHandler}
      />
    );
  }
  return <tr>{cells}</tr>;
};

export default Row;
