import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "var(--font-poppins), sans-serif",
    body: "var(--font-inter), sans-serif",
  },
  colors: {
    brand: {
      50: "#e8f5ef",
      100: "#c3e5d5",
      200: "#9dd4ba",
      300: "#76c39e",
      400: "#4fb282",
      500: "#2f9968",
      600: "#227a52",
      700: "#1a5c3e",
      800: "#123d29",
      900: "#0a1f15",
    },
    ink: {
      50: "#f5f5f5",
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#4d4d4d",
      700: "#333333",
      800: "#1a1a1a",
      900: "#0d0d0d",
    },
    sand: {
      50: "#fdfcfa",
      100: "#f7f3ed",
      200: "#efe7db",
      300: "#e4d7c3",
    },
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "ink.800",
      },
      "*::selection": {
        bg: "brand.200",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "sm",
        fontWeight: "600",
      },
      variants: {
        solid: {
          bg: "ink.900",
          color: "white",
          _hover: { bg: "ink.700" },
        },
        outline: {
          borderColor: "ink.900",
          color: "ink.900",
          borderWidth: "1.5px",
          _hover: { bg: "ink.900", color: "white" },
        },
        brand: {
          bg: "brand.600",
          color: "white",
          _hover: { bg: "brand.700" },
        },
        link: {
          color: "ink.900",
          textDecoration: "underline",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "600",
        letterSpacing: "-0.02em",
      },
    },
    Container: {
      baseStyle: {
        maxW: "1400px",
        px: { base: "5", md: "10" },
      },
    },
  },
});

export default theme;
