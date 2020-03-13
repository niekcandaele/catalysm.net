import React, { useState } from "react";
import "./App.css";
import Command from "./components/command";

import commands from "./commands";

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

  return <div className="App">{commandComponents}</div>;
}

export default App;
