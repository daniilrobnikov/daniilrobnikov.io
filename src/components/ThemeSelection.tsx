import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import useTheme from "src/hooks/useTheme";

interface ThemeSelectionProps {
  className: string;
  setSelectionOpen: (value: boolean) => void;
}

export default function ThemeSelection({
  className,
  setSelectionOpen,
}: ThemeSelectionProps) {
  const { theme, selectTheme } = useTheme();

  function handleChange(value: string) {
    selectTheme(value);
    setSelectionOpen(false);
  }

  return (
    <ul
      className={`${className} dark:highlight-white/5 absolute z-50 mt-0 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-0`}
      aria-labelledby="listbox-theme-label"
      aria-orientation="vertical"
      role="listbox"
      tabIndex={0}
    >
      <li
        className={`group flex items-center py-1 px-3 ${
          theme === "light"
            ? "cursor-default text-teal-500"
            : "cursor-pointer hover:bg-slate-50 hover:dark:bg-slate-600/30 dark:hover:text-slate-100"
        }`}
        role="option"
        aria-selected={theme === "light"}
        onClick={() => handleChange("light")}
      >
        <SunIcon
          className={`mr-2 h-7 w-7 p-0.5 ${
            theme === "light"
              ? "stroke-teal-400 dark:stroke-teal-600"
              : "stroke-slate-400 group-hover:stroke-slate-600 dark:stroke-slate-500 dark:group-hover:stroke-slate-300"
          }`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        Light
      </li>
      <li
        className={`group flex items-center py-1 px-3 ${
          theme === "dark"
            ? "cursor-default text-teal-500"
            : "cursor-pointer hover:bg-slate-50 hover:dark:bg-slate-600/30 dark:hover:text-slate-100"
        }`}
        role="option"
        aria-selected={theme === "dark"}
        onClick={() => handleChange("dark")}
      >
        <MoonIcon
          className={`mr-2 h-7 w-7 p-[3px] ${
            theme === "dark"
              ? "stroke-teal-400 dark:stroke-teal-600"
              : "stroke-slate-400 group-hover:stroke-slate-600 dark:stroke-slate-500 dark:group-hover:stroke-slate-300"
          }`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        Dark
      </li>
      <li
        className={`group flex items-center py-1 px-3 ${
          theme === "system"
            ? "cursor-default text-teal-500"
            : "cursor-pointer hover:bg-slate-50 hover:dark:bg-slate-600/30 dark:hover:text-slate-100"
        }`}
        role="option"
        aria-selected={theme === "system"}
        onClick={() => handleChange("system")}
      >
        <ComputerDesktopIcon
          className={`mr-2 h-7 w-7 p-0.5 ${
            theme === "system"
              ? "stroke-teal-400 dark:stroke-teal-600"
              : "stroke-slate-400 group-hover:stroke-slate-600 dark:stroke-slate-500 dark:group-hover:stroke-slate-300"
          }`}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        System
      </li>
    </ul>
  );
}
