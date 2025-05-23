import React from "react";

const ContainerTitle = (props) => {
  return (
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
      {props.children}
    </h2>
  );
};

export default ContainerTitle;
