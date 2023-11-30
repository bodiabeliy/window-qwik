import { component$, useSignal } from "@builder.io/qwik";
import UWPLogo from "~/components/img/UWPLogo.png";
import themeSwitcher from "~/components/img/darkTheme.png";

import { EditButton } from "../icons";
import { PhoneButton } from "../icons";



interface Props {}

export const Navbar = component$<Props>(() => {
    const isMenuOpen = useSignal<boolean>(false)
    
  return (
    <>
      <nav class="dark:bg-neutral-900">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-6">
          <div class="flex space-x-3">
          <a
            href="#"
            class="flex items-center"
          >
            <img src={UWPLogo} class="h-8" alt="Flowbite Logo" />
          </a>
          <a
            href="#"
            class="flex items-center"
          >
            <img src={themeSwitcher} class="h-8" alt="Flowbite Logo" />
          </a>
          
          
          </div>
          
          <div class="flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0">
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-rose-500 text-white hover:bg-rose-800 min-[576px]:hidden"
            >
              <PhoneButton />
            </button>
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full  border-2 border-rose-500 text-white hover:bg-rose-800 min-[576px]:hidden"
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
                {!isMenuOpen.value == true ?
                 <path
                 stroke="currentColor"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 d="M1 1h15M1 7h15M1 13h15"
               />:
               <path
               class="rotate-45 translate-x-2"
               stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M1 5 L9 5 M5 1 L5 9"            
               />
               }
               
               
              </svg>
            </button>
            <button class="inline-flex h-[45px] w-[176.33px] items-center justify-start gap-5 rounded-[60px] bg-rose-500 px-[25px] py-[15px] max-[1140px]:hidden">
              <div class="text-base font-medium uppercase leading-tight text-white">
                LET’S TALK
              </div>
              <div class="relative h-[15px] w-[16.33px]">
              <EditButton />
              </div>
            </button>
            <button class="relative max-[576px]:hidden lg:flex items-center  text-white">
            <svg class="lg:ml-[40px]" fill="none" height="24" viewBox="0 0 34 24" width="34" xmlns="http://www.w3.org/2000/svg">
            <path d="M43 0H-2V24H43V0Z" fill="white"></path><path d="M43 0H-2V1.84615H43V0Z" fill="#BB133E"></path>
            <path d="M43 3.69238H-2V5.53854H43V3.69238Z" fill="#BB133E"></path>
            <path d="M43 7.38452H-2V9.23068H43V7.38452Z" fill="#BB133E"></path>
            <path d="M43 11.0769H-2V12.9231H43V11.0769Z" fill="#BB133E"></path>
            <path d="M43 14.7693H-2V16.6154H43V14.7693Z" fill="#BB133E"></path>
            <path d="M43 18.4614H-2V20.3076H43V18.4614Z" fill="#BB133E"></path>
            <path d="M43 22.1538H-2V24H43V22.1538Z" fill="#BB133E"></path>
            <path d="M16 0H-2V12.9231H16V0Z" fill="#002664"></path>
            <path d="M2.71393 1.41882L2.0934 1.87567L2.33042 1.13647L2.71393 1.41882Z" fill="white"></path>
            <path d="M2.44963 1.50601L1.8291 1.04916L2.59612 1.04916L2.44963 1.50601Z" fill="white"></path>
            <path d="M2.28516 1.27753L2.52218 0.53833L2.7592 1.27753H2.28516Z" fill="white"></path>
            <path d="M2.44881 1.04923L3.21582 1.04923L2.59529 1.50608L2.44881 1.04923Z" fill="white"></path>
            <path d="M2.7138 1.13635L2.95082 1.87555L2.3303 1.4187L2.7138 1.13635Z" fill="white"></path><path d="M5.69831 1.41882L5.07778 1.87567L5.3148 1.13647L5.69831 1.41882Z" fill="white"></path><path d="M5.43401 1.50601L4.81348 1.04916L5.58049 1.04916L5.43401 1.50601Z" fill="white"></path><path d="M5.26953 1.27753L5.50655 0.53833L5.74357 1.27753H5.26953Z" fill="white"></path><path d="M5.43318 1.04923L6.2002 1.04923L5.57967 1.50608L5.43318 1.04923Z" fill="white"></path><path d="M5.69818 1.13635L5.9352 1.87555L5.31467 1.4187L5.69818 1.13635Z" fill="white"></path><path d="M8.68268 1.41882L8.06215 1.87567L8.29917 1.13647L8.68268 1.41882Z" fill="white"></path><path d="M8.41838 1.50601L7.79785 1.04916L8.56487 1.04916L8.41838 1.50601Z" fill="white"></path><path d="M8.25391 1.27753L8.49093 0.53833L8.72795 1.27753H8.25391Z" fill="white"></path><path d="M8.41756 1.04923L9.18457 1.04923L8.56404 1.50608L8.41756 1.04923Z" fill="white"></path><path d="M8.68255 1.13635L8.91957 1.87555L8.29905 1.4187L8.68255 1.13635Z" fill="white"></path><path d="M11.6671 1.41882L11.0465 1.87567L11.2835 1.13647L11.6671 1.41882Z" fill="white"></path><path d="M11.4028 1.50601L10.7822 1.04916L11.5492 1.04916L11.4028 1.50601Z" fill="white"></path><path d="M11.2383 1.27753L11.4753 0.53833L11.7123 1.27753H11.2383Z" fill="white"></path><path d="M11.4019 1.04923L12.1689 1.04923L11.5484 1.50608L11.4019 1.04923Z" fill="white"></path><path d="M11.6669 1.13635L11.9039 1.87555L11.2834 1.4187L11.6669 1.13635Z" fill="white"></path><path d="M14.6514 1.41882L14.0309 1.87567L14.2679 1.13647L14.6514 1.41882Z" fill="white"></path><path d="M14.3871 1.50601L13.7666 1.04916L14.5336 1.04916L14.3871 1.50601Z" fill="white"></path><path d="M14.2227 1.27753L14.4597 0.53833L14.6967 1.27753H14.2227Z" fill="white"></path><path d="M14.3863 1.04923L15.1533 1.04923L14.5328 1.50608L14.3863 1.04923Z" fill="white"></path><path d="M14.6513 1.13635L14.8883 1.87555L14.2678 1.4187L14.6513 1.13635Z" fill="white"></path><path d="M1.22174 2.71472L0.601215 3.17157L0.838236 2.43237L1.22174 2.71472Z" fill="white"></path><path d="M0.957443 2.80191L0.336915 2.34506L1.10393 2.34506L0.957443 2.80191Z" fill="white"></path><path d="M0.792969 2.57343L1.02999 1.83423L1.26701 2.57343H0.792969Z" fill="white"></path><path d="M0.95662 2.34488L1.72363 2.34488L1.10311 2.80173L0.95662 2.34488Z" fill="white"></path><path d="M1.22162 2.43225L1.45864 3.17145L0.83811 2.7146L1.22162 2.43225Z" fill="white"></path><path d="M4.20612 2.71472L3.58559 3.17157L3.82261 2.43237L4.20612 2.71472Z" fill="white"></path><path d="M3.94182 2.80191L3.32129 2.34506L4.0883 2.34506L3.94182 2.80191Z" fill="white"></path><path d="M3.77734 2.57343L4.01436 1.83423L4.25138 2.57343H3.77734Z" fill="white"></path><path d="M3.94099 2.34512L4.70801 2.34512L4.08748 2.80198L3.94099 2.34512Z" fill="white"></path><path d="M4.20599 2.43225L4.44301 3.17145L3.82248 2.7146L4.20599 2.43225Z" fill="white"></path><path d="M7.19049 2.71472L6.56997 3.17157L6.80699 2.43237L7.19049 2.71472Z" fill="white"></path><path d="M6.92619 2.80191L6.30567 2.34506L7.07268 2.34506L6.92619 2.80191Z" fill="white"></path><path d="M6.76172 2.57343L6.99874 1.83423L7.23576 2.57343H6.76172Z" fill="white"></path><path d="M6.92537 2.34512L7.69238 2.34512L7.07186 2.80198L6.92537 2.34512Z" fill="white"></path><path d="M7.19037 2.43225L7.42739 3.17145L6.80686 2.7146L7.19037 2.43225Z" fill="white"></path><path d="M10.1749 2.71472L9.55434 3.17157L9.79136 2.43237L10.1749 2.71472Z" fill="white"></path><path d="M9.91057 2.80191L9.29004 2.34506L10.0571 2.34506L9.91057 2.80191Z" fill="white"></path><path d="M9.74609 2.57343L9.98311 1.83423L10.2201 2.57343H9.74609Z" fill="white"></path><path d="M9.90974 2.34512L10.6768 2.34512L10.0562 2.80198L9.90974 2.34512Z" fill="white"></path><path d="M10.1747 2.43225L10.4118 3.17145L9.79123 2.7146L10.1747 2.43225Z" fill="white"></path><path d="M13.1592 2.71472L12.5387 3.17157L12.7757 2.43237L13.1592 2.71472Z" fill="white"></path><path d="M12.8949 2.80191L12.2744 2.34506L13.0414 2.34506L12.8949 2.80191Z" fill="white"></path><path d="M12.7305 2.57343L12.9675 1.83423L13.2045 2.57343H12.7305Z" fill="white"></path><path d="M12.8941 2.34512L13.6611 2.34512L13.0406 2.80198L12.8941 2.34512Z" fill="white"></path><path d="M13.1591 2.43225L13.3961 3.17145L12.7756 2.7146L13.1591 2.43225Z" fill="white"></path><path d="M2.71393 4.01086L2.0934 4.46771L2.33042 3.72851L2.71393 4.01086Z" fill="white"></path><path d="M2.44963 4.09805L1.8291 3.6412L2.59612 3.6412L2.44963 4.09805Z" fill="white"></path><path d="M2.28516 3.86957L2.52218 3.13037L2.7592 3.86957H2.28516Z" fill="white"></path><path d="M2.44881 3.64127L3.21582 3.64127L2.59529 4.09812L2.44881 3.64127Z" fill="white"></path><path d="M2.7138 3.72839L2.95082 4.46759L2.3303 4.01074L2.7138 3.72839Z" fill="white"></path><path d="M5.69831 4.01086L5.07778 4.46771L5.3148 3.72851L5.69831 4.01086Z" fill="white"></path><path d="M5.43401 4.09805L4.81348 3.6412L5.58049 3.6412L5.43401 4.09805Z" fill="white"></path><path d="M5.26953 3.86957L5.50655 3.13037L5.74357 3.86957H5.26953Z" fill="white"></path><path d="M5.43318 3.64127L6.2002 3.64127L5.57967 4.09812L5.43318 3.64127Z" fill="white"></path><path d="M5.69818 3.72839L5.9352 4.46759L5.31467 4.01074L5.69818 3.72839Z" fill="white"></path><path d="M8.68268 4.01086L8.06215 4.46771L8.29917 3.72851L8.68268 4.01086Z" fill="white"></path><path d="M8.41838 4.09805L7.79785 3.6412L8.56487 3.6412L8.41838 4.09805Z" fill="white"></path><path d="M8.25391 3.86957L8.49093 3.13037L8.72795 3.86957H8.25391Z" fill="white"></path><path d="M8.41756 3.64127L9.18457 3.64127L8.56404 4.09812L8.41756 3.64127Z" fill="white"></path><path d="M8.68255 3.72839L8.91957 4.46759L8.29905 4.01074L8.68255 3.72839Z" fill="white"></path><path d="M11.6671 4.01086L11.0465 4.46771L11.2835 3.72851L11.6671 4.01086Z" fill="white"></path><path d="M11.4028 4.09805L10.7822 3.6412L11.5492 3.6412L11.4028 4.09805Z" fill="white"></path><path d="M11.2383 3.86957L11.4753 3.13037L11.7123 3.86957H11.2383Z" fill="white"></path><path d="M11.4019 3.64127L12.1689 3.64127L11.5484 4.09812L11.4019 3.64127Z" fill="white"></path><path d="M11.6669 3.72839L11.9039 4.46759L11.2834 4.01074L11.6669 3.72839Z" fill="white"></path><path d="M14.6514 4.01086L14.0309 4.46771L14.2679 3.72851L14.6514 4.01086Z" fill="white"></path><path d="M14.3871 4.09805L13.7666 3.6412L14.5336 3.6412L14.3871 4.09805Z" fill="white"></path><path d="M14.2227 3.86957L14.4597 3.13037L14.6967 3.86957H14.2227Z" fill="white"></path><path d="M14.3863 3.64127L15.1533 3.64127L14.5328 4.09812L14.3863 3.64127Z" fill="white"></path><path d="M14.6513 3.72839L14.8883 4.46759L14.2678 4.01074L14.6513 3.72839Z" fill="white"></path><path d="M1.22174 5.30676L0.601215 5.76361L0.838236 5.02441L1.22174 5.30676Z" fill="white"></path><path d="M0.957443 5.39395L0.336915 4.9371L1.10393 4.9371L0.957443 5.39395Z" fill="white"></path><path d="M0.792969 5.16547L1.02999 4.42627L1.26701 5.16547H0.792969Z" fill="white"></path><path d="M0.95662 4.93692L1.72363 4.93692L1.10311 5.39377L0.95662 4.93692Z" fill="white"></path><path d="M1.22162 5.02429L1.45864 5.76349L0.83811 5.30664L1.22162 5.02429Z" fill="white"></path><path d="M4.20612 5.30676L3.58559 5.76361L3.82261 5.02441L4.20612 5.30676Z" fill="white"></path><path d="M3.94182 5.39395L3.32129 4.9371L4.0883 4.9371L3.94182 5.39395Z" fill="white"></path><path d="M3.77734 5.16547L4.01436 4.42627L4.25138 5.16547H3.77734Z" fill="white"></path><path d="M3.94099 4.93717L4.70801 4.93717L4.08748 5.39402L3.94099 4.93717Z" fill="white"></path><path d="M4.20599 5.02429L4.44301 5.76349L3.82248 5.30664L4.20599 5.02429Z" fill="white"></path><path d="M7.19049 5.30676L6.56997 5.76361L6.80699 5.02441L7.19049 5.30676Z" fill="white"></path><path d="M6.92619 5.39395L6.30567 4.9371L7.07268 4.9371L6.92619 5.39395Z" fill="white"></path><path d="M6.76172 5.16547L6.99874 4.42627L7.23576 5.16547H6.76172Z" fill="white"></path><path d="M6.92537 4.93717L7.69238 4.93717L7.07186 5.39402L6.92537 4.93717Z" fill="white"></path><path d="M7.19037 5.02429L7.42739 5.76349L6.80686 5.30664L7.19037 5.02429Z" fill="white"></path><path d="M10.1749 5.30676L9.55434 5.76361L9.79136 5.02441L10.1749 5.30676Z" fill="white"></path><path d="M9.91057 5.39395L9.29004 4.9371L10.0571 4.9371L9.91057 5.39395Z" fill="white"></path><path d="M9.74609 5.16547L9.98311 4.42627L10.2201 5.16547H9.74609Z" fill="white"></path><path d="M9.90974 4.93717L10.6768 4.93717L10.0562 5.39402L9.90974 4.93717Z" fill="white"></path><path d="M10.1747 5.02429L10.4118 5.76349L9.79123 5.30664L10.1747 5.02429Z" fill="white"></path><path d="M13.1592 5.30676L12.5387 5.76361L12.7757 5.02441L13.1592 5.30676Z" fill="white"></path><path d="M12.8949 5.39395L12.2744 4.9371L13.0414 4.9371L12.8949 5.39395Z" fill="white"></path><path d="M12.7305 5.16547L12.9675 4.42627L13.2045 5.16547H12.7305Z" fill="white"></path><path d="M12.8941 4.93717L13.6611 4.93717L13.0406 5.39402L12.8941 4.93717Z" fill="white"></path><path d="M13.1591 5.02429L13.3961 5.76349L12.7756 5.30664L13.1591 5.02429Z" fill="white"></path><path d="M2.71393 6.6029L2.0934 7.05975L2.33042 6.32055L2.71393 6.6029Z" fill="white"></path><path d="M2.44963 6.6901L1.8291 6.23324L2.59612 6.23324L2.44963 6.6901Z" fill="white"></path><path d="M2.28516 6.46161L2.52218 5.72241L2.7592 6.46161H2.28516Z" fill="white"></path><path d="M2.44881 6.23331L3.21582 6.23331L2.59529 6.69016L2.44881 6.23331Z" fill="white"></path><path d="M2.7138 6.32043L2.95082 7.05963L2.3303 6.60278L2.7138 6.32043Z" fill="white"></path><path d="M5.69831 6.6029L5.07778 7.05975L5.3148 6.32055L5.69831 6.6029Z" fill="white"></path><path d="M5.43401 6.6901L4.81348 6.23324L5.58049 6.23324L5.43401 6.6901Z" fill="white"></path><path d="M5.26953 6.46161L5.50655 5.72241L5.74357 6.46161H5.26953Z" fill="white"></path><path d="M5.43318 6.23331L6.2002 6.23331L5.57967 6.69016L5.43318 6.23331Z" fill="white"></path><path d="M5.69818 6.32043L5.9352 7.05963L5.31467 6.60278L5.69818 6.32043Z" fill="white"></path><path d="M8.68268 6.6029L8.06215 7.05975L8.29917 6.32055L8.68268 6.6029Z" fill="white"></path><path d="M8.41838 6.6901L7.79785 6.23324L8.56487 6.23324L8.41838 6.6901Z" fill="white"></path><path d="M8.25391 6.46161L8.49093 5.72241L8.72795 6.46161H8.25391Z" fill="white"></path><path d="M8.41756 6.23331L9.18457 6.23331L8.56404 6.69016L8.41756 6.23331Z" fill="white"></path><path d="M8.68255 6.32043L8.91957 7.05963L8.29905 6.60278L8.68255 6.32043Z" fill="white"></path><path d="M11.6671 6.6029L11.0465 7.05975L11.2835 6.32055L11.6671 6.6029Z" fill="white"></path><path d="M11.4028 6.6901L10.7822 6.23324L11.5492 6.23324L11.4028 6.6901Z" fill="white"></path><path d="M11.2383 6.46161L11.4753 5.72241L11.7123 6.46161H11.2383Z" fill="white"></path><path d="M11.4019 6.23331L12.1689 6.23331L11.5484 6.69016L11.4019 6.23331Z" fill="white"></path><path d="M11.6669 6.32043L11.9039 7.05963L11.2834 6.60278L11.6669 6.32043Z" fill="white"></path><path d="M14.6514 6.6029L14.0309 7.05975L14.2679 6.32055L14.6514 6.6029Z" fill="white"></path><path d="M14.3871 6.6901L13.7666 6.23324L14.5336 6.23324L14.3871 6.6901Z" fill="white"></path><path d="M14.2227 6.46161L14.4597 5.72241L14.6967 6.46161H14.2227Z" fill="white"></path><path d="M14.3863 6.23331L15.1533 6.23331L14.5328 6.69016L14.3863 6.23331Z" fill="white"></path><path d="M14.6513 6.32043L14.8883 7.05963L14.2678 6.60278L14.6513 6.32043Z" fill="white"></path><path d="M1.22174 7.8988L0.601215 8.35565L0.838236 7.61645L1.22174 7.8988Z" fill="white"></path><path d="M0.957443 7.98599L0.336915 7.52914L1.10393 7.52914L0.957443 7.98599Z" fill="white"></path><path d="M0.792969 7.75751L1.02999 7.01831L1.26701 7.75751H0.792969Z" fill="white"></path><path d="M0.95662 7.52921L1.72363 7.52921L1.10311 7.98606L0.95662 7.52921Z" fill="white"></path><path d="M1.22162 7.61633L1.45864 8.35553L0.83811 7.89868L1.22162 7.61633Z" fill="white"></path><path d="M4.20612 7.8988L3.58559 8.35565L3.82261 7.61645L4.20612 7.8988Z" fill="white"></path><path d="M3.94182 7.98599L3.32129 7.52914L4.0883 7.52914L3.94182 7.98599Z" fill="white"></path><path d="M3.77734 7.75751L4.01436 7.01831L4.25138 7.75751H3.77734Z" fill="white"></path><path d="M3.94099 7.52921L4.70801 7.52921L4.08748 7.98606L3.94099 7.52921Z" fill="white"></path><path d="M4.20599 7.61633L4.44301 8.35553L3.82248 7.89868L4.20599 7.61633Z" fill="white"></path><path d="M7.19049 7.8988L6.56997 8.35565L6.80699 7.61645L7.19049 7.8988Z" fill="white"></path><path d="M6.92619 7.98599L6.30567 7.52914L7.07268 7.52914L6.92619 7.98599Z" fill="white"></path><path d="M6.76172 7.75751L6.99874 7.01831L7.23576 7.75751H6.76172Z" fill="white"></path><path d="M6.92537 7.52921L7.69238 7.52921L7.07186 7.98606L6.92537 7.52921Z" fill="white"></path><path d="M7.19037 7.61633L7.42739 8.35553L6.80686 7.89868L7.19037 7.61633Z" fill="white"></path><path d="M10.1749 7.8988L9.55434 8.35565L9.79136 7.61645L10.1749 7.8988Z" fill="white"></path><path d="M9.91057 7.98599L9.29004 7.52914L10.0571 7.52914L9.91057 7.98599Z" fill="white"></path><path d="M9.74609 7.75751L9.98311 7.01831L10.2201 7.75751H9.74609Z" fill="white"></path><path d="M9.90974 7.52921L10.6768 7.52921L10.0562 7.98606L9.90974 7.52921Z" fill="white"></path><path d="M10.1747 7.61633L10.4118 8.35553L9.79123 7.89868L10.1747 7.61633Z" fill="white"></path><path d="M13.1592 7.8988L12.5387 8.35565L12.7757 7.61645L13.1592 7.8988Z" fill="white"></path><path d="M12.8949 7.98599L12.2744 7.52914L13.0414 7.52914L12.8949 7.98599Z" fill="white"></path><path d="M12.7305 7.75751L12.9675 7.01831L13.2045 7.75751H12.7305Z" fill="white"></path><path d="M12.8941 7.52921L13.6611 7.52921L13.0406 7.98606L12.8941 7.52921Z" fill="white"></path><path d="M13.1591 7.61633L13.3961 8.35553L12.7756 7.89868L13.1591 7.61633Z" fill="white"></path><path d="M2.71393 9.19494L2.0934 9.65179L2.33042 8.91259L2.71393 9.19494Z" fill="white"></path><path d="M2.44963 9.28214L1.8291 8.82529L2.59612 8.82529L2.44963 9.28214Z" fill="white"></path><path d="M2.28516 9.05365L2.52218 8.31445L2.7592 9.05365H2.28516Z" fill="white"></path><path d="M2.44881 8.82535L3.21582 8.82535L2.59529 9.2822L2.44881 8.82535Z" fill="white"></path><path d="M2.7138 8.91247L2.95082 9.65167L2.3303 9.19482L2.7138 8.91247Z" fill="white"></path><path d="M5.69831 9.19494L5.07778 9.65179L5.3148 8.91259L5.69831 9.19494Z" fill="white"></path><path d="M5.43401 9.28214L4.81348 8.82529L5.58049 8.82529L5.43401 9.28214Z" fill="white"></path><path d="M5.26953 9.05365L5.50655 8.31445L5.74357 9.05365H5.26953Z" fill="white"></path><path d="M5.43318 8.82535L6.2002 8.82535L5.57967 9.2822L5.43318 8.82535Z" fill="white"></path><path d="M5.69818 8.91247L5.9352 9.65167L5.31467 9.19482L5.69818 8.91247Z" fill="white"></path><path d="M8.68268 9.19494L8.06215 9.65179L8.29917 8.91259L8.68268 9.19494Z" fill="white"></path><path d="M8.41838 9.28214L7.79785 8.82529L8.56487 8.82529L8.41838 9.28214Z" fill="white"></path><path d="M8.25391 9.05365L8.49093 8.31445L8.72795 9.05365H8.25391Z" fill="white"></path><path d="M8.41756 8.82535L9.18457 8.82535L8.56404 9.2822L8.41756 8.82535Z" fill="white"></path><path d="M8.68255 8.91247L8.91957 9.65167L8.29905 9.19482L8.68255 8.91247Z" fill="white"></path><path d="M11.6671 9.19494L11.0465 9.65179L11.2835 8.91259L11.6671 9.19494Z" fill="white"></path><path d="M11.4028 9.28214L10.7822 8.82529L11.5492 8.82529L11.4028 9.28214Z" fill="white"></path><path d="M11.2383 9.05365L11.4753 8.31445L11.7123 9.05365H11.2383Z" fill="white"></path><path d="M11.4019 8.82535L12.1689 8.82535L11.5484 9.2822L11.4019 8.82535Z" fill="white"></path><path d="M11.6669 8.91247L11.9039 9.65167L11.2834 9.19482L11.6669 8.91247Z" fill="white"></path><path d="M14.6514 9.19494L14.0309 9.65179L14.2679 8.91259L14.6514 9.19494Z" fill="white"></path><path d="M14.3871 9.28214L13.7666 8.82529L14.5336 8.82529L14.3871 9.28214Z" fill="white"></path><path d="M14.2227 9.05365L14.4597 8.31445L14.6967 9.05365H14.2227Z" fill="white"></path><path d="M14.3863 8.82535L15.1533 8.82535L14.5328 9.2822L14.3863 8.82535Z" fill="white"></path><path d="M14.6513 8.91247L14.8883 9.65167L14.2678 9.19482L14.6513 8.91247Z" fill="white"></path><path d="M1.22174 10.4906L0.601215 10.9474L0.838236 10.2082L1.22174 10.4906Z" fill="white"></path><path d="M0.957443 10.578L0.336915 10.1212L1.10393 10.1212L0.957443 10.578Z" fill="white"></path><path d="M0.792969 10.3496L1.02999 9.61035L1.26701 10.3496H0.792969Z" fill="white"></path><path d="M0.95662 10.121L1.72363 10.121L1.10311 10.5779L0.95662 10.121Z" fill="white"></path><path d="M1.22162 10.2084L1.45864 10.9476L0.83811 10.4907L1.22162 10.2084Z" fill="white"></path><path d="M4.20612 10.4908L3.58559 10.9477L3.82261 10.2085L4.20612 10.4908Z" fill="white"></path><path d="M3.94182 10.578L3.32129 10.1212L4.0883 10.1212L3.94182 10.578Z" fill="white"></path><path d="M3.77734 10.3496L4.01436 9.61035L4.25138 10.3496H3.77734Z" fill="white"></path><path d="M3.94099 10.1212L4.70801 10.1212L4.08748 10.5781L3.94099 10.1212Z" fill="white"></path><path d="M4.20599 10.2084L4.44301 10.9476L3.82248 10.4907L4.20599 10.2084Z" fill="white"></path><path d="M7.19049 10.4908L6.56997 10.9477L6.80699 10.2085L7.19049 10.4908Z" fill="white"></path><path d="M6.92619 10.578L6.30567 10.1212L7.07268 10.1212L6.92619 10.578Z" fill="white"></path><path d="M6.76172 10.3496L6.99874 9.61035L7.23576 10.3496H6.76172Z" fill="white"></path><path d="M6.92537 10.1212L7.69238 10.1212L7.07186 10.5781L6.92537 10.1212Z" fill="white"></path><path d="M7.19037 10.2084L7.42739 10.9476L6.80686 10.4907L7.19037 10.2084Z" fill="white"></path><path d="M10.1749 10.4908L9.55434 10.9477L9.79136 10.2085L10.1749 10.4908Z" fill="white"></path><path d="M9.91057 10.578L9.29004 10.1212L10.0571 10.1212L9.91057 10.578Z" fill="white"></path><path d="M9.74609 10.3496L9.98311 9.61035L10.2201 10.3496H9.74609Z" fill="white"></path><path d="M9.90974 10.1212L10.6768 10.1212L10.0562 10.5781L9.90974 10.1212Z" fill="white"></path><path d="M10.1747 10.2084L10.4118 10.9476L9.79123 10.4907L10.1747 10.2084Z" fill="white"></path><path d="M13.1592 10.4908L12.5387 10.9477L12.7757 10.2085L13.1592 10.4908Z" fill="white"></path><path d="M12.8949 10.578L12.2744 10.1212L13.0414 10.1212L12.8949 10.578Z" fill="white"></path><path d="M12.7305 10.3496L12.9675 9.61035L13.2045 10.3496H12.7305Z" fill="white"></path><path d="M12.8941 10.1212L13.6611 10.1212L13.0406 10.5781L12.8941 10.1212Z" fill="white"></path><path d="M13.1591 10.2084L13.3961 10.9476L12.7756 10.4907L13.1591 10.2084Z" fill="white"></path><path d="M2.71393 11.7867L2.0934 12.2436L2.33042 11.5044L2.71393 11.7867Z" fill="white"></path><path d="M2.44963 11.8739L1.8291 11.4171L2.59612 11.4171L2.44963 11.8739Z" fill="white"></path><path d="M2.28516 11.6454L2.52218 10.9062L2.7592 11.6454H2.28516Z" fill="white"></path><path d="M2.44881 11.4171L3.21582 11.4171L2.59529 11.874L2.44881 11.4171Z" fill="white"></path><path d="M2.7138 11.5043L2.95082 12.2435L2.3303 11.7866L2.7138 11.5043Z" fill="white"></path><path d="M5.69831 11.7867L5.07778 12.2436L5.3148 11.5044L5.69831 11.7867Z" fill="white"></path><path d="M5.43401 11.8739L4.81348 11.4171L5.58049 11.4171L5.43401 11.8739Z" fill="white"></path><path d="M5.26953 11.6454L5.50655 10.9062L5.74357 11.6454H5.26953Z" fill="white"></path><path d="M5.43318 11.4171L6.2002 11.4171L5.57967 11.874L5.43318 11.4171Z" fill="white"></path><path d="M5.69818 11.5043L5.9352 12.2435L5.31467 11.7866L5.69818 11.5043Z" fill="white"></path><path d="M8.68268 11.7867L8.06215 12.2436L8.29917 11.5044L8.68268 11.7867Z" fill="white"></path><path d="M8.41838 11.8739L7.79785 11.4171L8.56487 11.4171L8.41838 11.8739Z" fill="white"></path><path d="M8.25391 11.6454L8.49093 10.9062L8.72795 11.6454H8.25391Z" fill="white"></path><path d="M8.41756 11.4171L9.18457 11.4171L8.56404 11.874L8.41756 11.4171Z" fill="white"></path><path d="M8.68255 11.5043L8.91957 12.2435L8.29905 11.7866L8.68255 11.5043Z" fill="white"></path><path d="M11.6671 11.7867L11.0465 12.2436L11.2835 11.5044L11.6671 11.7867Z" fill="white"></path><path d="M11.4028 11.8739L10.7822 11.4171L11.5492 11.4171L11.4028 11.8739Z" fill="white"></path><path d="M11.2383 11.6454L11.4753 10.9062L11.7123 11.6454H11.2383Z" fill="white"></path><path d="M11.4019 11.4171L12.1689 11.4171L11.5484 11.874L11.4019 11.4171Z" fill="white"></path><path d="M11.6669 11.5043L11.9039 12.2435L11.2834 11.7866L11.6669 11.5043Z" fill="white"></path><path d="M14.6514 11.7867L14.0309 12.2436L14.2679 11.5044L14.6514 11.7867Z" fill="white"></path><path d="M14.3871 11.8739L13.7666 11.4171L14.5336 11.4171L14.3871 11.8739Z" fill="white"></path><path d="M14.2227 11.6454L14.4597 10.9062L14.6967 11.6454H14.2227Z" fill="white"></path><path d="M14.3863 11.4171L15.1533 11.4171L14.5328 11.874L14.3863 11.4171Z" fill="white"></path><path d="M14.6513 11.5043L14.8883 12.2435L14.2678 11.7866L14.6513 11.5043Z" fill="white"></path>
            </svg>US</button>
          </div>

          <div class={`${!isMenuOpen.value && "hidden"} w-full md:block md:w-auto max-[576px]:h-[100%] z-11 bg-gradient-linear from-black to-black z-30`}>
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
