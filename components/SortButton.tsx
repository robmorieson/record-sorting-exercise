import React from "react";
import styled from "@emotion/styled";

type Props = {
  fieldName: string;
  sortOrder: string;
  sortField: string;
  handleSortClick: (text: string) => void;
};

type ButtonProps = {
  sortOrder: string;
  sortField: string;
};

const Button = styled.button<ButtonProps>``;

export const SortButton: React.FC<Props> = ({
  fieldName,
  sortOrder,
  sortField,
  handleSortClick,
  children,
}) => {
  return (
    <Button
      sortOrder={sortOrder}
      sortField={sortField}
      onClick={() => {
        handleSortClick(fieldName);
      }}
    >
      <span>{children}</span>
    </Button>
  );
};
