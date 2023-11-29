import { component$ } from "@builder.io/qwik";
import LogoMobile from "~/components/img/logo-mobile.png";



interface Props {}


export const ScreenContent = component$<Props>(() => {
    return (
        <div class="flex  md:hidden h-screen text-center items-center justify-center ">
        <img class="mb-72" src={LogoMobile} alt={"logo"} />
        </div>
    );
  });