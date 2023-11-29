import { component$ } from "@builder.io/qwik";

interface Props {}

export const RightBlurContainer = component$<Props>(() => {
  return (
    <div class="absolute md:right-0 top-[110px] lg:top-[110px] translate-x-[10%] md:translate-x-[45%] w-[301px] h-[301px] lg:w-[591px] lg:h-[591px] rounded-full min-[576px]:bg-gradient-radial from-bg-radial-center to-radial-out blur-extra">
    </div>
  );
});