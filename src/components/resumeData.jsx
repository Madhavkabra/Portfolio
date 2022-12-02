import React from 'react';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork, SiSkype } from "react-icons/si";

const resumeData = {
  "imagebaseurl": `https://picsum.photos/2133/1200`,
  "name": "Madhav Kabra",
  "role": "Senior Frontend Developer",
  "linkedinId": "https://www.linkedin.com/in/madhavkabra/",
  "whatsappLink": " https://wa.me/9229996730?text=Hey%20Madhav,%20Lets%20connect",
  "skypeid": "live:madhav.kabra1100",
  "roleDescription": "I like dabbling in various parts of frontend development and like to learn about new technologies, collaboratively work with developers remotely, travel around peaceful places or simply watch animes in my free time.",
  "socialLinks": [
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/madhavkabra/",
      "icon": <FaLinkedinIn />
    },
    {
      "name": "github",
      "url": "https://github.com/Madhavkabra",
      "icon": <AiFillGithub />
    },
    {
      "name": "skype",
      "url": "https://join.skype.com/invite/uYOoOO90jxo3",
      "icon": <SiSkype />
    },
    {
      "name": "upwork",
      "url": "https://www.upwork.com/freelancers/~01e690d5a7b5d8b86c",
      "icon": <SiUpwork />
    }
  ],
  "aboutme": `Experienced Front End Developer, specializing in ⚛️React-based⚛️ Web Applications and can methodically break down and create COMPLEX APPLICATIONS as per YOUR REQUIREMENTS, using a wide variety of techniques and tools 🛠️.
  I create responsive and performant REACT APPLICATIONS, which are responsive in all screen sizes 📱🖥️. I can re-engineer immensely complex designs and code, providing significantly improved performance.
  I pride myself on designing intuitive interfaces that provides great USER EXPERIENCE.`,
  "address": "India",
  "website": "https://madhavkabra.github.io/Portfolio/",
  "education": [
    {
      "UniversityName": "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      "specialization": "B. Tech. - Information Technology",
      "MonthOfPassing": "August",
      "YearOfPassing": "2019",
      "Achievements": "NSS India — C Certified"
    },
    {
      "UniversityName": "St. Norbert Senior Secondary School",
      "specialization": "Mathematics",
      "MonthOfPassing": "January",
      "YearOfPassing": "2015",
      "Achievements": "Some Achievements"
    }
  ],
  "work": [
    {
      "CompanyName": "Dechea GmBH, Leipzig, Germany, Europe",
      "specialization": "Frontend Developer",
      "MonthOfLeaving": "Aug",
      "YearOfLeaving": "2019",
      "responsibilites": [
        `Research new tools and technologies that can benefit the 
team with faster development process`,
        `Automate the export of design tokens from Figma to code 
base and integrate them in UI to keep the theming consistent`,
        `Achieve a clean code coverage of 90%`,
        `Write browser automation test cases and integrate them in
        pipeline to catch any failing feature before deploying it to 
production`,
        `Collaborate closely with product owner and scrum master to 
refine the requirement, process backlog and sprint planning.`
      ]
    },
    {
      "CompanyName": "Talent500, Bangalore, India",
      "specialization": "Frontend Developer",
      "MonthOfLeaving": "Aug",
      "YearOfLeaving": "2019",
      "responsibilites": [
        `Created reusable redux state management for the pages. 
that display similar information, fetched from different 
sources.`,
        `Developed filters which can be generated using simple 
configs with zero code change.`,
        `Developed a library of atomic components using custom CSS.`,
        `Peer code reviews to improve and maintain overall code 
quality.`
      ]
    },
    {
      "CompanyName": "HashiCorp,  San Francisco, California, United States",
      "specialization": "Senior Frontend Developer",
      "MonthOfLeaving": "Aug",
      "YearOfLeaving": "2019",
      "responsibilites": [
        `Automate lint fixes post commit using hooks`,
        `Improved code quality by removal of code duplication and smells using Sonar cloud.`,
        `Integrated zoom-sdk to allow pre-planned zoom sessions.`,
        `Integrated IBM video player API into the app to allow video session live streaming.`
      ]
    },
    {
      "CompanyName": "Blockapps Brooklyn, New York, United States",
      "specialization": "Backend developer",
      "MonthOfLeaving": "Aug",
      "YearOfLeaving": "2019",
      "responsibilites": [`A+ Grade — Performance evaluation from past employers.`, `Implemented role-based access control using Nodejs.`,
        `Deeloped a finite state automaton using smart contracts.`, `Added data validation  and API level test cases to test both 
failure c a ses and happy flow.`, `Store the data on IPFS, in a distributed network.`,
      ]
    },
    {
      "CompanyName": "Blockapps Brooklyn, New York, United States",
      "specialization": "Backend developer",
      "MonthOfLeaving": "Aug",
      "YearOfLeaving": "2019",
      "responsibilites": [`A+ Grade — Performance evaluation from past employers.`, `Implemented role-based access control using Nodejs.`,
        `Deeloped a finite state automaton using smart contracts.`, `Added data validation  and API level test cases to test both 
failure c a ses and happy flow.`, `Store the data on IPFS, in a distributed network.`,
      ]
    },
    {
      "CompanyName": "Blockapps Brooklyn, New York, United States",
      "specialization": "Backend developer",
      "MonthOfLeaving": "Aug",
      "YearOfLeaving": "2019",
      "responsibilites": [`A+ Grade — Performance evaluation from past employers.`, `Implemented role-based access control using Nodejs.`,
        `Deeloped a finite state automaton using smart contracts.`, `Added data validation  and API level test cases to test both 
failure c a ses and happy flow.`, `Store the data on IPFS, in a distributed network.`,
      ]
    }
  ],
  "skills": [
    {
      title: "Frontend",
      list: [{
        "skillname": "HTML5",
        "skillPercent": 0.9
      },
      {
        "skillname": "CSS",
        "skillPercent": 0.8
      },
      {
        "skillname": "React.js",
        "skillPercent": 0.9
      },
      {
        "skillname": "Bit.dev",
        "skillPercent": 0.8
      },
      {
        "skillname": "Rest API, GraphQL",
        "skillPercent": 0.7
      },
      {
        "skillname": "Storybook",
        "skillPercent": 0.5
      },
      {
        "skillname": "Internationalization, Localization",
        "skillPercent": 0.8
      },
      {
        "skillname": "Sonar cloud",
        "skillPercent": 0.8
      },
      {
        "skillname": "Micro-frontends",
        "skillPercent": 0.9
      },
      {
        "skillname": "Google Analytics",
        "skillPercent": 0.9
      },
      {
        "skillname": "Monolithic frontends",
        "skillPercent": 0.9
      }],
    },
    {
      title: "Testing",
      list: [
        {
          "skillname": "Browser automation testing using Cypress",
          "skillPercent": 0.7
        },
        {
          "skillname": "Testcafe and chromium drivers",
          "skillPercent": 0.8,
        },
        {
          "skillname": "Unit tests — Jest, React testing-library, Chai, Mocha",
          "skillPercent": 0.9,
        },
        {
          "skillname": "Snapshot testing",
          "skillPercent": 0.8
        }]
    },
    {
      title: "Backend",
      list: [
        {
          "skillname": "Node.js",
          "skillPercent": 0.7
        },
        {
          "skillname": "Joi",
          "skillPercent": 0.5,
        }]
    },
    {
      title: "Database",
      list: [
        {
          "skillname": "FaunaDB",
          "skillPercent": 0.8
        },
        {
          "skillname": "MongoDB",
          "skillPercent": 0.8
        },
        {
          "skillname": "Firebase, Firestore",
          "skillPercent": 0.7
        }]
    },
    {
      title: "Tools",
      list: [
        {
          "skillname": "Git - GitHub, Bitbucket",
          "skillPercent": 0.9
        },
        {
          "skillname": "Trello",
          "skillPercent": 0.8
        },
        {
          "skillname": "Atlassian tools like Jira, Kanban board and Confluence",
          "skillPercent": 0.9
        }],
    }
  ],
  "portfolio": [
    {
      "name": "Dechea - Patient diagnosis, treatment and management system",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Atlassian tools like Jira, Kanban board and Confluence",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    },
    {
      "name": "Talent500 - Canvas",

      "technologies": ["React.js", "HTML", "CSS",],
      "description": "mobileapp",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    },
    {
      "name": "Tagmango",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Website",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    },
    {
      "name": "Ensight",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Website",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    },
    {
      "name": "Hashicorp",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Website",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    },
    {
      "name": "Message Dapp",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Ethereum and IPFS based message, events and file sharing app",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    },
    {
      "name": "Material UI Dashboard",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Website",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    },
    {
      "name": "Scalable Tic tac toe",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Game",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    },
    {
      "name": "Autocomplete Gmail UI",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "mobileapp",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    },
    {
      "name": "Note list",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "mobileapp",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    },
    {
      "name": "Multi step form",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Material UI and firebase based multi step form",
      "imgurl": `https://picsum.photos/seed/image-${Math.random() * 100}/900/600`
    }
  ],
  "testimonials": [
    {
      "description": "A very dedicated engineer, with a very observant eye for code quality and good practice. He has a knack for quickly adapting to the development ecosystem and contributing, not only to the functionalities but taking initiatives to enforce best practices and follow them which reflects on his work.",
      "name": "Karun Thomas, Manager, Talent500"
    },
  ]
}

export default resumeData