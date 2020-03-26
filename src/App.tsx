import React, { useState } from "react";
import "./App.css";
import Command from "./components/command";

import commands from "./commands";

const images = [
  "daniel-leone-v7daTKlZzaw-unsplash.jpg",
  "nasa-Q1p7bh3SHj8-unsplash.jpg",
  "jonatan-pie-h8nxGssjQXs-unsplash.jpg",
  "krista-mangulsone-9gz3wfHr65U-unsplash.jpg"
];

document.body.style["backgroundImage"] =
  "url(/img/" + images[Math.floor(Math.random() * images.length)] + ")";

function App() {
  const addNewCommand = () => {
    if (!commands[commandIndex]) {
      return;
    }

    _commandComponents.push(getCommandComponent());
    setCommandComponents([..._commandComponents]);
  };

  let commandIndex = 0;
  const _commandComponents: JSX.Element[] = [getCommandComponent()];
  const [commandComponents, setCommandComponents] = useState(
    _commandComponents
  );

  function getCommandComponent() {
    const command = commands[commandIndex];
    commandIndex++;
    return (
      <Command
        key={commandIndex}
        prompt={command.prompt}
        command={command.command}
        delay={command.delay}
        output={command.output}
        onFinish={addNewCommand}
      ></Command>
    );
  }

  return (
    <div className="App">
      <div className="terminal">
        <div className="terminalMenu">
          <div className="terminalButtons terminalClose"></div>
          <div className="terminalButtons terminalMinimize"></div>
          <div className="terminalButtons terminalZoom"></div>
        </div>
        <div className="terminalScreen">{commandComponents}</div>
      </div>
    </div>
  );
}

export default App;
