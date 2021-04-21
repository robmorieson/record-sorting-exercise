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
  padding: 20px 20px 0 20px;
  margin: 20px 0 0 0;
  background: var(--color-bg-secondary);
`;

const Field = styled.div<FieldProps>`
  flex: ${(p) => (p.span === "full" ? "auto" : "50%")};
  margin-bottom: 20px;
`;

const Label = styled.small`
  text-transform: uppercase;
  font-size: 0.75rem;
`;

const Data = styled.div`
  font-weight: 800;
  color: var(--color-text-secondary);
`;

const Button = styled.button`
  margin: 20px 0;
  padding: 0;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  span {
    border-bottom: 2px solid var(--color-text-secondary);
  }
`;

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
        <span>{`${expanded ? "Hide Details" : "View Details"}`}</span>
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
