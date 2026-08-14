(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const yearEl = document.getElementById("year");

  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    root.setAttribute("data-theme", "dark");
  }

  themeToggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  yearEl.textContent = new Date().getFullYear();
})();
