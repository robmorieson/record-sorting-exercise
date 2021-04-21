import { useState } from "react";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import styled from "@emotion/styled";

import { RecordType } from "../types/record";
import { Records } from "../components/Records";
import { SortButton } from "../components/SortButton";

const Container = styled.div`
  margin: 40px;
`;

const Content = styled.main`
  margin: auto;
  max-width: 650px;
`;

const SortButtons = styled.div`
  margin: 0 0 20px 0;
  small {
    display: block;
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`;

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
    <Container>
      <Head>
        <title>Record Sorting Exercise</title>
        <meta
          name="description"
          content="Demonstrating knowledge of React, fetching and testing"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <header>
          <h1>Record Sorting Exercise</h1>
        </header>
        <SortButtons>
          <small>Sort by</small>
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
        </SortButtons>
        <Records
          records={records}
          sortField={sortField}
          sortOrder={sortOrder}
        />
      </Content>
    </Container>
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
