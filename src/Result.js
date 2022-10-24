import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";
import Synonyms from "./Synonyms";
import Photos from "./Photos";

export default function Result(props) {
  if (props.response && props.photos)
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
          <Photos photos={props.photos} />
          <p className="partOfSpeech">Synonyms</p>
          <Synonyms response={props.response} />
        </div>
      </div>
    );
  else return null;
}
