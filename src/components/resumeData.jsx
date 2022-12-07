import React from 'react';
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork, SiSkype } from "react-icons/si";
import { GiClick } from 'react-icons/gi';
import hasiconfImg from '../Assets/Projects/Hashicorp.png'
import canvasImg from '../Assets/Projects/Canvas.png'
import tagmangoImg from '../Assets/Projects/Tagmango.png'
import decheaImg from '../Assets/Projects/Dechea.png'
import muiBoardImg from '../Assets/Projects/muiBoard.png'
import ticTacToeImg from '../Assets/Projects/ticTacToe.png'
import autocompleteImg from '../Assets/Projects/Autocomplete.png'
import notelistImg from '../Assets/Projects/notelist.png'
import ensightImg from '../Assets/Projects/ensight.png'
import messageDapp from '../Assets/Projects/messageDapp.png'
import multiStepImg from '../Assets/Projects/multiStep.jpg'

const resumeData = {
  "imagebaseurl": `https://picsum.photos/2133/1200`,
  "name": "Madhav Kabra",
  "role": "Senior Frontend Developer",
  "linkedinId": "https://www.linkedin.com/in/madhavkabra/",
  "whatsappLink": " https://wa.me/9229996730?text=Hey%20Madhav,%20Lets%20connect",
  "skypeid": "live:madhav.kabra1100",
  "roleDescription": "I like dabbling in various parts of frontend development and like to learn about new technologies, collaboratively work with developers remotely.",
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
      "technologies": ["React.js", "HTML", "CSS", "Bit.dev", "Serverless", "Graphql", "Material UI", "Figma"],
      "description": `Manage patients and their treatments, by finding them the cheapest and
       the most effective treatment and healthcare available for them. Developed a 2D mouth diagram where
       the doctors can add the treatments and also schedule future appointments.`,
      "imgurl": decheaImg,
      buttonLabel: `Website`,
      ghLink: 'https://dechea.com/',
      icon: <GiClick />
    },
    {
      "name": "Talent500 - Canvas",

      "technologies": ["React.js", "Styled components", "Redux", "HTML", "CSS", "Adobe xd"],
      "description": `Application tracking system that allows whole user journey from
       creation of job post, adding positions, creating job workflows, moving canditates
        among multiple stages of screening and also the analytics to the admin.`,
      "imgurl": canvasImg,
      buttonLabel: `Website`,
      ghLink: 'https://talent500.co/',
      icon: <GiClick />
    },
    {
      "name": "Tagmango",
      "technologies": ["React.js", "HTML", "CSS", "Ant Design", "Google analytics",
        "Firebase", "Node.js", "MongoDB"],
      "description": ` Create, launch and scale within minutes, automate key functions, use various
       marketing tools like coupon codes, live commerce and select high-conversion landing pages.
       Developed analytical features to get a bird’s eye view of all the important data points and 
       insights about everything relevant to user! The Overview section collates information from all
        the other subsections. Created application to skyrocket content and course sales.
      Also developed a chat system for users and creators where they can interact with community directly on a one-to-one or one-to-many basis, this helps in community building.
       `,
      "imgurl": tagmangoImg,
      buttonLabel: `Website`,
      ghLink: 'https://tagmango.com/',
      icon: <GiClick />
    },
    {
      "name": "Hashicorp",
      "technologies": ["React.js", "Lerna", "Material UI", "Firebase", "Cloud functions", "Zoom sdk", "IBM Video player", "HTML", "CSS"],
      "description": `Created their virtual event hosting platform called Hashiconf, where moderators can 
      manage the event spanned over multiple days for the attendees by hosting zoom meetings (using zoom sdk) 
      and sessions. Also the attendees can chat (based on firebase) with each other during a session. 
      The moderators can also upload videos and run the same for attendees (IBM video player integration])`,
      "imgurl": hasiconfImg,
      ghLink: "https://www.hashicorp.com/events/webinars/adfinis-hashiconf-2020-recap",
      buttonLabel: `Website`,
    },
    {
      "name": "Ensight",
      "technologies": ["React.js", "Styled Components", "HighCharts", "Ag-grid", "HTML", "CSS"],
      "description": `A product that collects real time data about the energy consumption of
      devices used in an industry. The data is further analysed to see where the energy can be saved
      by automatically switching on and off the devices using IOT. I specifically developed the analytical dashboard,
      where the realtime data in huge amount can be filtered and be represented in the form of
      charts and graphs for the further optimisation. Also the user can apply mathematical functions on this data.`,
      buttonLabel: `Website`,
      ghLink: 'https://www.ensight.co/',
      icon: <GiClick />,
      "imgurl": ensightImg
    },
    {
      "name": "Message Dapp",
      "technologies": ["React.js", "Bootstrap", "IPFS", "Ethereum", "Metamask", "Solidity (Basic)", "React-web3"],
      "description": `Ethereum and IPFS based platform where user can create both private and public messages,
       events and files. The private once's can be shared with other user based on their address and the public 
       ones are available to everyone without having to be shared. The storage of the shared files is managed using
        IPFS`,
      "imgurl": messageDapp
    },
    {
      "name": "Material UI Dashboard",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Made for fun - The app is a clone of Material based theme which demonstrates my abolity clone a pixel perfect UI from scrach.",
      "imgurl": muiBoardImg,
      ghLink: 'https://github.com/Madhavkabra/MaterialUIDashboard',
      demoLink: 'https://madhavkabra.github.io/MaterialUIDashboard/',
    },
    {
      "name": "Scalable Tic tac toe",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Made for fun - It is a Tic tac toc game made using Reactjs. The code for this game is scalable with respect to the size of grid.",
      "imgurl": ticTacToeImg,
      demoLink: 'https://madhavkabra.github.io/GmailAutocomplete/',
      ghLink: 'https://github.com/Madhavkabra/GmailAutocomplete',
    },
    {
      "name": "Autocomplete Gmail UI",
      "technologies": ["React.js", "Material UI", "Draft.js", "Storybook", "Unit tests"],
      "description": "A part of gmail's autocomplete functionality for emails in the inbox.",
      "imgurl": autocompleteImg,
      demoLink: 'https://madhavkabra.github.io/GmailAutocomplete/',
      ghLink: 'https://github.com/Madhavkabra/GmailAutocomplete',
    },
    {
      "name": "Note list",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Made for fun - The app provides ability to create a note with different titles and colors.",
      "imgurl": notelistImg,
      demoLink: 'https://madhavkabra.github.io/Notelist/',
      ghLink: 'https://github.com/Madhavkabra/Notelist',
    },
    {
      "name": "Multi step form",
      "technologies": ["React.js", "HTML", "CSS",],
      "description": "Material UI and firebase based multi step form",
      "imgurl": multiStepImg,
      ghLink: 'https://github.com/Madhavkabra/MultiStepForm',
      icon: <GiClick />,
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