import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Records } from "../components/Records";
import { records } from "./test-data";

describe("<Records />", () => {
  test("Render two records", () => {
    const { getAllByTestId } = render(<Records records={records} />);
    const renderedRecords = getAllByTestId("record");
    expect(renderedRecords).toHaveLength(2);
  });

  test('On "view more" click; expanded data to be visible', () => {
    const record = records[0];
    const { getByText, getByRole } = render(<Records records={[record]} />);

    const button = getByRole("button");
    const count = getByText(record["Offence count"]);
    const level1 = getByText(record["Offence Level 1 Description"]);
    const level3 = getByText(record["Offence Level 3 Description"]);

    fireEvent.click(button);
    // Assertions - the following to now be visible
    expect(count).toBeVisible();
    expect(level1).toBeVisible();
    expect(level3).toBeVisible();
  });
});
