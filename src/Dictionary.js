import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Is submitting");
    console.log(word);
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
