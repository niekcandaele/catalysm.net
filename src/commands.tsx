import React from 'react';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { FiFileText, FiMail } from 'react-icons/fi';

export interface ICommand {
  command: string;
  output: Array<IOutputLine>;
  prompt?: string;
  delay: number;
}

export interface IOutputLine {
  text?: string;
  prepend?: string | JSX.Element;
  type: OutputType;
  link?: string;
}

export enum OutputType {
  link,
  text,
  element
}

const commands: Array<ICommand> = [
  {
    prompt: "niek@tux:~$",
    command: "ssh homeserver",
    delay: 250,
    output: []
  },
  {
    command: "cat links.txt",
    delay: 250,
    output: [
      {
        link: "mailto:niek@candaele.dev",
        type: OutputType.link,
        text: "niek@candaele.dev",
        prepend: <FiMail />
      },
      {
        link: "https://github.com/niekcandaele",
        type: OutputType.link,
        text: "Github",
        prepend: <FaGithub />
      },
      {
        link: "https://aka.candaele.dev/discord/",
        type: OutputType.link,
        text: "Discord",
        prepend: <FaDiscord />
      },
      {
        link: "https://blog.candaele.dev/",
        type: OutputType.link,
        text: "Blog",
        prepend: <FiFileText />
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
        link: "https://github.com/Bantr"
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
