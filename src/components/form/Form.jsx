import React, { useState, useEffect } from "react";
import "./Form.css";
import EmojiList from "../list/EmojiList";

export default function Form() {
  const [emojis, setEmojis] = useState([]);
  const [inputedValue, setInputedValue] = useState("");

  useEffect(() => {
    fetch("emojis.json")
      .then((response) => response.json())
      .then((emoji) => {
        setEmojis(emoji);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let value = event.target[0].value;
    setInputedValue(value);
  };

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <form className="w-3/6" onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="emoji"
          id="emoji"
          placeholder="🔎search"
          className="bg-[#EBCBA5] text-center placeholder:text-[#746451] placeholder:text-xl py-3 mb-8 w-full"
        />
      </form>

      <EmojiList emojis={emojis} inputedValue={inputedValue} />
    </div>
  );
}

// import React from "react";
// import "./Form.css";

// export default function Form() {

//     return (
//       <div>
//         <input type="text" name="emoji" id="emoji" placeholder="search" />
//       </div>
//     );
// }
