import React from "react";

export default function Result(props) {
  console.log(props.response);

  if (props.response)
    return (
      <div className="row">
        <div className="col-sm-6">
          <h2 className="Header-name text-danger">{props.response.word}</h2>
          <p>{props.response.phonetic}</p>
          {props.response.meanings.map(function(meaning, index) {
            return (
              <div>
                <p className="partOfSpeech">{meaning.partOfSpeech}</p>
                <p key={index}>
                  {meaning.definitions.map(function(definitions, index) {
                    return (
                      <div>
                        <li key={index}>{definitions.definition}</li>

                        <p className="text-danger">{definitions.example}</p>
                      </div>
                    );
                  })}
                </p>
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
