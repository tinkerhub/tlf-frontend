import React from "react";
import "./Styles/Filter.css";

function FilterHome({ setStack }) {
  return (
    <div>
      <div className="filter">
        <div className="row1">
          <p
            onClick={() => {
              setStack("FLUTTER");
            }}
          >
            Flutter
          </p>
          <p
            onClick={() => {
              setStack("JAVASCRIPT");
            }}
          >
            JavaScript
          </p>
        </div>
        <div
          onClick={() => {
            setStack("PYTHON");
          }}
          className="row2"
        >
          Python
        </div>
      </div>
    </div>
  );
}

export default FilterHome;
