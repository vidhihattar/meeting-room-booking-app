import React, { useState } from "react";


function MomLivePad() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="notepad">
      <div className="notepad-header">
        <h2>MOM:</h2>
      </div>
      <div className="notepad-form">
        <input
          type="text"
          className="notepad-input"
          placeholder="Write something..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="notepad-add-btn" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <ul className="notepad-list">
        {items.map((item, index) => (
          <li className="notepad-item" key={index}>
            <p className="notepad-item-text">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MomLivePad;
