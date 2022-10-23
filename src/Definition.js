import React from "react";

export default function Definition(props) {
  return (
    <div className="ms-2">
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div>
            <li key={index}>{definitions.definition}</li>

            <div className="text-danger example fst-italic">
              {definitions.example}
            </div>
          </div>
        );
      })}
    </div>
  );
}
