import React, { ReactNode } from "react";

interface TableProps {
  thead: ReactNode;
  tbody: ReactNode;
  minWidth?: boolean;
}

export const Table = ({ thead, tbody, minWidth }: TableProps) => {
  return (
    <table
      className={`w-full text-sm tableScroll ${minWidth && "min-w-[80vw]"}`}
    >
      <thead className="text-left uppercase border-[1px] border-[rgba(0,0,0,0.5)] ">
        {thead}
      </thead>
      <tbody>{tbody}</tbody>
    </table>
  );
};
