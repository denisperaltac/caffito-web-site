import React, { ReactNode } from "react";

interface TableProps {
  thead: ReactNode;
  tbody: ReactNode;
}

export const TableSmall = ({ thead, tbody }: TableProps) => {
  return (
    <table className="min-w-[30vw] max-w-[40vw] text-sm tableScroll">
      <thead className="text-left uppercase border-[1px] border-[rgba(0,0,0,0.5)] ">
        {thead}
      </thead>
      <tbody>{tbody}</tbody>
    </table>
  );
};
