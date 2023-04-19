import React from "react";

type Props = {
  row: string[];
};

const RowFC: React.FC<Props> = ({ row }) => {
  return (
    <tr>
      {row.map((row) => {
        return <td>{row}</td>;
      })}
    </tr>
  );
};

export default RowFC;
