import React from "react";

export default function Footer() {
  return (
    <div className="mt-2 pt-4">
      This App is{" "}
      <a
        href="https://github.com/elinalak/Dictionary"
        className="text-decoration-none text-dark"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced
      </a>
      . Coded by{" "}
      <a
        href="https://startling-blini-e759e3.netlify.app"
        className="text-decoration-none text-dark"
        target="_blank"
        rel="noreferrer"
      >
        Viktoria Lakida
      </a>
      <br /> 2022
    </div>
  );
}
