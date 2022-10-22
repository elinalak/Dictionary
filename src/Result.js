import React from "react";
import Phonetic from "./Phonetic";

export default function Result(props) {
  console.log(props.response);

  if (props.response)
    return (
      <div className="row">
        <div className="col-sm-6 article">
          <h2 className="Header-name text-danger">{props.response.word}</h2>
          <Phonetic response={props.response} />
          {props.response.meanings.map(function (meaning, index) {
            return (
              <div>
                <div className="partOfSpeech">{meaning.partOfSpeech}</div>
                <div key={index} className="definition">
                  {meaning.definitions.map(function (definitions, index) {
                    return (
                      <div>
                        <li key={index}>{definitions.definition}</li>

                        <div className="text-danger example">
                          {definitions.example}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-sm-6 article">
          <p className="partOfSpeech">Synonyms</p>

          {props.response.meanings.map(function (synonym) {
            return synonym.synonyms.map(function (item, index) {
              return <div key={index}>{item}</div>;
            });
          })}
        </div>
      </div>
    );
  else return null;
}
