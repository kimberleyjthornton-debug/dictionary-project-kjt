import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.slice(0, 1).map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>

            {definition.example && (
              <div className="example">"{definition.example}"</div>
            )}
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
