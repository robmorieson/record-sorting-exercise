import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { RecordType } from "../types/record";

export default function Home({
  records,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(records);
  return (
    <div>
      <Head>
        <title>Record Sorting Exercise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
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
