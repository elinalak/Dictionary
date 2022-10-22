import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";
import Synonyms from "./Synonyms";

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
                  <Definition meaning={meaning} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-sm-6 article">
          <p className="partOfSpeech">Synonyms</p>
          <Synonyms response={props.response} />
        </div>
      </div>
    );
  else return null;
}
