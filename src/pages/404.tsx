import Link from "next/link";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white px-4 py-16 dark:bg-black sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-rose-600 dark:text-teal-600 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6 dark:sm:border-gray-800">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-1 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none dark:bg-teal-600 dark:hover:bg-teal-700"
              >
                Go back
              </button>
              <Link
                href="/"
                className="inline-flex items-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 hover:bg-rose-200 focus:outline-none dark:bg-teal-900 dark:text-teal-300 dark:hover:bg-teal-800"
              >
                Home page
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
