import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
// import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';
import tesla from '../assets/projects/tesla.png';
import portfolio from '../assets/projects/portfolio.png';
import chat from '../assets/projects/chat.png';
import bitcoin from '../assets/projects/bitcoin.png';
import snacksense from '../assets/projects/sncaksense.webp';

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Innovative full-stack developer specializing in the MERN stack, with a strong foundation in machine learning and
data-driven application development. Adept at building scalable, user-centric platforms and intelligent systems Winner of Hack SRM 6.0, a prestigious national-level hackathon hosted at SRM University, recognized for delivering
cutting-edge tech solutions.
Skilled in React.js, Node.js, MongoDB, SQL, and core ML algorithms including Linear/Logistic Regression, Decision
Trees, and PCA. Proficient in Python, C++, and Java, with hands-on experience in Linux environments, distributed
systems, and backend integration.
Developed impactful solutions such as a real-time blockchain analytics dashboard, an interactive web chat platform, and
machine learning-driven tools for predictive analytics and classification.`;

// export const EXPERIENCES = [
//   {
//     year: '2023 - Present',
//     role: 'Senior Full Stack Developer',
//     company: 'Google Inc.',
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ['Javascript', 'React.js', 'Next.js', 'mongoDB'],
//   },
//   {
//     year: '2022 - 2023',
//     role: 'Frontend Developer',
//     company: 'Adobe',
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ['HTML', 'CSS', 'Vue.js', 'mySQL'],
//   },
//   {
//     year: '2021 - 2022',
//     role: 'Full Stack Developer',
//     company: 'Facebook',
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ['Python', 'Svelte', 'Three.js', 'Postgres'],
//   },
//   {
//     year: '2020 - 2021',
//     role: 'Software Engineer',
//     company: 'Paypal',
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ['Ruby', 'Rails', 'PHP', 'Sqlite'],
//   },
// ];

export const PROJECTS = [
  {
    title: 'SnackSense',
    image: snacksense,
    description:
      'Developed an AI-powered web app that delivers personalized health insights and snack recommendations by analyzing user preferences and dietary habits using Large Language Models (LLMs). Winner of Hack SRM 6.0 with a ₹60,000 prize.',
    technologies: [
      'ReactJS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'LLMs',
      'OpenAI API',
    ],
    github: 'https://github.com/Abhiram-108/SNACKSENSE.',
  },
  {
    title: 'MERN Web Chat App',
    image: chat,
    description:
      'Created a real-time chat application using the MERN stack that allows users to register, find friends, post content, and perform CRUD operations. Focused on user experience and efficient messaging flow.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
    github: 'https://github.com/Abhiram-108/CONNECTIFY',
  },
  {
    title: 'CryptoPulse - Cryptocurrency Tracker',
    image: bitcoin,
    description:
      'Built a web application that tracks real-time blockchain currency data using public crypto APIs. It displays current prices, identifies the top gainers and losers of the day, and shows overall market capitalization trends.',
    technologies: [
      'ReactJS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'CoinGecko API',
    ],
    github: 'https://github.com/Abhiram-108/CONNECTIFY',
  },
  {
    title: 'NEWS-LIVE',
    image: project1,
    description:
      'Developed a dynamic React.js website featuring a global news aggregator powered by the News API. This interactive platform delivers a comprehensive selection of news articles across various categories, including entertainment, health, and more, catering to a diverse audience.',
    technologies: ['HTML', 'CSS', 'React', 'REST-API'],
    github: 'https://github.com/Abhiram-108/NEWS-LIVE',
  },
  {
    title: 'Compass & Comfort: Find Hotels & Weather with Ease',
    image: project2,
    description:
      'Developed a travel companion app using ReactJS and Rapid API to integrate Google Maps API and a weather API. The app allows users to search for hotels near their current location (geolocation) or by entering a specific address.',
    technologies: [
      'HTML',
      'CSS',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Rapid API',
    ],
    github: 'https://github.com/Abhiram-108/Compass-Comfort',
  },
  {
    title: 'Portfolio Website',
    image: portfolio,
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ['HTML', 'CSS', 'React', 'TailwindCSS', 'Framer Motion'],
  },
  {
    title: 'Tesla Clone',
    image: tesla,
    description: 'Cloned the Tesla website using React.js.',
    technologies: ['ReactJS'],
    github: 'https://github.com/Abhiram-108/tesla-clone',
  },
  {
    title: 'Maths Solver',
    image: project4,
    description:
      'Engineered a console-based application in C++ providing a versatile and efficient resource for mathematical tasks. It includes computations for algebra, matrix and vector operations, polynomial manipulation, complex numbers, mensuration, and equation solving.',
    technologies: ['C++', 'Object-Oriented Programming'],
    github: 'https://github.com/Abhiram-108/oops-prj',
  },
];

export const CONTACT = {
  address: 'Vizag, Andhra pradesh ,532185',
  phoneNo: '+91-7337434413',
  email: 'abhiram.pedada108@gmail.com',
};
