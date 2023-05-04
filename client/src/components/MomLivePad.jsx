import React, { useState } from "react";


function MomLivePad({meeting}) {
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

  const handleDownload = () => {
    const text = items.join("\n"); // Combine all items into a single string
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "momlive.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="notepad">
      <div className="notepad-header">
        <h2></h2>
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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.85714 16C7.30486 16 6.85714 15.5523 6.85714 15V10.1429C6.85714 9.59057 6.40943 9.14286 5.85714 9.14286H0.999999C0.447715 9.14286 0 8.69514 0 8.14286V7.85714C0 7.30486 0.447715 6.85714 1 6.85714H5.85714C6.40943 6.85714 6.85714 6.40943 6.85714 5.85714V0.999999C6.85714 0.447715 7.30486 0 7.85714 0H8.14286C8.69514 0 9.14286 0.447715 9.14286 1V5.85714C9.14286 6.40943 9.59057 6.85714 10.1429 6.85714H15C15.5523 6.85714 16 7.30486 16 7.85714V8.14286C16 8.69514 15.5523 9.14286 15 9.14286H10.1429C9.59057 9.14286 9.14286 9.59057 9.14286 10.1429V15C9.14286 15.5523 8.69514 16 8.14286 16H7.85714Z" fill="#442B48"/>
</svg>

        </button>
      </div>
      <ul className="notepad-list">
        {items.map((item, index) => (
          <li className="notepad-item" key={index}>
            <p className="notepad-item-text">{item}</p>
          </li>
        ))}
      </ul>
      <button className="notepad-download-btn" onClick={handleDownload}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path fill="currentColor" d="M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z"/></svg>
      </button>
    </div>
  );
}

export default MomLivePad;
