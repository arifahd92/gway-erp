import React, { useState, useEffect } from "react";

function TextRunner() {
  const [text, setText] = useState("");
  const [back, setBack] = useState(false);
  const [forward, setForward] = useState(true);
  const [index, setIndex] = useState(0);
  const fullText = "What You Think!";

  useEffect(() => {
    setTimeout(() => {
      if (index <= fullText.length - 1 && back === false) {
        setText((prevText) => prevText + fullText[index]);
        setIndex(index + 1);
      } else {
        setBack(true);
      }
      if (back === true && index >= 0) {
        let sliced = text.slice(0, index - 1);
        setText(sliced);
        setIndex(index - 1);
      }
      if (index <= 0 && back === true) {
        setBack(false);
        setIndex(0);
      }
    }, 200);
  }, [text, back, index]);

  return <div>{text ? text : "W"}</div>;
}

export default TextRunner;
