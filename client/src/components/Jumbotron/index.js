import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ textAlign: "center" }}
      className="jumbotron text-primary bg-transparent my-3 border border-primary"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
