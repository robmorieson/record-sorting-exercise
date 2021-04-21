import { RecordType } from "../types/record";
import { Record } from "./Record";

type Props = {
  records: RecordType[];
};

export const Records = ({ records }: Props) => {
  return (
    <div>
      {records.map((record: RecordType) => (
        <Record key={record._id} record={record} />
      ))}
    </div>
  );
};
