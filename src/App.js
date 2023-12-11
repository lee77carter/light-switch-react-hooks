import React, { useState } from "react";

const App = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  let wallClass = "wall off";
  if (isOn) {
    wallClass = "wall on";
  }
  return (
    <div className={wallClass}>
      <div className="switch-plate">
        <div className="screw" />
        <div className="switch" onClick={toggleLight}>
          <div className="switch-handle" />
        </div>
        <div className="screw" />
      </div>
    </div>
  );
};

export default App;
