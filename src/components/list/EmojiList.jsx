import React, { useEffect, useState } from "react";
import "./EmojiList.css";

export default function EmojiList({ emojis, inputedValue }) {
  const [filteredEmojis, setFilteredEmojis] = useState(emojis);

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    alert("Copied " + value);
  };
  useEffect(() => {
    if (inputedValue !== "") {
      console.log(inputedValue);

      const filtered = emojis.filter((emoji) =>
        emoji.title.toLowerCase().includes(inputedValue.toLowerCase())
      );
      setFilteredEmojis(filtered);
    } else {
      setFilteredEmojis(emojis);
    }
  }, [emojis, inputedValue]);

  return (
    <div className="w-full">
      <p className="text-center mb-3">Click on an emoji to copy it</p>
      <ul>
        {filteredEmojis.map((emoji, index) => (
          <li
            className="bg-[#ffe4c4] mb-5 py-5 px-3 rounded-lg"
            key={index}
            onClick={() => handleCopy(emoji.symbol)}
          >
            {emoji.title} {emoji.symbol}
          </li>
        ))}
      </ul>
    </div>
  );
}
