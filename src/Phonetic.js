import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(`phonetic is ` + props.response);

  return (
    <div>
      {props.response.phonetics.map(function (phonetic, index) {
        return (
          <div>
            <ReactAudioPlayer src={phonetic.audio} controls />
            <div key={index}>{phonetic.text}</div>
          </div>
        );
      })}
    </div>
  );
}
