import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  light: "#fafafa",
  dark: "#222",
});

export const textColor = theme("mode", {
  light: "#000",
  dark: "#fff",
});

export const buttonBackgroundColor = theme("mode", {
  light: "#222",
  dark: "#eee",
});

export const buttonTextColor = theme("mode", {
  light: "#eee",
  dark: "#222",
});

export const primaryColor = theme("mode", {
  light: "#0077ff",
  dark: "#0077ff",
});

export const secondaryColor = theme("mode", {
  light: "#0055cc",
  dark: "#0055cc",
});

export const tertiaryColor = theme("mode", {
  light: "#fff",
  dark: "#000",
});

export const borderColor = theme("mode", {
  light: "#ddd",
  dark: "#444",
});

export const inputBackgroundColor = theme("mode", {
  light: "#f0f0f0",
  dark: "#444",
});

export const inputBorderColor = theme("mode", {
  light: "#ccc",
  dark: "#555",
});

export const inputTextColor = theme("mode", {
  light: "#000",
  dark: "#fff",
});

export const navBarBackgroundColor = theme("mode", {
  light: "#fff",
  dark: "#333",
});

export const navBarTextColor = theme("mode", {
  light: "#000",
  dark: "#fff",
});

export const footerBackgroundColor = theme("mode", {
  light: "#f5f5f5",
  dark: "#111",
});

export const footerTextColor = theme("mode", {
  light: "#333",
  dark: "#999",
});

export const headingColor = theme("mode", {
  light: "#333",
  dark: "#fff",
});

export const subHeadingColor = theme("mode", {
  light: "#666",
  dark: "#8d8d8d",
});

export const linkColor = theme("mode", {
  light: "#0077ff",
  dark: "#0077ff",
});

export const errorColor = theme("mode", {
  light: "#ff4444",
  dark: "#ff4444",
});

export const successColor = theme("mode", {
  light: "#00cc66",
  dark: "#00cc66",
});

export const warningColor = theme("mode", {
  light: "#ffbb33",
  dark: "#ffbb33",
});

// Theme mode toggle
export const themeMode = theme("mode", {
  light: {
    backgroundColor,
    textColor,
    buttonBackgroundColor,
    buttonTextColor,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    borderColor,
    inputBackgroundColor,
    inputBorderColor,
    inputTextColor,
    navBarBackgroundColor,
    navBarTextColor,
    footerBackgroundColor,
    footerTextColor,
    headingColor,
    subHeadingColor,
    linkColor,
    errorColor,
    successColor,
    warningColor,
  },
  dark: {
    backgroundColor,
    textColor,
    buttonBackgroundColor,
    buttonTextColor,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    borderColor,
    inputBackgroundColor,
    inputBorderColor,
    inputTextColor,
    navBarBackgroundColor,
    navBarTextColor,
    footerBackgroundColor,
    footerTextColor,
    headingColor,
    subHeadingColor,
    linkColor,
    errorColor,
    successColor,
    warningColor,
  },
});
