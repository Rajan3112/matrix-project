import { useState } from "react";

export default function MatrixGrid() {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [colors, setColors] = useState(Array(9).fill("white"));

  const handleClick = (index) => {
    if (colors[index] === "white") {
      setColors((prev) => {
        const newColors = [...prev];
        newColors[index] = "green";
        return newColors;
      });
      setClickedBoxes((prev) => [...prev, index]);
    }
    
    if (index === 8) {
      changeToOrange();
    }
  };

  const changeToOrange = () => {
    clickedBoxes.forEach((box, i) => {
      setTimeout(() => {
        setColors((prev) => {
          const newColors = [...prev];
          newColors[box] = "orange";
          return newColors;
        });
      }, i * 500); // Change color in sequence
    });
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 50px)", gap: "0.8px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: color,
            border: "1px solid black",
            cursor: "pointer",
          }}
        ></div>
      ))}
    </div>
  );
}
