import { useState } from "react";

import { RecordType } from "../types/record";
import { Record } from "./Record";

type Props = {
  records: RecordType[];
  sortField?: string;
  sortOrder?: string;
};

export const Records = ({
  records,
  sortField = "Suburb - Incident",
  sortOrder = "asc",
}: Props) => {
  const [expandedId, setExpandedId] = useState(0);
  return (
    <div>
      {records
        .sort((a: RecordType, b: RecordType) => {
          const sortA = a[sortField];
          const sortB = b[sortField];
          if (sortA < sortB) {
            return sortOrder === "asc" ? -1 : 1;
          }
          if (sortA > sortB) {
            return sortOrder === "asc" ? 1 : -1;
          }
          return 0;
        })
        .map((record: RecordType) => (
          <Record
            key={record._id}
            record={record}
            isExpanded={expandedId === record._id}
            setExpandedId={setExpandedId}
          />
        ))}
    </div>
  );
};
