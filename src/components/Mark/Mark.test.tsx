import React from "react";
import { render, screen } from "@testing-library/react";
import Mark, { Symbol } from "./index";

test("Mark component should be non-clickable when the mark is set.", () => {
  render(
    <Mark
      symbol={Symbol.o}
      size={{ width: 100, height: 100 }}
      onClick={() => {}}
    />
  );
  const markElement = screen.getByRole("button");
  expect(markElement).toBeDisabled();
});
