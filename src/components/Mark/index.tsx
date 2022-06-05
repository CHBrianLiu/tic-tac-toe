import React from "react";
import Styles from "./Mark.module.css";

export enum Symbol {
  "o" = "o",
  "x" = "x",
  "none" = "",
}

export interface MarkProps {
  symbol: Symbol;
  size: { height: number; width: number };
  onClick: () => void;
}

const MARK_METADATA = {
  o: { image: "circle.png", altText: "circle mark" },
  x: { image: "cross.png", altText: "cross mark" },
  "": {
    image: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    altText: "blank",
  },
};

export default function Mark({ symbol, size, onClick }: MarkProps) {
  const disabled = Boolean(symbol);
  return (
    <button
      disabled={disabled}
      className={`${Styles.button} ${disabled ? "" : Styles.clickableButton}`}
      onClick={onClick}
    >
      <img
        src={MARK_METADATA[symbol].image}
        width={size.width}
        height={size.height}
        alt={MARK_METADATA[symbol].altText}
      />
    </button>
  );
}
