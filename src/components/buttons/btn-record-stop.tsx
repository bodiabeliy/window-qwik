import { component$ } from "@builder.io/qwik";
import type { ButtonHTMLAttributes } from "@builder.io/qwik";
import { IconStopRecord } from "../icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  // isRecordingLocked: boolean;
  // onTouch: QRL<() => void>;
}

export const BtnRecordStop = component$<Props>((props) => {
  return (
    <button {...props} class="h-full w-full">
      <IconStopRecord />
    </button>
  );
});
