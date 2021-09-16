// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Praveen",
  middleName: "",
  lastName: "Pinjala",
  message: " Web Developer | Engineer | Programmer | Sports Enthusiast ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/PraveenPin",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/praveen_pin/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/praveenpin17/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/@praveen_pin/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/picture.jpeg"),
  imageSize: 375,
  message:
    "My name is Praveen Pinjala. I’m a Computer Science Graduate Student at Rutgers University, New Jersey, U.S. I'm most passionate about developing web applications with new technologies, and my goal is to pursue this passion within the field of Computer Science.",
  resume: require("../assets/Resume.pdf"),
};

// PROJECTS SECTION https://drive.google.com/file/d/1wzQeTiL-hNSqaVo56bazpcERLtX1Ll_p/view?ths=true
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "PraveenPin", //i.e."johnDoe12Gh"
  reposLength: 8,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      // img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      // img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const skills = {
  show: true,
  heading: "Skills",
  "icons": [
    {
      "name": "Java8",
      "class": "cib:java",
      "level": "75"
    },
    {
      "name": "React",
      "class": "cib:react",
      "level": "80"
    },
    {
      "name": "C/C++",
      "class": "cib:coreui-c",
      "level": "65"
    },
    {
      "name": "Python",
      "class": "cib:python",
      "level": "85"
    },
    {
      "name": "JavaScript",
      "class": "cib:js",
      "level": "70"
    },
    {
      "name": "HTML 5",
      "class": "cib:html5",
      "level": "95"
    },
    {
      "name": "CSS 3",
      "class": "cib:css3",
      "level": "95"
    },
    {
      "name": "Git",
      "class": "cib:git",
      "level": "85"
    },
    {
      "name": "SQL",
      "class": "fontisto:oracle",
      "level": "65"
    },
    {
      "name": "Android",
      "class": "cib:android-alt",
      "level": "60"
    },
    {
      "name": "React Native",
      "class": "uil:react",
      "level": "85"
    },
    {
      "name": "Spring",
      "class": "cib:spring",
      "level": "85"
    },
    {
      "name": "TypeScript",
      "class": "cib:typescript",
      "level": "90"
    },
    {
      "name": "Solidity",
      "class": "file-icons:solidity",
      "level": "85"
    },
    {
      "name": "MySql",
      "class": "cib:mysql",
      "level": "60"
    },
    {
      "name": "Maven",
      "class": "simple-icons:apachemaven",
      "level": "60"
    }
  ]
};

// SKILLS SECTION
const skills1 = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time SDE internship opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "praveen123pinjala@gmail.com",
  contact: "(+1) 7329006571"
};

const experiences = [
  {
    "company": "Deutsche Bank",
    "title": "Full Stack Web Developer",
    "years": "Jul.2018 - Jan.2021",
    "mainTech": [
      "ReactJS + Redux, Spring Java, Oracle SQL"
    ],
    "technologies": [
      "REST API",
      "Java 8",
      "Maven",
      "H2",
      "Bootstrap + Material.io",
      "Junit",
      "JIRA",
    ]
  },
  {
    "company": "Zuti Engineering Solutions",
    "title": "Software Dev Intern",
    "years": "May.2017 - Jul.2017",
    "mainTech": [
      "Android, ROS, Javascript"
    ],
    "technologies": [
      "Android Java",
      "ROS Framework",
      "Javascript",
      "HTML5, CSS",
      "OpenGL"
    ]
  }
];

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, skills1, leadership, getInTouch, experiences };
