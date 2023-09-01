import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SiGooglemaps } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";

function Form() {
  const [state, handleSubmit] = useForm("xlevqaab");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section class="w-full px-6 py-4 mx-auto bg-transparent">
      <div class="grid grid-cols-1 gap- sm:grid-cols-2 md:grid-cols-3">
        <a
          href="https://goo.gl/maps/43XgsJZnKrmGyhs88"
          class="flex flex-col items-center px-4 py-3 transition-colors duration-300 transform rounded-md text-secondary hover:bg-base-300"
          target="blank"
        >
          <SiGooglemaps className="font-bold text-2xl" />
          <span class="mt-2 text-sm">Dhaka, Bangladesh</span>
        </a>

        <a
          href="https://m.me/iammhador"
          class="flex flex-col items-center px-4 py-3 transition-colors duration-300 transform rounded-md text-secondary hover:bg-base-300"
          target="blank"
        >
          <FaFacebookMessenger className="font-bold text-2xl" />
          <span class="mt-2 text-sm">Messenger</span>
        </a>

        <a
          href="https://wa.me/+8801630995585"
          class="flex flex-col items-center px-4 py-3 transition-colors duration-300 transform rounded-md text-secondary hover:bg-base-300"
          target="blank"
        >
          <IoLogoWhatsapp className="font-bold text-2xl" />
          <span class="mt-2 text-sm">Whatsapp</span>
        </a>
      </div>

      <form onSubmit={handleSubmit} class="mt-6">
        <div class="items-center -mx-2 md:flex">
          <div class="w-full md:mx-2 mx-0">
            <label class="block mb-2 text-sm font-medium text-gray-600 md:mx-auto dark:text-gray-200">
              Name
            </label>

            <input
              class="block w-full px-4 py-2 text-secondary bg-base-200 border rounded-md border-gray-500 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
            />
          </div>

          <div class="w-full md:mx-2 mx-0 mt-4 md:mt-0">
            <label class="block mb-2 text-sm font-medium text-gray-600 md:mx-auto dark:text-gray-200">
              Email
            </label>

            <input
              class="block w-full px-4 py-2 text-secondary bg-base-200 border rounded-md border-gray-500"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        <div class="w-full mt-4">
          <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            class="block w-full h-40 py-2 px-4 text-white bg-base-200 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div class="flex justify-center mt-6">
          <button
            class="px-4 py-2 text-white transition-colors duration-300 transform bg-transparent border-2 border-secondary rounded-md hover:bg-success focus:outline-none focus:bg-gray-600"
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
