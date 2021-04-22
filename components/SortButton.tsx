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
  margin: 0 30px 0 0;
  padding: 5px 0;
  font-size: 1.25rem;
  font-weight: 800;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
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
  &:after {
    content: "${(p) => (p.sortOrder === "asc" ? "↓" : "↑")}";
    visibility: ${(p) => (p.isActive ? "visible" : "hidden")};
    position: absolute;
    top: 4px;
    width: 15px;
  }
  span {
    border-bottom: 2px solid;
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
      aria-label={`Sort by ${fieldName}`}
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
