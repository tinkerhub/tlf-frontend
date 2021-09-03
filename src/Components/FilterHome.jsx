import React, { useState } from "react";
import "./Styles/Filter.css";

function FilterHome({ setStack }) {
  const [fcolor, setFColor] = useState("#4720B9");
  const [jcolor, setJColor] = useState("white");
  const [pcolor, setPColor] = useState("white");
  return (
    <div>
      <div className="filter">
        <div className="row1">
          <p
            style={{ color: fcolor }}
            onClick={() => {
              setStack("FLUTTER");
              setFColor("#4720B9");
              setJColor("white");
              setPColor("white");
            }}
          >
            Flutter
          </p>
          <p
            style={{ color: jcolor }}
            onClick={() => {
              setStack("JAVASCRIPT");
              setJColor("#4720B9");
              setFColor("white");
              setPColor("white");
            }}
          >
            JavaScript
          </p>
        </div>
        <div
          style={{ color: pcolor }}
          onClick={() => {
            setStack("PYTHON");
            setPColor("#4720B9");
            setJColor("white");
            setFColor("white");
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
