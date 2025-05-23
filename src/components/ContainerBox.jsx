import React from "react";

const ContainerBox = ( props ) => {
  return (
    <div className="container flex flex-col items-center justify-center border border-gray-200 shadow-2xl bg-white p-10 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
      {props.children}
    </div>
  );
};

export default ContainerBox;
