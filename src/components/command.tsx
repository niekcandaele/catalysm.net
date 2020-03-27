import React, { useState } from "react";
import Typist from "react-typist";
import { IOutputLine, OutputType } from "../commands";

interface IProps {
  command: string;
  output: Array<IOutputLine>;
  prompt?: string;
  delay: number;
  onFinish: Function;
}

export default function Command({
  command,
  output,
  prompt = "niek@homeserver:~$",
  delay,
  onFinish
}: IProps) {
  const initialOutput: JSX.Element[] = [];
  const [outputComponent, setOutputComponent] = useState(initialOutput);

  const cursorConfig = {
    show: true,
    blink: true,
    element: "█",
    hideWhenDone: true,
    hideWhenDoneDelay: 50
  };

  function createOutput() {
    setOutputComponent(
      output.map(o => {
        switch (o.type) {
          case OutputType.text:
            return (
              <div key={o.text} className="output">
                {o.prepend} {o.text}
              </div>
            );
          case OutputType.link:
            return (
              <div key={o.text} className="output">
                {o.prepend}
                <a rel="noopener noreferrer" target="_blank" href={o.link}>
                  {o.text}
                </a>
              </div>
            );
          default:
            return (
              <div key={o.text} className="output">
                {o.prepend} {o.text}
              </div>
            );
        }
      })
    );
    return onFinish();
  }

  return (
    <span className="command">
      <span className="command-prompt">{prompt}</span>
      <Typist cursor={cursorConfig} onTypingDone={createOutput}>
        <Typist.Delay ms={delay} />
        <span>{command}</span>
      </Typist>
      <br />
      {outputComponent}
    </span>
  );
}
