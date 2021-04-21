import { useState } from "react";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { RecordType } from "../types/record";
import { Records } from "../components/Records";
import { SortButton } from "../components/SortButton";

export default function Home({
  records,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [sortField, setSortField] = useState("Suburb - Incident");
  const [sortOrder, setSortOrder] = useState("asc");
  const handleSortClick = (fieldName: string) => {
    if (sortField === fieldName) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOrder("asc");
    }
    setSortField(fieldName);
  };
  return (
    <div>
      <Head>
        <title>Record Sorting Exercise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <span>Sort by</span>
          <SortButton
            fieldName="Suburb - Incident"
            sortOrder={sortOrder}
            sortField={sortField}
            handleSortClick={handleSortClick}
          >
            Suburb
          </SortButton>
          <SortButton
            fieldName="Offence Level 2 Description"
            sortOrder={sortOrder}
            sortField={sortField}
            handleSortClick={handleSortClick}
          >
            Offence Level 2
          </SortButton>
        </div>
        <Records
          records={records}
          sortField={sortField}
          sortOrder={sortOrder}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://data.sa.gov.au/data/api/3/action/datastore_search?resource_id=590083cd-be2f-4a6c-871e-0ec4c717717b`
  );
  const data = await res.json();
  const records: RecordType[] = data.result.records;
  return {
    props: { records },
  };
}
