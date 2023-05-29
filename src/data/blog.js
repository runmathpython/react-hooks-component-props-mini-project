import logo from "../assets/logo";

const blogData = {
  name: "Underreacted",
  image: {logo},
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "npm audit: Broken ny Design",
      link: "https://overreacted.io/npm-audit-broken-by-design/",
      date: "July 7, 2021",
      preview: "Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)",
      minutes: 14,
    },
    {
      id: 2,
      title: "Before You memo()",
      link: "https://overreacted.io/before-you-memo/",
      date: "February 23, 2021",
      preview: "Rendering optimizations that come naturally.",
      minutes: 5,
    },
    {
      id: 3,
      title: "The WET Codebase",
      link: "https://overreacted.io/the-wet-codebase/",
      date: "July 13, 2020",
      preview: "Come waste your time with me.",
      minutes: 1,
    },
    {
      id: 4,
      title: "A Complete Guide to UseEffect",
      link: "https://overreacted.io/a-complete-guide-to-useeffect/",
      date: "March 9, 2019",
      preview: "Effects are a part of your data flow.",
      minutes: 49,
    },
    {
      id: 5,
      title: "The Elements of UI Engineering",
      link: "https://overreacted.io/the-elements-of-ui-engineering/",
      preview: "What makes UI engineering difficult?",
      minutes: 8,
    },
  ],
};

export default blogData;
