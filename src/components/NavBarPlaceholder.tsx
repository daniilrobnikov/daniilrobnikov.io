import { Disclosure } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, type HTMLAttributes } from "react";
const ThemeSelection = dynamic(() => import("./ThemeSelection"), {
  ssr: false,
});

const actions = [
  {
    name: "Github",
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
];

export default function NavBarPlaceholder() {
  const [selectionOpen, setSelectionOpen] = useState(false);

  const toggleOpen = () => {
    setSelectionOpen(!selectionOpen);
  };

  return (
    <>
      <Disclosure as="nav" className="absolute top-0 z-10 w-screen">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-end sm:items-stretch">
              <div className="mr-3 block sm:mr-6">
                <ul className="flex space-x-4">
                  <label className="sr-only" id="listbox-theme-label">
                    Theme
                  </label>
                  <button
                    className="rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-lg ring-1 ring-slate-900/10 hover:bg-slate-50 hover:text-black dark:bg-slate-800 dark:text-slate-400 dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-white"
                    type="button"
                    id="listbox-theme-button"
                    aria-haspopup="true"
                    aria-expanded={selectionOpen}
                    aria-labelledby="listbox-theme-label listbox-theme-button"
                    onClick={() => toggleOpen()}
                  >
                    <span className="dark:hidden">
                      <SunIcon
                        className="h-5 w-auto"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </span>
                    <span className="hidden dark:inline">
                      <MoonIcon
                        className="h-5 w-auto"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </span>
                  </button>
                  {selectionOpen && (
                    <ThemeSelection
                      className="right-3 top-full sm:right-6"
                      setSelectionOpen={setSelectionOpen}
                    />
                  )}
                  {actions.map((item) => (
                    <li
                      key={item.name}
                      className="relative rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-lg ring-1 ring-slate-900/10 hover:bg-slate-50 hover:text-black dark:bg-slate-800 dark:text-slate-400  dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-white"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-auto" aria-hidden="true" />
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute inset-0 h-full w-full"
                      ></Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </>
  );
}
