import { FaGithub, FaDiscord, FaPatreon } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import React from "react";

export interface ICommand {
  command: string;
  output: Array<IOutputLine>;
  prompt?: string;
  delay: number;
}

export interface IOutputLine {
  text: string;
  prepend?: string | JSX.Element;
  type: OutputType;
  link?: string;
}

export enum OutputType {
  link,
  text
}

const commands: Array<ICommand> = [
  {
    prompt: "niek@tux:~$",
    command: "ssh homeserver",
    delay: 250,
    output: []
  },
  {
    command: "cat contactInfo.txt",
    delay: 250,
    output: [
      {
        link: "mailto:me@catalysm.net",
        type: OutputType.link,
        text: "me@catalysm.net",
        prepend: <FiMail />
      },
      {
        link: "https://github.com/niekcandaele",
        type: OutputType.link,
        text: "niekcandaele",
        prepend: <FaGithub />
      },
      {
        link: "https://catalysm.net/discord",
        type: OutputType.link,
        text: "Catalysm#7488",
        prepend: <FaDiscord />
      },
      {
        link: "https://www.patreon.com/catalysm",
        type: OutputType.link,
        text: "Catalysm",
        prepend: <FaPatreon />
      }
    ]
  },
  {
    command: "cd code",
    delay: 250,
    output: []
  },
  {
    command: "tree projects -L 1",
    prompt: "niek@homeserver:~/code$",
    delay: 250,
    output: [
      {
        type: OutputType.text,
        text: "projects"
      },
      {
        type: OutputType.link,
        prepend: "├── ",
        text: "CSMM",
        link: "https://csmm.app"
      },
      {
        type: OutputType.link,
        prepend: "├── ",
        text: "Ban notifier",
        link: "https://bans.catalysm.net"
      },
      {
        type: OutputType.link,
        prepend: "├── ",
        text: "CS:GO config",
        link: "https://github.com/niekcandaele/Catalysm-CSGO-config"
      },
      {
        type: OutputType.link,
        prepend: "└── ",
        text: "CS:GO RankMe interface",
        link: "https://github.com/niekcandaele/CSGO-RankMe-stats"
      }
    ]
  }
];

export default commands;
