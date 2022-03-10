/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { SearchBar } from "./index";
import "@testing-library/jest-dom";

describe("Searchbar", () => {
  const onClick = jest.fn();
  test("is visible", async () => {
    render(<SearchBar onClickSearch={onClick} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();

    const button = screen.getByText("Search!");
    expect(button).toBeVisible();
  });

  test("should accept user input", () => {
    render(<SearchBar onClickSearch={onClick} />);
    const input = screen.getByRole<HTMLInputElement>("textbox");

    fireEvent.change(input, { target: { value: "github username" } });
    expect(input.value).toBe("github username");
  });

  test("should call the onClick with the user input on clicking search button or hitting enter", () => {
    render(<SearchBar onClickSearch={onClick} />);
    const input = screen.getByRole<HTMLInputElement>("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "github username" } });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledWith("github username");

    fireEvent.change(input, { target: { value: "updated username" } });
    fireEvent.keyUp(input, { key: "Enter", keyCode: 13 });
    expect(onClick).toHaveBeenLastCalledWith("updated username");
  });
});
