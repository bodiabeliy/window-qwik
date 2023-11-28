import { $, Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { ArrowDown } from "../icons";

interface Props {
  ref:Signal<any>;
}

export const BtnScrollDown = component$<Props>(({ ref }) => {
  const moveToDown = $(() => {    
    ref.value.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  });
  return (
    <div class="h-[90px] w-[90%] flex justify-center items-cent absolute bg-gradient-to-t from-gray-bold">
      <button class="" onClick$={moveToDown}>
        <ArrowDown />
    </button>
    </div>
  );
});
