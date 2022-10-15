import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [response, setResponse] = useState(null);

  function showResponse(response) {
    setResponse(response.data[0]);
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Is submitting");
    console.log(word);
    //documentation: https://dictionaryapi.dev/
    let APIurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(APIurl).then(showResponse);
  }

  function changeWord(event) {
    setWord(event.target.value);
  }

  return (
    <div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <header className="Header-name mt-3">Dictionary</header>
        <input
          className="mt-2"
          type="search"
          placeholder="Type here..."
          autoFocus="on"
          onChange={changeWord}
        ></input>
      </form>
      <Result response={response} />
    </div>
  );
}
