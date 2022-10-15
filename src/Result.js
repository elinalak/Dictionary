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
                </p>
                <p className="partOfSpeech">Exapmles</p>

                {props.response.meanings.map(function(examples, index) {
                  return <p></p>;
                })}
              </div>
            );
          })}
        </div>
        <div className="col-sm-6">
          <p className="partOfSpeech">Synonyms</p>

          {props.response.meanings.map(function(synonym) {
            return synonym.synonyms.map(function(item, index) {
              return <div key={index}>{item}</div>;
            });
          })}
        </div>
      </div>
    );
  else return null;
}
