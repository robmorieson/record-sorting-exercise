import styled from "@emotion/styled";

import { RecordType } from "../types/record";

type Props = {
  record: RecordType;
  isExpanded: boolean;
  setExpandedId: (text: number) => void;
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
  &.date {
    text-align: right;
  }
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
  flex: 100%;
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 0.85rem;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  &:hover {
    color: var(--color-text-highlight);
  }
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  @media (min-width: 768px) {
    flex: auto;
    margin: 20px 0;
    text-align: right;
  }
  span {
    display: inline-block;
    border-bottom: 2px solid;
  }
`;

const Expandable = styled.div`
  flex: 100%;
`;

export const Record = ({ record, isExpanded, setExpandedId }: Props) => {
  return (
    <Card data-testid="record">
      <Field span="half">
        <Label>Suburb - Incident</Label>
        <Data>
          {record["Suburb - Incident"]}, {record["Postcode - Incident"]}
        </Data>
      </Field>
      <Field span="half" className="date">
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
        aria-expanded={isExpanded}
        onClick={() => setExpandedId(isExpanded ? 0 : record["_id"])}
      >
        <span>{`${isExpanded ? "Hide Details" : "View Details"}`}</span>
      </Button>
      <Expandable
        id={`record-expandable-${record["_id"]}`}
        aria-labelledby={`record-btn-${record["_id"]}`}
        hidden={!isExpanded}
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
