import { component$ } from "@builder.io/qwik";
import LogoMobile from "~/components/img/logo-mobile.png";



interface Props {}


export const ScreenContent = component$<Props>(() => {
    return (
    <>
     <div class="flex  md:hidden h-screen text-center items-center justify-center ">
        <img class="mb-96" src={LogoMobile} alt={"logo"} />
            <h1 class="text-5xl font-bold uppercase absolute bg-gradient-linear from-title-linear-start to-title-linear-stop bg-clip-text text-transparent">
            Hi _)<br/> i am unity
            </h1>
            <h3 class=" text-lg absolute text-zinc-300 bottom-[150px] m-auto">
            AI Unity is UWP Digital's own development for everyday life and business
            </h3>
        </div>
       
    </>
    );
  });