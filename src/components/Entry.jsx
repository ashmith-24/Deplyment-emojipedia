import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
      <a
        href="https://www.emojimeanings.net/list-smileys-people-whatsapp#U+1F4AA"
        target="_blank"
      >
        <button>TO KNOW MORE</button>
      </a>
    </div>
  );
}

export default Entry;
