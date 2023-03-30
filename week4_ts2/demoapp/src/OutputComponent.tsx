import React from "react";

type prop = {
  name: string;
};

const OutputComponent: React.FC<prop> = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default OutputComponent;
