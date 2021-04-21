import { RecordType } from "../types/record";
import { Record } from "./Record";

type Props = {
  records: RecordType[];
};

export const Records = ({ records }: Props) => {
  return (
    <div>
      {records
        .sort((a: RecordType, b: RecordType) => {
          const sortA = a["Suburb - Incident"];
          const sortB = b["Suburb - Incident"];
          if (sortA < sortB) {
            return -1;
          }
          if (sortA > sortB) {
            return 1;
          }
          return 0;
        })
        .map((record: RecordType) => (
          <Record key={record._id} record={record} />
        ))}
    </div>
  );
};
