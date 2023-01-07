import styles from "@/styles/Hero.module.css";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <div className="relative z-0 overflow-hidden bg-gray-50 dark:bg-black">
      <div
        className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full -translate-y-3/4 translate-x-1/4 transform  md:-translate-y-1/2 lg:translate-x-1/2"
            width={404}
            height={950}
            fill="none"
            viewBox="0 0 404 950"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200 dark:text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={950}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
          <svg
            className="absolute left-full translate-y-1/4 -translate-x-1/4 transform lg:-translate-x-1/2"
            width={404}
            height={1272}
            fill="none"
            viewBox="0 0 404 1272"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200 dark:text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={1272}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
        </div>
      </div>
      <div className="relative">
        <main className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4">
          <div className="text-center">
            <h1
              id={styles.hero}
              className="relative flex flex-col gap-2 text-6xl font-extrabold tracking-tighter sm:flex-row sm:gap-7 sm:text-5xl md:text-7xl"
            >
              <span className="h-[calc(1em+6px)] bg-gradient-to-r from-[#ffa54d] to-[#f07bc5] tracking-tight">
                Design.
              </span>
              <span className="h-[calc(1em+6px)] bg-gradient-to-r from-[#43aeff] to-[#194bb5] tracking-tight">
                Develop.
              </span>
              <span className="h-[calc(1em+6px)] bg-gradient-to-r from-[#de035e] to-[#c084fc] tracking-tight">
                Deploy.
              </span>
              <div className="absolute inset-0 h-[110%] text-gray-50 dark:text-black" />
            </h1>
            <div className="mx-auto mt-5 text-base text-gray-500 md:max-w-3xl md:text-xl">
              <Balancer>
                I&apos;m a full stack developer with over 3 years of experience
                building and deploying modern SaaS applications using the most
                popular open-source software.
              </Balancer>
            </div>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="https://github.com/daniilrobnikov"
                  target="_blank"
                  rel="noreferrer"
                  id="from-teal-500/90 via-teal-700 to-teal-800/80"
                  className="flex w-full items-center justify-center rounded-md bg-teal-900 bg-gradient-to-r from-teal-400/90 via-teal-600 to-teal-700/80 px-8 py-3 text-base font-medium text-white/90 hover:from-teal-500/90 hover:via-teal-700 hover:to-teal-800/80 hover:text-white dark:bg-teal-900/10 dark:from-teal-600/90 dark:via-teal-800 dark:to-teal-900/80 dark:text-white/80 dark:hover:from-teal-500/90 dark:hover:via-teal-700 dark:hover:to-teal-800/80 dark:hover:text-white/90 md:py-4 md:px-10 md:text-lg"
                >
                  Browse works
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-teal-600 hover:bg-gray-50 hover:text-teal-700 dark:bg-gray-900 dark:text-teal-500  dark:hover:bg-sky-600/30 dark:hover:text-teal-400/90 md:py-4 md:px-10 md:text-lg"
                >
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
