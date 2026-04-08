function toggleTheme() {
  const root = document.documentElement;
  root.dataset.theme =
    root.dataset.theme === "dark" ? "light" : "dark";
}