import React, { useState } from "react";
import "./App.css";

function App() {
  // Initial state for Bucket 1 and Bucket 2
  const [bucket1, setBucket1] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [bucket2, setBucket2] = useState([]);
  const [selectedBucket1, setSelectedBucket1] = useState([]);
  const [selectedBucket2, setSelectedBucket2] = useState([]);

  // Move selected items from Bucket 1 to Bucket 2
  const moveSelectedToBucket2 = () => {
    setBucket2([...bucket2, ...selectedBucket1]);
    setBucket1(bucket1.filter((item) => !selectedBucket1.includes(item)));
    setSelectedBucket1([]);
  };

  // Move selected items from Bucket 2 to Bucket 1
  const moveSelectedToBucket1 = () => {
    setBucket1([...bucket1, ...selectedBucket2]);
    setBucket2(bucket2.filter((item) => !selectedBucket2.includes(item)));
    setSelectedBucket2([]);
  };

  // Move all items from Bucket 1 to Bucket 2
  const moveAllToBucket2 = () => {
    setBucket2([...bucket2, ...bucket1]);
    setBucket1([]);
  };

  // Move all items from Bucket 2 to Bucket 1
  const moveAllToBucket1 = () => {
    setBucket1([...bucket1, ...bucket2]);
    setBucket2([]);
  };

  return (
    <div className="app">
      <div className="bucket-container">
        <div className="bucket">
          <h3>Bucket 1</h3>
          <select
            multiple
            value={selectedBucket1}
            onChange={(e) =>
              setSelectedBucket1(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
          >
            {bucket1.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button onClick={moveSelectedToBucket2}>Move Selected →</button>
          <button onClick={moveAllToBucket2}>Remove All →</button>
        </div>

        <div className="bucket">
          <h3>Bucket 2</h3>
          <select
            multiple
            value={selectedBucket2}
            onChange={(e) =>
              setSelectedBucket2(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
          >
            {bucket2.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button onClick={moveSelectedToBucket1}>← Move Selected</button>
          <button onClick={moveAllToBucket1}>←Remove All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
