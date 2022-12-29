import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Balancer from "react-wrap-balancer";
import { sendContactForm } from "../config/nodemailer";

const initValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  company: "",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState(initValues);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    e.preventDefault();

    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const res = (await sendContactForm(values)) as {
      success: boolean;
      error: string;
      status: number;
    };
    if (res.status !== 200) setError(res.error);
    if (res.success) {
      setValues(initValues);
      setError("");
    }
    setIsLoading(false);
  };

  return (
    <div className="relative bg-white dark:lg:bg-black">
      <div className="absolute h-full w-full lg:inset-0">
        <div className="absolute h-full w-full lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt=""
            fill
            sizes="100vw, (min-width: 1024px) 50vw"
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="lg:pr-8">
          <div className="mx-auto max-w-xl rounded-2xl border border-white border-opacity-30 bg-white bg-opacity-30 p-8 shadow-lg backdrop-blur lg:mx-0 lg:border-0 lg:shadow-none dark:lg:bg-black">
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <h2
                id="contact"
                className="text-3xl font-extrabold tracking-tight sm:text-4xl dark:lg:text-white"
              >
                Let&apos;s work together
              </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                <Balancer>
                  I&apos;d love to hear from you! Send me a message using the
                  form below, or email.
                </Balancer>
              </p>
              <form
                onSubmit={(e) => handleSubmit(e) as unknown}
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className={`block text-sm font-medium ${
                      error && values.firstName.trim() === ""
                        ? "text-red-700 dark:lg:text-red-400"
                        : "text-gray-700 dark:lg:text-gray-300"
                    }`}
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      value={values.firstName}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm sm:text-sm dark:lg:bg-black dark:lg:text-white ${
                        error && values.firstName.trim() === ""
                          ? "focus:border-1 border-2 border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:lg:border-gray-700"
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className={`block text-sm font-medium ${
                      error && values.lastName.trim() === ""
                        ? "text-red-700 dark:lg:text-red-400"
                        : "text-gray-700 dark:lg:text-gray-300"
                    }`}
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      value={values.lastName}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm sm:text-sm dark:lg:bg-black dark:lg:text-white ${
                        error && values.lastName.trim() === ""
                          ? "focus:border-1 border-2 border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:lg:border-gray-700"
                      }`}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${
                      error && values.email.trim() === ""
                        ? "text-red-700 dark:lg:text-red-400"
                        : "text-gray-700 dark:lg:text-gray-300"
                    }`}
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm sm:text-sm dark:lg:bg-black dark:lg:text-white ${
                        error && values.email.trim() === ""
                          ? "focus:border-1 border-2 border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:lg:border-gray-700"
                      }`}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className={`block text-sm font-medium ${
                      error && values.company.trim() === ""
                        ? "text-red-700 dark:lg:text-red-400"
                        : "text-gray-700 dark:lg:text-gray-300"
                    }`}
                  >
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      value={values.company}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm sm:text-sm dark:lg:bg-black dark:lg:text-white ${
                        error && values.company.trim() === ""
                          ? "focus:border-1 border-2 border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:lg:border-gray-700"
                      }`}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:lg:text-gray-300"
                    >
                      Subject
                    </label>
                    <span
                      id="subject-description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      autoComplete="tel"
                      aria-describedby="subject-description"
                      value={values.subject}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:lg:border-gray-700 dark:lg:bg-black dark:lg:text-white"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium ${
                        error &&
                        (values.message.trim() === "" ||
                          values.message.trim().length > 500)
                          ? "text-red-700 dark:lg:text-red-400"
                          : "text-gray-700 dark:lg:text-gray-300"
                      }`}
                    >
                      How can I help you?
                    </label>
                    <span
                      id="how-can-we-help-description"
                      className={`text-sm ${
                        error && values.message.trim().length > 500
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      value={values.message}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm sm:text-sm dark:lg:bg-black dark:lg:text-white ${
                        error &&
                        (values.message.trim() === "" ||
                          values.message.trim().length > 500)
                          ? "focus:border-1 border-2 border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:lg:border-gray-700"
                      }`}
                    />
                  </div>
                </div>
                <div>
                  {error && (
                    <div className="inline-flex w-full items-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-red-600 shadow-sm">
                      {error}
                    </div>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {isLoading ? "Sending..." : "Submit"}
                    <EnvelopeIcon
                      className="ml-2 -mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
