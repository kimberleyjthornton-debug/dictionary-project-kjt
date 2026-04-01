import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <p>
        {props.phonetic.text}{" "}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <br /> Listen{" "}
        </a>
      </p>
    </div>
  );
}
