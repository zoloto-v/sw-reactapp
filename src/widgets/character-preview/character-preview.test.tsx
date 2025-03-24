import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { CharacterPreview } from "./";

describe("CharacterPreview", () => {
  it("Render component with correct props", () => {
    render(
      <CharacterPreview
        onClick={() => {}}
        isPending={false}
        name={"Electronik"}
        height={"185"}
        mass={"82"}
        gender={"female"}
        birth_year={"112BBY"}
      />
    );
    expect(screen.getByText("Electronik")).toBeInTheDocument();
    expect(screen.getByText("185")).toBeInTheDocument();
    expect(screen.getByText("82")).toBeInTheDocument();
    expect(screen.getByText("female")).toBeInTheDocument();
    expect(screen.getByText("112BBY")).toBeInTheDocument();
  });

  it("Calls the onClick handler when clicked", async () => {
    const handleClick = vi.fn();

    render(
      <CharacterPreview
        onClick={handleClick}
        isPending={false}
        name={"Electronik"}
        height={"185"}
        mass={"82"}
        gender={"female"}
        birth_year={"112BBY"}
      />
    );

    await userEvent.click(screen.getByText("Electronik"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
