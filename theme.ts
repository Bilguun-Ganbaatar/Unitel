import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "brand",
  defaultRadius: "12px",
  radius: {
    md: "12px",
  },
  colors: {
    brand: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b",
    ],
  },
  components: {
    Button: {
      defaultProps: {
        radius: "12px",
      },
    },
    Tooltip: {
      defaultProps: {
        withArrow: true,
        arrowSize: 8,
      },
      styles: {
        tooltip: {
          backgroundColor: "light-dark(var(--mantine-color-white), var(--mantine-color-dark-5))",
          border: "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
          boxShadow: "0 4px 12px light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35))",
          color: "light-dark(var(--mantine-color-gray-9), var(--mantine-color-dark-0))",
        },
        arrow: {
          border: "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
        },
      },
    },
    HoverCard: {
      styles: {
        dropdown: {
          border: "1px solid #ced4da",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    ActionIcon: {
      defaultProps: {
        radius: "12px",
      },
    },
  },
});
