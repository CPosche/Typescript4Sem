import React from "react";
import { Person } from "../utils/types";

type Props = {
  headers: JSX.Element;
  rows: JSX.Element[];
};

const Table: React.FC<Props> = ({ headers, rows }) => {
  return (
    <div>
      <table>
        {headers}
        <tbody>
          {rows.map((row) => {
            return row;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
