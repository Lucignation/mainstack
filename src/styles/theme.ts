import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

// 1. Define your design tokens
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#ebf8ff" },
          100: { value: "#bee3f8" },
          200: { value: "#90cdf4" },
          300: { value: "#63b3ed" },
          400: { value: "#4299e1" },
          500: { value: "#2B6CB0" },
          600: { value: "#2c5282" },
          700: { value: "#2a4365" },
          800: { value: "#1A365D" },
          900: { value: "#153E75" },
        },
      },
    },
  },
});

// 2. Create the system instance
const theme = createSystem(defaultConfig, config);

export default theme;
