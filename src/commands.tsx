import { FaGithub, FaDiscord, FaPatreon } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  DiBootstrap,
  DiCss3,
  DiDebian,
  DiDocker,
  DiDotnet,
  DiGit,
  DiJava,
  DiJavascript1,
  DiJqueryLogo,
  DiLaravel,
  DiLinux,
  DiMysql,
  DiNginx,
  DiNodejsSmall,
  DiNpm,
  DiPostgresql,
  DiPython,
  DiRasberryPi,
  DiReact,
  DiRedis
} from "react-icons/di";
import React from "react";

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
  },
  {
    command: "cat technologies.txt",
    prompt: "niek@homeserver:~/code$",
    delay: 250,
    output: [
      {
        type: OutputType.text,
        text: "Some of the technologies I've used in the past"
      },
      {
        type: OutputType.text,
        prepend: <DiBootstrap />,
        text: "Bootstrap"
      },
      {
        type: OutputType.text,
        prepend: <DiCss3 />,
        text: "CSS"
      },
      {
        type: OutputType.text,
        prepend: <DiDebian />,
        text: "Debian"
      },
      {
        type: OutputType.text,
        prepend: <DiDocker />,
        text: "Docker"
      },
      {
        type: OutputType.text,
        prepend: <DiDotnet />,
        text: ".NET"
      },
      {
        type: OutputType.text,
        prepend: <DiGit />,
        text: "Git"
      },
      {
        type: OutputType.text,
        prepend: <DiJava />,
        text: "Java"
      },
      {
        type: OutputType.text,
        prepend: <DiJavascript1 />,
        text: "Javascript"
      },
      {
        type: OutputType.text,
        prepend: <DiJqueryLogo />,
        text: "jQuery"
      },
      {
        type: OutputType.text,
        prepend: <DiLaravel />,
        text: "Laravel"
      },
      {
        type: OutputType.text,
        prepend: <DiLinux />,
        text: "Linux"
      },
      {
        type: OutputType.text,
        prepend: <DiMysql />,
        text: "MySQL"
      },
      {
        type: OutputType.text,
        prepend: <DiNginx />,
        text: "Nginx"
      },
      {
        type: OutputType.text,
        prepend: <DiNodejsSmall />,
        text: "Nodejs"
      },
      {
        type: OutputType.text,
        prepend: <DiNpm />,
        text: "NPM"
      },
      {
        type: OutputType.text,
        prepend: <DiPostgresql />,
        text: "PostgreSQL"
      },
      {
        type: OutputType.text,
        prepend: <DiPython />,
        text: "Python"
      },
      {
        type: OutputType.text,
        prepend: <DiRasberryPi />,
        text: "Raspberry Pi"
      },
      {
        type: OutputType.text,
        prepend: <DiReact />,
        text: "React"
      },
      {
        type: OutputType.text,
        prepend: <DiRedis />,
        text: "Redis"
      }
    ]
  }
];

export default commands;
