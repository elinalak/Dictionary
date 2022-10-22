import React from "react";

export default function Synonyms(props) {
  return (
    <div>
      {props.response.meanings.map(function (synonym) {
        return synonym.synonyms.map(function (item, index) {
          return <div key={index}>{item}</div>;
        });
      })}
    </div>
  );
}
