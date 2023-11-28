import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import type {
  PropFunction,
  QwikKeyboardEvent,
  QwikMouseEvent,
  QwikTouchEvent,
  Signal,
} from "@builder.io/qwik";

import {
  BtnAddDocument,
  // BtnLockStopRecord,
  BtnRecordLock,
  BtnRecordStop,
  BtnSend,
} from "../buttons";
import { useAudioProcessor } from "~/hooks/use-audio-processor";
import { ArrowLeft, IconRecord } from "../icons";

type TInputBlock = {
  isFetching: Signal<boolean>;
  sendAudioMessage: PropFunction<(base64AudioData: string) => Promise<void>>;
  sendTextMessage: PropFunction<(message: string) => Promise<void>>;
};

export const InputBlock = component$<TInputBlock>((props) => {
  const { sendAudioMessage, sendTextMessage, isFetching } = props;
  const formRef = useSignal<HTMLFormElement>();
  const textareaRef = useSignal<HTMLTextAreaElement>();
  const isRecordMode = useSignal(true);
  const inputtedText = useSignal<string>();
  const isTouchDevice = useSignal(false);
  const isSwipeCancelRec = useSignal(false);
  // const isSwipeLockRec = useSignal(false);
  const isRecordingLocked = useSignal(false);

  const {
    startStopRecording,
    statusRecording,
    clearRecording,
    formattedDuration,
    base64AudioData,
    // analyser,
    // audioUrl
  } = useAudioProcessor({ enableAnalyser: false });

  useVisibleTask$(({ track, cleanup }) => {
    const data = track(() => base64AudioData.value);
    data && sendAudioMessage(data);

    cleanup(() => clearRecording());
  });

  const handleSubmit = $(() => {
    inputtedText.value?.trim() && sendTextMessage(inputtedText.value);
    inputtedText.value = undefined;
  });

  const handleSubmitByKey = $((e: QwikKeyboardEvent<HTMLFormElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      handleSubmit();
    }
  });

  const recordingAction = $(() => {
    isRecordMode.value && startStopRecording();
  });

  useVisibleTask$(({ track }) => {
    track(() => inputtedText.value);

    if (!textareaRef.value) return;

    const height = textareaRef.value.scrollHeight;

    if (height > 26 && height < 30) return;

    if (!inputtedText.value) {
      textareaRef.value.style.height = "28px";
      return;
    }

    textareaRef.value.style.height = height > 140 ? "140px" : height + "px";
  });

  useVisibleTask$(({ track }) => {
    track(() => inputtedText.value);
    isRecordMode.value = !inputtedText.value;
  });

  useVisibleTask$(({ track }) => {
    track(() => isFetching.value);
    if (textareaRef.value && !isFetching.value) {
      textareaRef.value.focus();
    }
  });

  useVisibleTask$(() => {
    isTouchDevice.value = "ontouchstart" in document.documentElement;
  });

  const handleCancelRecordSwipeStart = $(
    (ev: QwikMouseEvent<HTMLFormElement, MouseEvent>, el: HTMLFormElement) => {
      if (
        statusRecording.value === "recording" &&
        el.querySelector("#send-button") === ev.target
      ) {
        isSwipeCancelRec.value = true;
      }
    },
  );

  const handleCancelRecordSwipeEnd = $(() => {
    if (
      statusRecording.value === "recording" &&
      isSwipeCancelRec.value === true
    ) {
      isSwipeCancelRec.value = false;
    }
  });

  const handleCancelRecordSwipeMove = $(
    (ev: QwikMouseEvent<HTMLFormElement, MouseEvent>, el: HTMLFormElement) => {
      if (
        statusRecording.value === "recording" &&
        isSwipeCancelRec.value === true &&
        el.querySelector("#cancel-record") === ev.target
      ) {
        isSwipeCancelRec.value = false;
        clearRecording();
      }
    },
  );

  const test = $(
    (ev: QwikTouchEvent<HTMLButtonElement>, ) =>{
      const touch = ev.changedTouches[0]; // Получаем первую точку касания

      // Определяем элемент, на котором произошло событие touchend
      const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    
      console.log('Touch end on element:', targetElement);}
  );

  return (
    <form
      ref={formRef}
      preventdefault:submit
      class="flex items-end justify-between gap-3 px-3 py-[6px] text-sm leading-5"
      onSubmit$={handleSubmit}
      onKeyDown$={handleSubmitByKey}
      onMouseDown$={handleCancelRecordSwipeStart}
      onMouseMove$={handleCancelRecordSwipeMove}
      onMouseUp$={handleCancelRecordSwipeEnd}
      // onMouseLeave$={handleCancelRecordSwipeEnd}

      
      // onTouchStart$={handleCancelRecordSwipeStart}
      // onTouchEnd$={handleCancelRecordSwipeEnd}
      // onTouchMove$={handleCancelRecordSwipeMove}
    >
      <div
        class={[
          "h-6 transition-all",
          {
            "w-6 shrink-0 opacity-100": statusRecording.value !== "recording",
            "invisible absolute w-0 opacity-0":
              statusRecording.value === "recording",
          },
        ]}
      >
        <BtnAddDocument />
      </div>

      <textarea
        ref={textareaRef}
        autoComplete="off"
        class={[
          "h-7 resize-none overflow-hidden rounded-[10px] bg-gray-dark caret-[#9463FE]",
          "px-[10px] py-1 font-extralight text-gray-light outline-none transition-all",
          {
            "grow opacity-100": statusRecording.value !== "recording",
            "invisible absolute opacity-0":
              statusRecording.value === "recording",
          },
        ]}
        placeholder={isFetching.value ? "Unity is thinking..." : "Сообщение"}
        bind:value={inputtedText}
        disabled={isFetching.value}
      />

      <div
        class={[
          "flex h-7 items-center gap-3 transition-all",
          {
            "grow opacity-100": statusRecording.value === "recording",
            "invisible absolute w-0 opacity-0":
              statusRecording.value !== "recording",
          },
        ]}
      >
        <div class="flex w-[56px] items-center gap-1">
          <IconRecord />
          <span class="text-white">{formattedDuration.value}</span>
        </div>

        <div class="flex text-[#656565]">
          <ArrowLeft id="cancel-record" />
          <span>Влево-отмена</span>
        </div>
      </div>

      <div class="relative flex shrink-0 items-end self-stretch">
        <div
          class={[
            "absolute h-[22px] transition-all",
            {
              "-right-3 w-0": statusRecording.value !== "recording",
              "visible absolute -top-20 right-3 w-[22px]":
                statusRecording.value === "recording",
            },
          ]}
        >
          {!isRecordingLocked.value ? (
            <BtnRecordLock id="lock-button" />
          ) : (
            <BtnRecordStop onTouchEnd$={startStopRecording} />
          )}
        </div>

        <BtnSend
          recordingAction={recordingAction}
          isRecordMode={isRecordMode.value}
          isRecording={statusRecording.value === "recording"}
          onTouchStart$={test}
          onTouchEnd$={test}
          disabled={
            //   !inputtedText.value?.trim() ||
            isFetching.value
          }
        />
      </div>
    </form>
  );
});
