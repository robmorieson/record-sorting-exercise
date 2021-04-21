import { RecordType } from "../types/record";

type Props = {
  record: RecordType;
};

export const Record = ({ record }: Props) => {
  return (
    <div>
      <ul>
        <li>
          {record["Suburb - Incident"]}, {record["Postcode - Incident"]}
        </li>
        <li>{record["Reported Date"]}</li>
        <li>{record["Offence count"]}</li>
        <li>{record["Offence Level 1 Description"]}</li>
        <li>{record["Offence Level 2 Description"]}</li>
        <li>{record["Offence Level 3 Description"]}</li>
      </ul>
    </div>
  );
};
