import { useEffect, useState, type ChangeEvent } from "react";

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

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
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
  };

  return { theme, handleChange };
}
