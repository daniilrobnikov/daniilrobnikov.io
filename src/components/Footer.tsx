import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { type HTMLAttributes } from "react";
import useTheme from "../hooks/useTheme";

const navigation = {
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/daniilrobnikov",
      icon: (props: HTMLAttributes<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/daniilrobnikov",
      icon: (props: HTMLAttributes<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/daniilrobnikov/",
      icon: (props: HTMLAttributes<SVGSVGElement>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          {...props}
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      ),
    },
    {
      name: "Stack Overflow",
      href: "https://stackoverflow.com/users/18722511/daniil-rõbnikov",
      icon: (props: HTMLAttributes<SVGSVGElement>) => (
        <svg
          aria-hidden="true"
          width="32"
          height="37"
          viewBox="0 0 32 37"
          fill="currentColor"
          {...props}
        >
          <path d="M26 33v-9h4v13H0V24h4v9h22Z"></path>
          <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"></path>
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const { theme, handleChange } = useTheme();

  return (
    <footer className="bg-white dark:bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 md:flex-row md:justify-between">
          <p className="order-3 mt-0 text-center text-base text-gray-500 md:order-1 md:text-left">
            Copyright &copy; 2022 Daniil Robnikov. All rights reserved.
          </p>
          <div className="order-2 flex space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <fieldset className="order-1 md:order-3">
            <label htmlFor="theme" className="sr-only">
              Theme
            </label>
            <div className="relative inline-flex items-center">
              {theme === "dark" ? (
                <MoonIcon
                  className="theme-dark pointer-events-none absolute left-0 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              ) : theme === "light" ? (
                <SunIcon
                  className="pointer-events-none absolute left-0 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              ) : (
                <ComputerDesktopIcon
                  className="pointer-events-none absolute left-0 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              )}
              <select
                id="theme"
                name="theme"
                className="appearance-none rounded-md border border-gray-300 bg-white bg-none py-2 px-10 text-base text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-700 dark:bg-black dark:text-gray-100 sm:text-sm"
                value={theme}
                onChange={(e) => handleChange(e)}
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="system">System</option>
              </select>
              <ChevronUpDownIcon
                className="pointer-events-none absolute right-0 mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </fieldset>
        </div>
      </div>
    </footer>
  );
}
