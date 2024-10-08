import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork, SiSkype } from "react-icons/si";
import { GiClick } from "react-icons/gi";
import hasiconfImg from "../Assets/Projects/Hashicorp.png";
import canvasImg from "../Assets/Projects/Canvas.png";
import tagmangoImg from "../Assets/Projects/Tagmango.png";
import decheaImg from "../Assets/Projects/Dechea.png";
import muiBoardImg from "../Assets/Projects/muiBoard.png";
import ticTacToeImg from "../Assets/Projects/ticTacToe.png";
import autocompleteImg from "../Assets/Projects/Autocomplete.png";
import notelistImg from "../Assets/Projects/notelist.png";
import ensightImg from "../Assets/Projects/ensight.png";
import messageDapp from "../Assets/Projects/messageDapp.png";
import multiStepImg from "../Assets/Projects/multiStep.jpg";

const resumeData = {
  imagebaseurl: `https://picsum.photos/2133/1200`,
  name: "Madhav Kabra",
  role: "Senior Frontend Developer",
  linkedinId: "https://www.linkedin.com/in/madhavkabra/",
  whatsappLink: " https://wa.me/9229996730?text=Hey%20Madhav,%20Lets%20connect",
  skypeid: "live:madhav.kabra1100",
  roleDescription:
    "I like dabbling in various parts of frontend development and like to learn about new technologies, collaboratively work with developers remotely.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/madhavkabra/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "github",
      url: "https://github.com/Madhavkabra",
      icon: <AiFillGithub />,
    },
    {
      name: "skype",
      url: "https://join.skype.com/invite/uYOoOO90jxo3",
      icon: <SiSkype />,
    },
    {
      name: "upwork",
      url: "https://www.upwork.com/freelancers/~01e690d5a7b5d8b86c",
      icon: <SiUpwork />,
    },
  ],
  aboutme: `Experienced Front End Developer, specializing in ⚛️React-based⚛️ Web Applications and can methodically break down and create COMPLEX APPLICATIONS as per YOUR REQUIREMENTS, using a wide variety of techniques and tools 🛠️.
  I create responsive and performant REACT APPLICATIONS, which are responsive in all screen sizes 📱🖥️. I can re-engineer immensely complex designs and code, providing significantly improved performance.
  I pride myself on designing intuitive interfaces that provides great USER EXPERIENCE.`,
  address: "India",
  website: "https://madhavkabra.github.io/Portfolio/",
  education: [
    {
      UniversityName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      specialization: "B. Tech. - Information Technology",
      MonthOfPassing: "August",
      YearOfPassing: "2019",
      Achievements: "NSS India — C Certified",
    },
    {
      UniversityName: "St. Norbert Senior Secondary School",
      specialization: "Mathematics",
      MonthOfPassing: "January",
      YearOfPassing: "2015",
      Achievements: "Some Achievements",
    },
  ],
  work: [
    {
      CompanyName: "Talent500",
      specialization: "Senior Frontend Developer",
      MonthOfLeaving: "Present",
      YearOfLeaving: "2022",
      responsibilities: [
        `Led the frontend development of a B2B product featuring 1500 UI screens, delivering high-quality user interfaces.`,
        `Developed a reusable UI component library to streamline development across multiple products, significantly reducing initial development time and boosting efficiency.`,
        `Proactively identified and resolved pre-production UX gaps, enhancing elements like loaders, permissions, and API performance for a seamless product launch.`,
        `Created configurable filters that enable users to generate options without the need for code changes, enhancing flexibility and usability.`,
        `Conducted peer code reviews to uphold and improve code quality, fostering a culture of excellence and collaboration within the development team.`,
        `Collaborated with cross-functional teams, including designers, backend developers, and product managers, to ensure seamless integration of features and functionalities.`,
        `Mentored junior developers, sharing knowledge of best practices in React.js, Next.js, and other frontend technologies, contributing to overall team growth.`,
        `Collaborated with senior leadership and product owners to discuss project roadmaps, refine requirements, and align development efforts with business objectives.`,
        `Handled high-level calls with stakeholders, ensuring that project goals and deliverables met the expectations of higher management and external clients.`,
      ],
    },
    {
      CompanyName: "Dechea GmBH, Leipzig, Germany, Europe",
      specialization: "Frontend Developer",
      MonthOfLeaving: "May",
      YearOfLeaving: "2022",
      responsibilities: [
        `Researched and implemented new tools and technologies to accelerate the development process (e.g., Bit.dev for component-driven architecture, Figjam for team brainstorming, and Zipy.ai for user journey optimization).`,
        `Revolutionized product development using Feature Slice Design, ensuring clear business logic, discoverable architecture, and adaptable components for easy refactoring and code reuse.`,
        `Led a successful migration from React.js to Next.js, leveraging server-side rendering for enhanced performance, improved developer experience, and automatic code splitting.`,
        `Achieved approximately 90% clean code coverage, ensuring high-quality code and maintainability.`,
        `Collaborated closely with the product owner and scrum master to refine requirements, manage the product backlog, and facilitate effective sprint planning.`,
        `Optimized web applications for faster load times, reduced latency, and improved SEO through server-side rendering and code splitting.`,
        `Designed and implemented custom hooks and reusable components, reducing development time and improving consistency across projects.`,
        `Optimized frontend performance by implementing lazy loading and code-splitting techniques, significantly improving page load times.`,
      ],
    },
    {
      CompanyName: "Deqode",
      specialization: "Solution Engineer",
      MonthOfLeaving: "Oct",
      YearOfLeaving: "2020",
      responsibilities: [
        `Communicated with clients to gather and clarify feature requirements.`,
        `Provided training to interns on JavaScript, React.js, and related libraries.`,
        `Converted Figma designs into responsive, functional user interfaces.`,
        `Implemented local storage solutions for seamless data persistence and enhanced user experience.`,
        `Utilized browser inspect element and network tools for effective debugging and code optimization.`,
        `Actively participated in Agile ceremonies, including sprint planning and retrospectives, contributing to the team's overall efficiency and effectiveness.`,
        `Enhanced user experience by conducting usability testing and iterating on feedback to improve interface design and functionality.`,
      ],
    },
    {
      CompanyName: "HashiCorp, San Francisco, California, United States",
      specialization: "Senior Frontend Developer",
      MonthOfLeaving: "Aug",
      YearOfLeaving: "2019",
      responsibilities: [
        `Automated lint fixes post-commit using hooks.`,
        `Improved code quality by removal of code duplication and smells using Sonar Cloud.`,
        `Integrated Zoom SDK to allow pre-planned Zoom sessions.`,
        `Integrated IBM Video Player API into the app to allow video session live streaming.`,
      ],
    },
    {
      CompanyName: "Blockapps Brooklyn, New York, United States",
      specialization: "Backend Developer",
      MonthOfLeaving: "Aug",
      YearOfLeaving: "2019",
      responsibilities: [
        `A+ Grade — Performance evaluation from past employers.`,
        `Implemented role-based access control using Node.js.`,
        `Developed a finite state automaton using smart contracts.`,
        `Added data validation and API level test cases to test both failure cases and happy flow.`,
        `Stored the data on IPFS, in a distributed network.`,
      ],
    },
  ],
  skills: [
    {
      title: "Frontend",
      list: [
        {
          skillname: "HTML5",
          skillPercent: 0.9,
        },
        {
          skillname: "CSS",
          skillPercent: 0.8,
        },
        {
          skillname: "React.js",
          skillPercent: 0.9,
        },
        {
          skillname: "Bit.dev",
          skillPercent: 0.8,
        },
        {
          skillname: "Rest API, GraphQL",
          skillPercent: 0.7,
        },
        {
          skillname: "Storybook",
          skillPercent: 0.5,
        },
        {
          skillname: "Internationalization, Localization",
          skillPercent: 0.8,
        },
        {
          skillname: "Sonar cloud",
          skillPercent: 0.8,
        },
        {
          skillname: "Micro-frontends",
          skillPercent: 0.9,
        },
        {
          skillname: "Google Analytics",
          skillPercent: 0.9,
        },
        {
          skillname: "Monolithic frontends",
          skillPercent: 0.9,
        },
      ],
    },
    {
      title: "Testing",
      list: [
        {
          skillname: "Browser automation testing using Cypress",
          skillPercent: 0.7,
        },
        {
          skillname: "Testcafe and chromium drivers",
          skillPercent: 0.8,
        },
        {
          skillname: "Unit tests — Jest, React testing-library, Chai, Mocha",
          skillPercent: 0.9,
        },
        {
          skillname: "Snapshot testing",
          skillPercent: 0.8,
        },
      ],
    },
    {
      title: "Backend",
      list: [
        {
          skillname: "Node.js",
          skillPercent: 0.7,
        },
        {
          skillname: "Joi",
          skillPercent: 0.5,
        },
      ],
    },
    {
      title: "Database",
      list: [
        {
          skillname: "FaunaDB",
          skillPercent: 0.8,
        },
        {
          skillname: "MongoDB",
          skillPercent: 0.8,
        },
        {
          skillname: "Firebase, Firestore",
          skillPercent: 0.7,
        },
      ],
    },
    {
      title: "Tools",
      list: [
        {
          skillname: "Git - GitHub, Bitbucket",
          skillPercent: 0.9,
        },
        {
          skillname: "Trello",
          skillPercent: 0.8,
        },
        {
          skillname: "Atlassian tools like Jira, Kanban board and Confluence",
          skillPercent: 0.9,
        },
      ],
    },
  ],
  portfolio: [
    {
      name: "Dechea",
      technologies: [
        "React.js",
        "HTML",
        "CSS",
        "Bit.dev",
        "Serverless",
        "Graphql",
        "Material UI",
        "Figma",
      ],
      description: `Manage patients and their treatments, by finding them the cheapest and
       the most effective treatment and healthcare available for them. Developed a 2D mouth diagram where
       the doctors can add the treatments and also schedule future appointments.`,
      imgurl: decheaImg,
      buttonLabel: `Website`,
      ghLink: "https://dechea.com/",
      icon: <GiClick />,
    },
    {
      name: "Talent500 - Canvas",

      technologies: [
        "React.js",
        "Styled components",
        "Redux",
        "HTML",
        "CSS",
        "Adobe xd",
      ],
      description: `Application tracking system that allows whole user journey from
       creation of job post, adding positions, creating job workflows, moving canditates
        among multiple stages of screening and also the analytics to the admin.`,
      imgurl: canvasImg,
      buttonLabel: `Website`,
      ghLink: "https://talent500.co/",
      icon: <GiClick />,
    },
    {
      name: "Tagmango",
      technologies: [
        "React.js",
        "HTML",
        "CSS",
        "Ant Design",
        "Google analytics",
        "Firebase",
        "Node.js",
        "MongoDB",
      ],
      description: ` Create, launch and scale within minutes, automate key functions, use various
       marketing tools like coupon codes, live commerce and select high-conversion landing pages.
       Developed analytical features to get a bird’s eye view of all the important data points and 
       insights about everything relevant to user! The Overview section collates information from all
        the other subsections. Created application to skyrocket content and course sales.
      Also developed a chat system for users and creators where they can interact with community directly on a one-to-one or one-to-many basis, this helps in community building.
       `,
      imgurl: tagmangoImg,
      buttonLabel: `Website`,
      ghLink: "https://tagmango.com/",
      icon: <GiClick />,
    },
    {
      name: "Hashicorp",
      technologies: [
        "React.js",
        "Lerna",
        "Material UI",
        "Firebase",
        "Cloud functions",
        "Zoom sdk",
        "IBM Video player",
        "HTML",
        "CSS",
      ],
      description: `Created their virtual event hosting platform called Hashiconf, where moderators can 
      manage the event spanned over multiple days for the attendees by hosting zoom meetings (using zoom sdk) 
      and sessions. Also the attendees can chat (based on firebase) with each other during a session. 
      The moderators can also upload videos and run the same for attendees (IBM video player integration])`,
      imgurl: hasiconfImg,
      ghLink:
        "https://www.hashicorp.com/events/webinars/adfinis-hashiconf-2020-recap",
      icon: <GiClick />,
      buttonLabel: `Website`,
    },
    {
      name: "Ensight",
      technologies: [
        "React.js",
        "Styled Components",
        "HighCharts",
        "Ag-grid",
        "HTML",
        "CSS",
      ],
      description: `A product that collects real time data about the energy consumption of
      devices used in an industry. The data is further analysed to see where the energy can be saved
      by automatically switching on and off the devices using IOT. I specifically developed the analytical dashboard,
      where the realtime data in huge amount can be filtered and be represented in the form of
      charts and graphs for the further optimisation. Also the user can apply mathematical functions on this data.`,
      buttonLabel: `Website`,
      ghLink: "https://www.ensight.co/",
      icon: <GiClick />,
      imgurl: ensightImg,
    },
    {
      name: "Material UI Dashboard",
      technologies: ["React.js", "HTML", "CSS"],
      description:
        "Made for fun - The app is a clone of Material based theme which demonstrates my abolity clone a pixel perfect UI from scrach.",
      imgurl: muiBoardImg,
      ghLink: "https://github.com/Madhavkabra/MaterialUIDashboard",
      demoLink: "https://madhavkabra.github.io/MaterialUIDashboard/",
    },
    {
      name: "Scalable Tic tac toe",
      technologies: ["React.js", "HTML", "CSS"],
      description:
        "Made for fun - It is a Tic tac toc game made using Reactjs. The code for this game is scalable with respect to the size of grid.",
      imgurl: ticTacToeImg,
      demoLink: "https://madhavkabra.github.io/GmailAutocomplete/",
      ghLink: "https://github.com/Madhavkabra/GmailAutocomplete",
    },
    {
      name: "Autocomplete Gmail UI",
      technologies: [
        "React.js",
        "Material UI",
        "Draft.js",
        "Storybook",
        "Unit tests",
      ],
      description:
        "A part of gmail's autocomplete functionality for emails in the inbox.",
      imgurl: autocompleteImg,
      demoLink: "https://madhavkabra.github.io/GmailAutocomplete/",
      ghLink: "https://github.com/Madhavkabra/GmailAutocomplete",
    },
    {
      name: "Note list",
      technologies: ["React.js", "HTML", "CSS"],
      description:
        "Made for fun - The app provides ability to create a note with different titles and colors.",
      imgurl: notelistImg,
      demoLink: "https://madhavkabra.github.io/Notelist/",
      ghLink: "https://github.com/Madhavkabra/Notelist",
    },
    // {
    //   name: "Multi step form",
    //   technologies: ["React.js", "HTML", "CSS"],
    //   description: "Material UI and firebase based multi step form",
    //   imgurl: multiStepImg,
    //   ghLink: "https://github.com/Madhavkabra/MultiStepForm",
    //   icon: <GiClick />,
    // },
    // {
    //   name: "Message Dapp",
    //   technologies: [
    //     "React.js",
    //     "Bootstrap",
    //     "IPFS",
    //     "Ethereum",
    //     "Metamask",
    //     "Solidity (Basic)",
    //     "React-web3",
    //   ],
    //   description: `Ethereum and IPFS based platform where user can create both private and public messages,
    //    events and files. The private once's can be shared with other user based on their address and the public
    //    ones are available to everyone without having to be shared. The storage of the shared files is managed using
    //     IPFS`,
    //   imgurl: messageDapp,
    // },
  ],
  testimonials: [
    {
      name: "Micha Mailander",
      description:
        "Working with Madhav has been an absolute pleasure. Her technical expertise, attention to detail, and ability to solve complex problems are unmatched. She always delivers high-quality work on time and never hesitates to go the extra mile.",
      imgurl:
        "https://img.freepik.com/free-vector/business-woman-profile-cartoon_18591-58479.jpg",
      ratings: 4,
      designation: "CEO, Dechea",
    },
    {
      name: "Sharad Deshpande",
      description:
        "Madhav’s ability to learn new technologies quickly and implement them effectively made her an invaluable part of our team. She is not only a great coder but also a fantastic team player who helps uplift those around her.",
      imgurl:
        "https://img.freepik.com/free-vector/businesswoman-character-avatar-isolated_24877-60111.jpg",
      ratings: 5,
      designation: "Vice President, ansr",
    },
    {
      name: "Aditya Kalyani",
      description:
        "Madhav is a skilled developer who consistently produces high-quality work. Her ability to troubleshoot and find optimal solutions to complex problems is impressive. She is a highly valuable team member and a pleasure to work with.",
      imgurl:
        "https://img.freepik.com/free-vector/business-woman-profile-cartoon_18591-58479.jpg",
      ratings: 4.5,
      designation: "Frontend Developer, Talent500",
    },
    {
      name: "Ashutosh B",
      description:
        "I had a great working relationship with Madhav when he worked with me at ANSR on frontend development of a complex enterprise product. He was quick to adapt, understand, and convert the complex UI designs into real light weight screens. Self-driven and curious to discover new tools and propose new processes. Madhav was also comfortable stepping out of his comfort zone and facing clients, which was very promising for his continuous development.",
      imgurl:
        "https://img.freepik.com/free-vector/male-avatar-profile-picture-vector-illustration_268834-538.jpg",
      ratings: 5,
      designation: "Senior JavaScript Developer, ANSR",
    },
    {
      name: "Siddharth Yadav",
      description:
        "Madhav is a great team player and he knows how to own things. I have worked with him for a few months and have seen his dedication. He somehow manages to do his work while helping others in a seamless way. I can easily recommend him to anyone who is looking for a JavaScript expert.",
      imgurl:
        "https://img.freepik.com/free-vector/businesswoman-character-avatar-isolated_24877-60111.jpg",
      ratings: 4.5,
      designation: "Backend Engineer",
    },
    {
      name: "Tech Lead, CodeCrafters",
      description:
        "Madhav’s attention to detail and commitment to best practices make her stand out as a developer. She is always up-to-date with the latest technologies and consistently delivers code that is both efficient and easy to maintain.",
      imgurl:
        "https://img.freepik.com/free-vector/business-man-profile-cartoon_18591-58480.jpg",
      ratings: 3.5,
      designation: "Tech Lead, CodeCrafters",
    },
    {
      name: "Product Manager, NexaCorp",
      description:
        "Madhav is a fantastic developer with excellent communication skills. She helped us build a highly responsive and functional application under a tight deadline. Her dedication and skills are second to none.",
      imgurl:
        "https://img.freepik.com/free-vector/business-woman-profile-cartoon_18591-58479.jpg",
      ratings: 5,
      designation: "Product Manager, NexaCorp",
    },
    {
      name: "Frontend Developer, Urgent",
      description:
        "Madhav did a fantastic job on our front-end (React, TypeScript). He is a very knowledgeable front-end developer with excellent communication skills and a high attention to detail for a good user experience. I highly recommend Madhav, and we plan to work with him again in the future.",
      imgurl:
        "https://img.freepik.com/free-vector/businesswoman-character-avatar-isolated_24877-60111.jpg",
      designation: "Frontend Developer, Urgent",
      ratings: 4,
    },
  ],
  
  experience: [
    {
      company: "Talent500",
      role: "Senior Frontend Developer",
      employmentType: "Full-time",
      location: "Bengaluru, Karnataka, India · Remote",
      startDate: "Jun 2022",
      endDate: "Present",
      duration: "Currently working",
      description: [
        "Led the frontend development of a B2B product featuring 1500 UI screens, delivering high-quality user interfaces.",
        "Developed a reusable UI component library to streamline development across multiple products, significantly reducing initial development time and boosting efficiency.",
        "Proactively identified and resolved pre-production UX gaps, enhancing elements like loaders, permissions, and API performance for a seamless product launch.",
        "Created configurable filters that enable users to generate options without the need for code changes, enhancing flexibility and usability.",
        "Conducted peer code reviews to uphold and improve code quality, fostering a culture of excellence and collaboration within the development team.",
        "Collaborated with cross-functional teams, including designers, backend developers, and product managers, to ensure seamless integration of features and functionalities.",
        "Mentored junior developers, sharing knowledge of best practices in React.js, Next.js, and other frontend technologies, contributing to overall team growth.",
        "Collaborated with senior leadership and product owners to discuss project roadmaps, refine requirements, and align development efforts with business objectives.",
        "Handled high-level calls with stakeholders, ensuring that project goals and deliverables met the expectations of higher management and external clients.",
      ],
      logo: "https://logo-example.com/talent500.png",
    },
    {
      company: "Dechea",
      role: "Frontend Developer",
      employmentType: "Full-time",
      location: "Kempten, Bavaria, Germany · Remote",
      startDate: "Nov 2020",
      endDate: "May 2022",
      duration: "1 yr 7 mos",
      description: [
        "Researched and implemented new tools and technologies to accelerate the development process (e.g., Bit.dev for component-driven architecture, Figjam for team brainstorming, and Zipy.ai for user journey optimization).",
        "Revolutionized product development using Feature Slice Design, ensuring clear business logic, discoverable architecture, and adaptable components for easy refactoring and code reuse.",
        "Led a successful migration from React.js to Next.js, leveraging server-side rendering for enhanced performance, improved developer experience, and automatic code splitting.",
        "Achieved approximately 90% clean code coverage, ensuring high-quality code and maintainability.",
        "Collaborated closely with the product owner and scrum master to refine requirements, manage the product backlog, and facilitate effective sprint planning.",
        "Optimized web applications for faster load times, reduced latency, and improved SEO through server-side rendering and code splitting.",
        "Designed and implemented custom hooks and reusable components, reducing development time and improving consistency across projects.",
        "Optimized frontend performance by implementing lazy loading and code-splitting techniques, significantly improving page load times.",
      ],
      logo: "https://logo-example.com/dechea.png",
    },
    {
      company: "Deqode",
      role: "Solution Engineer",
      employmentType: "Full-time",
      location: "Indore, Madhya Pradesh, India · On-site",
      startDate: "Jan 2019",
      endDate: "Oct 2020",
      duration: "1 yr 10 mos",
      description: [
        "Communicated with clients to gather and clarify feature requirements.",
        "Provided training to interns on JavaScript, React.js, and related libraries.",
        "Converted Figma designs into responsive, functional user interfaces.",
        "Implemented local storage solutions for seamless data persistence and enhanced user experience.",
        "Utilized browser inspect element and network tools for effective debugging and code optimization.",
        "Actively participated in Agile ceremonies, including sprint planning and retrospectives, contributing to the team's overall efficiency and effectiveness.",
        "Enhanced user experience by conducting usability testing and iterating on feedback to improve interface design and functionality.",
      ],
      logo: "https://logo-example.com/deqode.png",
    },
  ],
};

export default resumeData;
