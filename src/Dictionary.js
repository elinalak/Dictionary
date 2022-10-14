import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function showResponse(response) {
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
    <form className="mt-4" onSubmit={handleSubmit}>
      <header className="mt-3">Dictionary</header>
      <input
        className="mt-2"
        type="search"
        placeholder="Type here..."
        autoFocus="on"
        onChange={changeWord}
      ></input>
    </form>
  );
}
