const baseTheme = {
  font: {
    primary: "'Roboto', serif, Arial, Helvetica",
  },
};

export const lightTheme = {
  ...baseTheme,
  color: {
    text: "#333333",
    secondaryText: "#9e9a9a",
    bg: "#ffffff",
    borderColor: "#d2d2d2",
    hoverColor: "#d1eff4",
    bubbleColor: "#e3f2fd",
    aiColor:
      "linear-gradient(90deg, rgba(185, 223, 254, 0.50) 0%, rgba(181, 238, 207, 0.50) 100%)",
  },
};

export const darkTheme = {
  ...baseTheme,
  color: {
    text: "#ffffff",
    secondaryText: "#9e9a9a",
    bg: "#070707ff",
    borderColor: "#d2d2d2",
    hoverColor: "#454747ff",
    bubbleColor: "#5d6061ff",
    aiColor:
      "linear-gradient(90deg, rgba(185, 223, 254, 0.50) 0%, rgba(181, 238, 207, 0.50) 100%)",
  },
};
