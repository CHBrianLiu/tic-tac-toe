import Styles from "./Board.module.css";
import Mark, { Symbol } from "../Mark";
import React from "react";

interface CellProps {
  rowId: number;
  colId: number;
  mark: Symbol;
  size: { width: number; height: number };
  setMarkHandler: (arg0: number, arg1: number) => () => void;
}

export default function Cell({ rowId, colId, mark, size, setMarkHandler }: CellProps) {
  let clsName = [];
  if (rowId === 1) clsName.push(Styles.centralRow);
  if (colId === 1) clsName.push(Styles.centralCol);
  return (
    <td className={clsName.join(" ")}>
      <Mark
        symbol={mark}
        size={size}
        onClick={setMarkHandler(rowId, colId)}
      />
    </td>
  );
}
