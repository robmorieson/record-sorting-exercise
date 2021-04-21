import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Home from "../pages/index";
import { records } from "./test-data";

describe("<Home />", () => {
  test("Sort by suburb", () => {
    const { getByTestId, getAllByTestId } = render(<Home records={records} />);

    // Init order is alphabetical asc
    const firstRecordInit = getAllByTestId("record")[0];
    expect(firstRecordInit).toHaveTextContent("ALPHA");

    // Fire toggle button
    const sortButton = getByTestId("Suburb - Incident");
    fireEvent.click(sortButton);

    // Toggled order is alphabetical desc
    const firstRecordToggled = getAllByTestId("record")[0];
    expect(firstRecordToggled).toHaveTextContent("OMEGA");
  });

  test("Sort by Offence Level 2 Description", () => {
    const { getByTestId, getAllByTestId } = render(<Home records={records} />);

    const sortButton = getByTestId("Offence Level 2 Description");

    // Init order is alphabetical asc
    fireEvent.click(sortButton);
    const firstRecordInit = getAllByTestId("record")[0];
    expect(firstRecordInit).toHaveTextContent("A-1");

    // Fire toggle button
    fireEvent.click(sortButton);

    // Toggled order is alphabetical desc
    const firstRecordToggled = getAllByTestId("record")[0];
    expect(firstRecordToggled).toHaveTextContent("B-1");
  });
});
