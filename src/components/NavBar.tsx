import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Documentation", href: "/scroll" },
  { name: "Projects", href: "#" },
  { name: "About", href: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <Disclosure
        as="nav"
        className="absolute top-0 z-10 w-screen bg-gray-100 dark:bg-gray-800"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-gray-200 text-black dark:bg-gray-900 dark:text-white"
                              : "text-gray-700 hover:bg-gray-200 hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium",
                          )}
                          aria-current={
                            item.href === router.pathname ? "page" : undefined
                          }
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <Disclosure.Button
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.href === router.pathname
                          ? "bg-gray-200 text-black dark:bg-gray-900 dark:text-white"
                          : "text-gray-700 hover:bg-gray-200 hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium",
                      )}
                      aria-current={
                        item.href === router.pathname ? "page" : undefined
                      }
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* <div className="h-16" /> */}
    </>
  );
}
