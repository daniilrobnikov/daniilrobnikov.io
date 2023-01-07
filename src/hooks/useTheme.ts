import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("system");
    }
  }, []);

  const selectTheme = (value: string) => {
    setTheme(value);

    if (value === "dark") {
      window.localStorage.setItem("theme", "dark");
    } else if (value === "light") {
      window.localStorage.setItem("theme", "light");
    } else {
      window.localStorage.removeItem("theme");
    }
    if (
      value === "dark" ||
      (value === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (value === "system") {
      document.documentElement.classList.add("system");
    } else {
      document.documentElement.classList.remove("system");
    }
  };

  return { theme, selectTheme };
}
