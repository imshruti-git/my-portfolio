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
  // {
  //   id: 5,
  //   title: "Projects",
  //   ownMsg: true,
  //   msg: "Check out my personal projects.",
  //   icon: "🛠️",
  // },
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
    msg: `Hey there! I'm **Shruti Vaidya** 👋  a Frontend Engineer based in **Kathmandu, Nepal**.\n\nI've spent the last **3+ years** building web applications that people actually enjoy using. I started as an intern and worked my way up to leading full frontend features — which has been quite a journey!\n\nMost of my experience has been at **Treeleaf Technologies**, where I got to work on some really interesting stuff — from building an **AI chatbot platform** that non-tech users could customize themselves, to engineering a **real-time messaging system** with end-to-end encryption. \n\nI genuinely love the craft of frontend development, that sweet spot where **logic meets design**. I care a lot about writing clean code, making things fast, and making sure the end user has a smooth experience.\n\nOutside of work, I've been investing in myself. Currently I am pursuing my **Master's degree** and continuously leveling up my skills.\n\nIf you want to know more about my **work experience, skills, or projects** — just ask! I'd love to share. 🚀`,
    ownMsg: false,
    timestamp: Date.now(),
  },
  {
    id: 2,
    msg: `## 🎓 Education\n\nI completed my **Bachelor of Business Information Systems (BBIS)** from Little Angel's Collegs of Management affiliated to **Kathmandu University**, and graduated in **2021**.\n\nHonestly, it was a pretty unique degree with a blend of business thinking and technical depth. At the time I wasn't sure how they'd fit together, but looking back, it's been one of my biggest strengths. I understand both the **developer side** and the **business impact** of what I build.\n\nIt's also what drew me toward frontend because it sits right at that intersection of **user needs, design, and engineering**.\n\nAnd the learning hasn't stopped there. I'm currently pursuing my **Master's degree** in Software Engineering, because I believe there's always more to understand and explore. 📚`,
    ownMsg: false,
    timestamp: Date.now(),
  },
  {
    id: 3,
    msg: `## 💼 Work Experience\n\nMost of my career has been with **Treeleaf Technologies** — I actually started there as an intern and grew into a full Software Developer role over time. Here's how that journey looked:\n\n---\n\n### 🚀 Software Developer\n📅 November 2022 – November 2025\n\nThis is where things got really exciting. Some highlights:\n\n- Led the frontend of a **CRM platform** with real-time analytics dashboards and a ticketing workflow — it genuinely made the support team's day-to-day so much smoother\n- Built an **AI chatbot platform** where non-technical users could customize the entire UI — layouts, themes, button placements — without touching a single line of code. That one was a fun challenge! 🤖\n- Engineered a **real-time messaging system** using MQTT with end-to-end encryption — reliability and security were non-negotiable here\n- Added **voice interaction** features using OpenAI Web APIs — text-to-speech and speech-to-text that felt seamless to use\n- Spent a lot of time on **performance** too — lazy loading, memoization, reducing build size — the kind of work users never notice, but definitely feel\n\n---\n\n### 🌱 Frontend Traineeship\n📅 June 2022 – October 2022\n\nThis was where I started getting real-world exposure. I was building features, communicating with clients, debugging issues, and learning how a real product team operates.\n\n---\n\n### 👶 Frontend Intern\n📅 March 2022 – June 2022\n\nEveryone starts somewhere! I began with **responsive email templates** and contributing to website builds. Small tasks, but they taught me the importance of cross-device compatibility and pixel-perfect UI — habits I still carry today.`,
    ownMsg: false,
    timestamp: Date.now(),
  },
  {
    id: 4,
    msg: `## ⚡ Skills\n\nHere's my honest breakdown of what I work with — no buzzword stuffing, I promise! 😄\n\n### 💻 Languages\n- **TypeScript** — my primary language, I really enjoy the safety it brings\n- **JavaScript** — where it all started\n- **HTML5 / CSS3** — the foundation I still care deeply about\n\n### ⚛️ Frameworks & Libraries\n- **React** — my main playground for the past 3+ years\n- **Redux / Context API** — for state that needs to travel far\n- **TanStack Query** — makes server state management feel clean\n- **Styled Components** — because CSS-in-JS just clicks for me\n- **Storybook** — great for building and documenting components in isolation\n\n### 🏗️ Architecture & Practices\n- **Component-Based Architecture** — building things that are reusable and maintainable\n- **Module Federation** — experience with micro-frontend setups\n- **OOP principles** — thinking in structure and design patterns\n\n### 🧪 Testing\n- **Jest / React Testing Library** — familiar and growing here. Testing is something I genuinely want to get better at!\n\n### 🛠️ Tools & Soft Skills\n- **Git** — daily driver, comfortable with branching strategies\n- **UX Design thinking** — I care about what the user actually experiences\n- **Collaboration & communication** — I've worked closely with designers, backend devs, and clients`,
    ownMsg: false,
    timestamp: Date.now(),
  },
  // {
  //   id: 5,
  //   msg: `## 🛠️ Personal Projects\n\nHere are some projects I've built on my own to explore ideas and sharpen my skills!\n\n---\n\n### Movie Dash Time\n🔗 (https://moviedashtime.netlify.app/) \n\n`,
  //   ownMsg: false,
  //   timestamp: Date.now(),
  // },
  {
    id: 6,
    msg: `## 📬 Let's Connect!\n\nI'm always open to interesting conversations — whether it's about a potential opportunity, a project idea, or just geeking out about frontend stuff. Don't hesitate to reach out! 😊\n\n- 📧 **Email:** vaidya.shruti1108@gmail.com\n- 📞 **Phone:** +977-9843419511\n- 📍 **Location:** Maharajgunj, Kathmandu, Nepal\n- 💼 **LinkedIn:** [Let's connect on LinkedIn](https://linkedin.com)\n\nI try to respond promptly and I genuinely enjoy meeting new people in the tech space. Looking forward to hearing from you! 🙌`,
    ownMsg: false,
    timestamp: Date.now(),
  },
];
