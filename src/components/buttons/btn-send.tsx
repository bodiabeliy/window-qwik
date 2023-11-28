import { component$ } from "@builder.io/qwik";
import { IconMicrophone, IconSend } from "../icons";
import type { ButtonHTMLAttributes, PropFunction } from "@builder.io/qwik";

interface BtnOpenWindowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isRecordMode: boolean;
  isRecording: boolean;
  recordingAction: PropFunction<() => void>;
}

export const BtnSend = component$<BtnOpenWindowProps>((props) => {
  const { isRecordMode, isRecording, recordingAction, ...rest } = props;

  return (
    <button
      id="send-button"
      type={isRecordMode ? "button" : "submit"}
      class={[
        "bg-[#9463FE] transition-all",
        {
          "absolute bottom-0 right-0 h-12 w-12 rounded-full": isRecording,
          "relative h-full max-h-12 w-9 rounded-[10px]": !isRecording,
        },
      ]}
      onClick$={recordingAction}
      {...rest}
    >
      <IconSend
        class={[
          "block-center h-[18px] w-4 text-white transition-all duration-300",
          {
            "visible opacity-100": !isRecordMode,
            "invisible opacity-0": isRecordMode,
          },
        ]}
      />

      <IconMicrophone
        class={[
          "block-center text-white transition-all duration-300",
          {
            "visible opacity-100": isRecordMode,
            "invisible opacity-0": !isRecordMode,
            "h-[18px] w-[18px]": !isRecording,
            "h-6 w-6": isRecording,
          },
        ]}
      />
    </button>
  );
});
