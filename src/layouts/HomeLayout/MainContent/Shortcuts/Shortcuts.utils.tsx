import type { ConversationI } from "@/utils/types/conversation";

export const shortcutsList: ConversationI[] = [
  {
    id: 1,
    title: "About Me",
    ownMsg: true,
    msg: "Tell me about yourself.",
  },
  {
    id: 2,
    title: "Education",
    ownMsg: true,
    msg: "Tell me about your education",
  },
  {
    id: 3,
    title: "Contact",
    ownMsg: true,
    msg: "How can i contact you",
  },
];

export const queryAnswers: ConversationI[] = [
  {
    id: 1,
    msg: "I am a committed team player with a strong ability to learn quickly and perform well under pressure. Highly adaptable to new environments, I continuously strive for personal and professional growth. I aim to apply my skills, experience, and dedication to a reputable organization, contributing to its success while advancing my own development. I am seeking a role that values creativity, flexibility, and resourcefulness, and offers opportunities for career advancement. I am eager to join a respected organization where I can make a meaningful impact and support its long-term growth.",
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
