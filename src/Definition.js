import React from "react";

export default function Definition(props) {
  return (
    <div>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div>
            <li key={index}>{definitions.definition}</li>

            <div className="text-danger example">{definitions.example}</div>
          </div>
        );
      })}
    </div>
  );
}
