import React from "react";

type Props = {
  headers: string[];
  name: string;
};

const HeadersFC: React.FC<Props> = ({ headers, name }) => {
  return (
    <thead>
      <text>{name}</text>
      <tr>
        {headers.map((header) => {
          return <th>{header}</th>;
        })}
      </tr>
    </thead>
  );
};

export default HeadersFC;
