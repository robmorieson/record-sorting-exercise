import React from "react";
import { render } from "@testing-library/react";

import { Records } from "../components/Records";
import { records } from "./test-data";

describe("<Records />", () => {
  test("Render two records", () => {
    const { getAllByTestId } = render(<Records records={records} />);
    const renderedRecords = getAllByTestId("record");
    expect(renderedRecords).toHaveLength(2);
  });
});
