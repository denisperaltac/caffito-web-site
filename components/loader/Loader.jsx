import React from "react";

export const Loader = ({ loading }) => {
  return (
    <div
      className={`${
        loading ? "showDiv" : "hideDiv"
      } fixed flex items-center justify-center h-screen`}
    >
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="spinner"></div>
      </div>
    </div>
  );
};
