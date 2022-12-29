import Balancer from "react-wrap-balancer";
import styles from "../styles/home.module.css";

export default function Hero() {
  return (
    <div className="relative z-0 overflow-hidden bg-gray-50 dark:bg-black">
      <div
        className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
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
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
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
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>
      <div className="relative">
        <main className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center px-4">
          <div className="text-center">
            <h1
              id={styles.hero}
              className="text-5xl font-extrabold tracking-normal sm:text-6xl md:text-7xl"
            >
              <span className="inline w-[300px] tracking-tight dark:drop-shadow-[0_1px_3px_rgba(249,250,251,1)]">
                Design.{" "}
              </span>
              &#160;
              <span className="inline tracking-tight dark:drop-shadow-[0_1px_3px_rgba(249,250,251,1)]">
                Develop.{" "}
              </span>
              &#160;
              <span className="inline tracking-tight dark:drop-shadow-[0_1px_3px_rgba(249,250,251,1)]">
                Deploy.{" "}
              </span>
            </h1>
            <div className="mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              <Balancer>
                I&apos;m a full-stack web developer with over 3 years of
                experience in building and deploying a modern SaaS applications
                using the most popular open-source software.
              </Balancer>
            </div>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/daniilrobnikov"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                >
                  Browse works
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-blue-400 md:py-4 md:px-10 md:text-lg"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
