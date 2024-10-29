/**
 * Defines a set of colors used throughout the application.
 * The colors are organized into several groups, including:
 * - `gray`: A set of grayscale colors ranging from dark to light.
 * - `blue`: Primary and hover/focus colors for the application's blue accents.
 * - `red`: A single red color.
 * - `white` and `black`: The standard white and black colors.
 */
const colors = {
  gray: {
    900: "#111827",
    800: "#1F2937",
    700: "#374151",
    600: "#4b5563",
    500: "#6b7280",
    400: "#9ca3af",
    200: "#e5e7eb",
    100: "#f3f4f6",
    50: "#f9fafb",
  },
  blue: { primary: "#3692ff", hover: "#1967D6", focus: "#1251AA" },
  red: "#f74747",
  white: "#FFF",
  black: "#000",
};

const mediaQuery = {
  mobile: "screen and (max-width: 767px)",
  tablet: "screen and (min-width: 768px)",
  desktop: "screen and (min-width: 1280px)",
};

const theme = {
  colors,
  mediaQuery,
};

export default theme;
