import { useState } from "react";
import styled from "@emotion/styled";

import { RecordType } from "../types/record";

type Props = {
  record: RecordType;
};

type FieldProps = {
  span: "half" | "full";
};

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Field = styled.div<FieldProps>`
  flex: ${(p) => (p.span === "full" ? "100%" : "50%")};
`;

const Label = styled.small``;

const Data = styled.div``;

const Button = styled.button``;

const Expandable = styled.div`
  flex: 100%;
`;

export const Record = ({ record }: Props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card data-testid="record">
      <Field span="half">
        <Label>Suburb - Incident</Label>
        <Data>
          {record["Suburb - Incident"]}, {record["Postcode - Incident"]}
        </Data>
      </Field>
      <Field span="half">
        <Label>Reported Date</Label>
        <Data>{record["Reported Date"]}</Data>
      </Field>
      <Field span="full">
        <Label>Offence Level 2 Description</Label>
        <Data>{record["Offence Level 2 Description"]}</Data>
      </Field>
      <Button
        id={`record-btn-${record["_id"]}`}
        aria-controls={`record-expandable-${record["_id"]}`}
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        View Details
      </Button>
      <Expandable
        id={`record-expandable-${record["_id"]}`}
        aria-labelledby={`record-btn-${record["_id"]}`}
        hidden={!expanded}
      >
        <Field span="full">
          <Label>Offence count</Label>
          <Data>{record["Offence count"]}</Data>
        </Field>
        <Field span="full">
          <Label>Offence Level 1 Description</Label>
          <Data>{record["Offence Level 1 Description"]}</Data>
        </Field>
        <Field span="full">
          <Label>Offence Level 3 Description</Label>
          <Data>{record["Offence Level 3 Description"]}</Data>
        </Field>
      </Expandable>
    </Card>
  );
};
