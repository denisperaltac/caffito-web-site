import React, { ReactNode } from "react";

interface TableProps {
  thead: ReactNode;
  tbody: ReactNode;
}

export const Table = ({ thead, tbody }: TableProps) => {
  return (
    <table className="w-full text-sm tableScroll">
      <thead className="text-left uppercase border-[1px] border-[rgba(0,0,0,0.5)] ">
        {thead}
      </thead>
      <tbody>{tbody}</tbody>
    </table>
  );
};
