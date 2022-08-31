export type AppTheme = typeof dark;

const dark = {
  name: "dark",
  background: "#5e5c64",
  components: {
    background: "#7a7880",
    shadow1: "#504e55",
    shadow2: "#6c6a73",
    active: "#e4ebf5",
    nonActive: "#9baacf",
    primary: "#6d5dfc",
    danger: "#dc3545e6",
    warning: "#ffca2ce6",
  },
  font: {
    regular: "#e4ebf5e6",
    button: "#e4ebf5e6",
    placeholder: "#bec8e4",
    warning: "#5e5c64e6",
    valid: "#49fb4fe6",
    invalid: "#ff9ea6e6",
    logo: "#ff9933",
    logoShadow1: "#fed028",
    logoShadow2: "#880f22",
  },
};

const light = {
  name: "light",
  background: "#e4ebf5",
  components: {
    background: "#dee7f2",
    shadow1: "#c8d0e7",
    shadow2: "#ffffff",
    active: "#e4ebf5",
    nonActive: "#9baacf",
    primary: "#6d5dfc",
    danger: "#dc3545e6",
    warning: "#ffca2ce6",
  },
  font: {
    regular: "#504e55e6",
    button: "#e4ebf5e6",
    placeholder: "#504e55e6",
    warning: "#504e55e6",
    valid: "#198754e6",
    invalid: "#dc3545e6",
    logo: "#ffffff",
    logoShadow1: "#000000",
    logoShadow2: "#6d5dfc",
  },
};

export const Themes: Record<string, AppTheme> = { dark, light };
