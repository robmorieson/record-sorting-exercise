import React from "react";
import styled from "@emotion/styled";

type Props = {
  fieldName: string;
  sortOrder: string;
  sortField: string;
  handleSortClick: (text: string) => void;
};

type ButtonProps = {
  isActive: boolean;
  sortOrder: string;
  sortField: string;
};

const Button = styled.button<ButtonProps>`
  position: relative;
  margin: 0 15px 0 0;
  padding: 5px 0;
  font-size: 1.25rem;
  font-weight: 800;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  cursor: pointer;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:after {
    content: "${(p) => (p.sortOrder === "asc" ? "↓" : "↑")}";
    visibility: ${(p) => (p.isActive ? "visible" : "hidden")};
    position: relative;
    top: -2px;
    margin-left: 5px;
  }
  span {
    border-bottom: ${(p) =>
      p.isActive ? "2px solid var(--color-text-secondary)" : "none"};
  }
`;

export const SortButton: React.FC<Props> = ({
  fieldName,
  sortOrder,
  sortField,
  handleSortClick,
  children,
}) => {
  return (
    <Button
      isActive={sortField === fieldName && true}
      data-testid={fieldName}
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
