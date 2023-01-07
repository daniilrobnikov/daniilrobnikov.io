import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import { useState, type HTMLAttributes } from "react";
const ThemeSelection = dynamic(() => import("./ThemeSelection"), {
  ssr: false,
});

const navigation = {
  solutions: [
    { name: "Frontend Development", href: "/frontend" },
    { name: "Backend Development", href: "#" },
    { name: "Web Design", href: "#" },
    { name: "Photoshop", href: "#" },
    { name: "SEO", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Status", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
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
  const [selectionOpen, setSelectionOpen] = useState(false);

  const handleClick = () => {
    setSelectionOpen(!selectionOpen);
  };

  return (
    <footer className="bg-white dark:bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:pt-16 lg:pb-20">
        <div className="mt-8 border-t border-gray-200 py-8 dark:border-gray-800 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-600 hover:text-gray-900 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-600 hover:text-gray-900 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-600 hover:text-gray-900 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-600 hover:text-gray-900 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Language &amp; Currency
            </h3>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label htmlFor="language" className="sr-only">
                  Language
                </label>
                <div className="relative">
                  <select
                    id="language"
                    name="language"
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-white bg-none py-2 pl-3 pr-10 text-base text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-700 dark:bg-black dark:text-gray-100 sm:text-sm"
                    defaultValue="English"
                  >
                    <option>English</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Japanese</option>
                    <option>Spanish</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <ChevronDownIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-4 w-full">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <div className="relative">
                  <select
                    id="currency"
                    name="currency"
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-white bg-none py-2 pl-3 pr-10 text-base text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-700 dark:bg-black dark:text-gray-100 sm:text-sm"
                    defaultValue="AUD"
                  >
                    <option>ARS</option>
                    <option>AUD</option>
                    <option>CAD</option>
                    <option>CHF</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>JPY</option>
                    <option>USD</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <ChevronDownIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 md:flex-row md:justify-between">
          <p className="order-3 mt-0 text-center text-base text-gray-500 md:order-1 md:text-left">
            Copyright &copy; 2023 Daniil Robnikov. All rights reserved.
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
              {selectionOpen && (
                <ThemeSelection
                  className="right-0 group-[:not(.dark):not(.system)]/html:-top-1 group-[.system]/html:-bottom-1 group-[.dark:not(.system)]/html:-bottom-10"
                  setSelectionOpen={setSelectionOpen}
                />
              )}
              <button
                id="theme"
                name="theme"
                className="inline-flex w-36 items-center justify-between rounded-md border border-gray-300 bg-white bg-none py-2 px-3 text-sm text-black focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-700 dark:bg-black dark:text-white"
                onClick={() => handleClick()}
              >
                <p className="pointer-events-none flex h-5 w-fit items-center group-[.system]/html:hidden group-[.dark]/html:hidden">
                  <SunIcon
                    className="mr-3 h-5 w-fit text-gray-400"
                    aria-hidden="true"
                  />
                  Light
                </p>
                <p className="pointer-events-none hidden h-5 w-fit items-center group-[.dark:not(.system)]/html:flex">
                  <MoonIcon
                    aria-hidden="true"
                    className="mr-3 h-5 w-fit text-gray-400"
                  />
                  Dark
                </p>
                <p className="pointer-events-none hidden h-5 w-fit items-center group-[.system]/html:flex">
                  <ComputerDesktopIcon
                    className="mr-3 h-5 w-fit text-gray-400"
                    aria-hidden="true"
                  />
                  System
                </p>
                <ChevronUpDownIcon
                  className="pointer-events-none h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>
            </div>
          </fieldset>
        </div>
      </div>
    </footer>
  );
}