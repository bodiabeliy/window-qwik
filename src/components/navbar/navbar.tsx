import { component$, useSignal } from "@builder.io/qwik";
import UWPLogo from "~/components/img/UWPLogo.png";
import { EditButton } from "../icons";
import { PhoneButton } from "../icons";



interface Props {}

export const Navbar = component$<Props>(() => {
    const isMenuOpen = useSignal<boolean>(false)
    console.log("isMenuOpen", isMenuOpen.value);
    
  return (
    <>
      <nav class="dark:bg-neutral-900">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-6">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={UWPLogo} class="h-8" alt="Flowbite Logo" />
          </a>
          <div class="flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0">
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-rose-500 text-white hover:bg-rose-800 min-[576px]:hidden"
            >
              <PhoneButton />
            </button>
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-rose-500 text-white hover:bg-rose-800 min-[576px]:hidden"
            >
              <EditButton />
            </button>
            <button
                onClick$={()=> isMenuOpen.value = !isMenuOpen.value}
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center p-2 text-sm text-white focus:outline-none dark:text-gray-400 dark:hover:bg-transparent min-[576px]:hidden"
            >
              <svg
                class="h-7 w-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <button class="inline-flex h-[45px] w-[176.33px] items-center justify-start gap-5 rounded-[60px] bg-rose-500 px-[25px] py-[15px] max-[576px]:hidden">
              <div class="text-base font-medium uppercase leading-tight text-white">
                LET’S TALK
              </div>
              <div class="relative h-[15px] w-[16.33px]">
              <EditButton />
              </div>
            </button>
          </div>

          <div class={`${!isMenuOpen.value && "hidden"} w-full md:block md:w-auto z-10`}>
            <ul class="max-[576px]:bg-transparent z-10 mt-4 flex flex-col rounded-lg bg-gray-50 bg-neutral-900 p-6 font-medium text-white rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 max-[576px]:h-screen md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900">
              <li >
                <a
                  href="#"
                  class="block rounded px-3 py-2 text-base hover:text-rose-500 font-medium uppercase leading-tight text-white dark:text-white md:bg-transparent  md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded px-3 py-2 text-base hover:text-rose-500 font-medium uppercase leading-tight text-white dark:text-white md:bg-transparent  md:p-0 md:dark:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded px-3 py-2 text-base hover:text-rose-500 font-medium uppercase leading-tight text-white dark:text-white md:bg-transparent  md:p-0 md:dark:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded px-3 py-2 text-base hover:text-rose-500 font-medium uppercase leading-tight text-white dark:text-white md:bg-transparent  md:p-0 md:dark:text-blue-500"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block rounded px-3 py-2 text-base hover:text-rose-500 font-medium uppercase leading-tight text-white dark:text-white md:bg-transparent  md:p-0 md:dark:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
});
