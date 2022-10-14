import React from "react";

export default function Result(props) {
  console.log(props.response);

  if (props.response)
    return (
      <div className="row">
        <div className="col-sm-6">
          <h2 className="Header-name">{props.response.word}</h2>
          <p>{props.response.phonetic}</p>
          {props.response.meanings.map(function(meaning, index) {
            return (
              <div>
                <p className="partOfSpeech">{meaning.partOfSpeech}</p>
                <p key={index}>
                  {meaning.definitions.map(function(definitions, index) {
                    return <li key={index}>{definitions.definition}</li>;
                  })}
                </p>{" "}
              </div>
            );
          })}
        </div>
        <div className="col-sm-6"></div>
      </div>
    );
  else return null;
}
