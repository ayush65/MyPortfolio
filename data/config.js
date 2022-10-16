export const meta = {
  title: "Ayush Prakash - Frontend Developer",
  description: "A developer and designer building things people love."
};

export const hero = {
  title: "Hello, I'm Ayush Prakash.",
  description:
    "Ever Since I decided to get into computer science, I am always willing to do something new something which makes me stand out from the crowd and makes me feel good about the work I did, I can devote a number of hours to solve a problem and get an efficient solution for it, that's my passion."
};

export const navItems = [
  {
    path: "#featured-projects",
    label: "Featured Projects"
  },
  {
    path: "#education-experience",
    label: "Education & Experience"
  },
  {
    path: "#work",
    label: "Work"
  }
];

export const featuredProjects = {
  id: "featured-projects",
  name: "Featured Projects",
  projects: [
    {
      title: "Foodwiz",
      tags: ["React", "MongoDb", "Express", "NodeJs", "Css"],
      description:
        "includes User Authentication features like logging in and out, creating new accounts, etc.",
      links: [
        {
          title: "live site",
          url: "https://gq8rpf-3000.preview.csb.app/"
        },
        {
          title: "gitHub",
          url: "https://github.com/ayush65/FoodWiz-mern-Frontend"
        }
      ]
    },
    {
      title: "Quiz Mania",
      tags: ["Typescript", "Css"],
      description:
        "User can play a selective quiz and atlast the user can get the score",
      links: [
        {
          title: "live site",
          url: "https://quiz-mania-react.netlify.app/"
        },
        {
          title: "gitHub",
          url: "https://github.com/ayush65/quiz-mania"
        }
      ]
    },
    {
      title: "Westworld",
      tags: ["React", "Firebase", "Css"],
      description:
        "features functional like play video , add to playlist , like a vieoo ,history etc.",
      links: [
        {
          title: "live site",
          url: "https://the-westworld.netlify.app/"
        },
        {
          title: "gitHub",
          url: "https://github.com/ayush65/The-westworld"
        }
      ]
    },
    {
      title: "Lets Connect",
      tags: ["React", "Firebase", "Css"],
      description:
        "functionality added like create a post , delete a post , edit a post,comment on a post , bookmark a post etc.",
      links: [
        {
          title: "live site",
          url: "https://lets-connect-react.netlify.app/"
        },
        {
          title: "gitHub",
          url: "https://github.com/ayush65/lets-connnect"
        }
      ]
    }
  ]
};
export const works = {
  id: "works",
  name: "Works",
  projects: [
    {
      title: "Angry Bird UI",
      tags: ["Html", "Javascript", "Css"],
      description:
        "Consists of a variety of commonly used UI components like AVATAR, BADGE, INPUT, ALERT, etc.",
      links: [
        {
          title: "live site",
          url: "https://angry-bird-ui.netlify.app/"
        },
        {
          title: "gitHub",
          url: "https://github.com/ayush65/Angry-BirdUI"
        }
      ]
    }
  ]
};

export const educationExperience = {
  id: "education-experience",
  name: "Education & Experience",
  items: [
    {
      company: "Full Stack Developer Trainee , Neog Camp",
      date: "Jan, 2022",
      summary:
        "Build 6 projects like E-commerce, Video Library, Component Library, Browser   Extension, Quiz App, and Pomodoro , Created 750+ Github commits in all projects. , Raised 100+ GitHub pull requests in all my projects. , Reviewed 150+ GitHub pull request code"
    },
    {
      company: "Web Development Intern , Infycloud",
      date: "Aug 2021 - Oct 2022",
      summary:
        "Worked on the client project with the team.  , Worked on the Homepage , Bill Management , Payment Integration. , Made the pages Responsive ."
    },
    {
      company: "Computer Science Graduate , Ewit Bangalore",
      date: "Aug 2018 - Aug 2022",
      summary: "CGPA: 8.0"
    }
  ]
};
