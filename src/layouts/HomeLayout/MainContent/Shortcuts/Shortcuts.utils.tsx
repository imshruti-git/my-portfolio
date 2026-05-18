import type { ConversationI } from "@/utils/types/conversation";

export const shortcutsList: ConversationI[] = [
  {
    id: 1,
    title: "About Me",
    ownMsg: true,
    msg: "Tell me about yourself.",
    icon: "👋",
  },
  {
    id: 2,
    title: "Education",
    ownMsg: true,
    msg: "What is your educational background?",
    icon: "🎓",
  },
  {
    id: 3,
    title: "Work Experience",
    ownMsg: true,
    msg: "What is your work experience?",
    icon: "💼",
  },
  {
    id: 4,
    title: "Skills",
    ownMsg: true,
    msg: "What are your technical skills?",
    icon: "⚡",
  },

  {
    id: 6,
    title: "Contact",
    ownMsg: true,
    msg: "How can I contact you?",
    icon: "📧",
  },
];

export const queryAnswers: ConversationI[] = [
  {
    id: 1,
    msg: `
        Hi! I'm **Shruti Vaidya** 👋  

        I'm a **Software Developer** with 3+ years of experience** in frontend and web application development.

        I specialize in building modern applications using:
        - React
        - TypeScript
        - JavaScript

        At **Treeleaf Technologies**, I worked on:
        - AI chatbot platforms
        - Real-time messaging systems
        - CRM dashboards

        I love creating **clean user interfaces**, solving problems, and building meaningful digital experiences.

        Feel free to ask me about my **experience, skills, or projects!**
`,
    ownMsg: false,
    timestamp: Date.now(),
  },

  {
    id: 2,
    msg: "Bachelor of Business Information System from Little Angle's College of Management affiliated to Kathmandu University",
    ownMsg: false,
    timestamp: Date.now(),
  },
  {
    id: 3,
    msg: "Phone no: 9843419511",
    ownMsg: false,
    timestamp: Date.now(),
  },
];
