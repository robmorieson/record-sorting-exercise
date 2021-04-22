import React from "react";
import { render } from "@testing-library/react";

import { Record } from "../components/Record";
import { records } from "./test-data";

describe("<Record />", () => {
  test("Initially only primary data visible; expanded data hidden", () => {
    const record = records[0];
    const isExpanded = false;
    const setExpandedId = jest.fn();

    const { getByText } = render(
      <Record
        record={record}
        isExpanded={isExpanded}
        setExpandedId={setExpandedId}
      />
    );

    const suburb = getByText(record["Suburb - Incident"], { exact: false });
    const postcode = getByText(record["Postcode - Incident"], { exact: false });
    const date = getByText(record["Reported Date"]);
    const level2 = getByText(record["Offence Level 2 Description"]);

    const count = getByText(record["Offence count"]);
    const level1 = getByText(record["Offence Level 1 Description"]);
    const level3 = getByText(record["Offence Level 3 Description"]);

    // Assertions - the following to be visible
    expect(suburb).toBeVisible();
    expect(postcode).toBeVisible();
    expect(date).toBeVisible();
    expect(level2).toBeVisible();
    // Negative assertions - the following to be hidden
    expect(count).not.toBeVisible();
    expect(level1).not.toBeVisible();
    expect(level3).not.toBeVisible();
  });
});
