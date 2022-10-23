import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(`phonetic is ` + props.response);

  return (
    <div className="row">
      {props.response.phonetics.map(function (phonetic, index) {
        if (phonetic.audio && phonetic.text)
          return (
            <div className="col-sm-6 container-fluid">
              <ReactAudioPlayer src={phonetic.audio} controls />
              <div key={index}>{phonetic.text}</div>
            </div>
          );
        else return null;
      })}
    </div>
  );
}
