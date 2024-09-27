import { useState } from "react";

// Write your Color component here
const Color = ({ color, setSelectedColor, isSelected }) => {
  return (
    <div
      className={`${color} ${isSelected ? "selected" : ""}`}
      onClick={() => setSelectedColor(color)}
    >
      {color}
    </div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="violet"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "violet"}
        ></Color>
        <Color
          color="green"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "green"}
        ></Color>
        <Color
          color="black"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "black"}
        ></Color>
      </div>
    </div>
  );
};

export default App;
