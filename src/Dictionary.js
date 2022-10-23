import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [response, setResponse] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function showResponse(response) {
    setResponse(response.data[0]);
    console.log(response.data[0]);
  }

  function handlePexelResponse(response) {
    console.log(`Photos is ` + response.data.photos);
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Is submitting");
    search();
  }

  function search() {
    console.log(word);
    //documentation: https://dictionaryapi.dev/
    let APIurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(APIurl).then(showResponse);

    //https://www.pexels.com/api/documentation/#photos-search
    let pexelAPIkey = `563492ad6f91700001000001f753905d78644583bb94ff5889211c6b`;
    let pexelURL = `https://api.pexels.com/v1/search?query=${word}&per_page=12`;
    let headers = { Authorization: `Bearer ${pexelAPIkey}` };
    axios.get(pexelURL, { headers: headers }).then(handlePexelResponse);
  }

  function changeWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded)
    return (
      <div>
        <form className="mt-4" onSubmit={handleSubmit}>
          <header className="Header-name mt-3">Dictionary</header>
          <input
            className="mt-2"
            type="search"
            placeholder="Type any word.."
            autoFocus="on"
            onChange={changeWord}
          ></input>
        </form>
        <Result response={response} photos={photos} />
      </div>
    );
  else load();
  return "Loading";
}
