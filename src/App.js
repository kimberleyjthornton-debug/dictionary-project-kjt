import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="fw-bold text-center">Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-align">
          This project was coded by{" "}
          <a
            href="https://www.instagram.com/kimberleythornton_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kimberley Thornton
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kimberleyjthornton-debug/dictionary-project-kjt"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionary-app-kjt.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
