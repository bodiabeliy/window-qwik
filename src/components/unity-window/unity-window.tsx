import type { NoSerialize } from "@builder.io/qwik";
import {
  $,
  component$,
  noSerialize,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import {
  speechToSpeechApi,
  speechToTextApi,
  textToSpeechApi,
  textToTextApi,
  transcriptionApi,
} from "~/utils/api";

// import { AudioBlock } from "../audio-block";
import * as btns from "../buttons";
import * as icons from "../icons";
import { MessageRow } from "./message-row";
// import { TextBlock } from "./text-block";
import { BtnScrollDown } from "../buttons/btn-scroll-down";
import { IconShadow } from "../icons/icon-shabow";
import { BgFigureFive } from "../icons/bg-figures/5";
import { BgFigureFour } from "../icons/bg-figures/4";
import { BgFigureThree } from "../icons/bg-figures/3";
import { BgFigureTwo } from "../icons/bg-figures/2";
import { BgFigureOne } from "../icons/bg-figures/1";
import { FigureFive } from "../icons/figures/5";
import { FigureFour } from "../icons/figures/4";
import { FigureThree } from "../icons/figures/3";
import { FigureTwo } from "../icons/figures/2";
import { FigureOne } from "../icons/figures/1";
import { InputBlock } from "./input-block";

export default component$(() => {
  const messages = useStore<{ data: TMessage[] }>({ data: [] });
  const chatRef = useSignal<Element>();

  const isAutoPlay = useSignal(false);
  const isWindowOpened = useSignal(true);
  const isFetching = useSignal(false);
  const currentLang = useSignal<TLangCode>("en_GB");

  const lastElementRef = useSignal<Element | any>();
  const observerRef = useSignal<NoSerialize<IntersectionObserver>>();
  const isDialogListBig = useSignal<boolean>(false);

  // console.log("isDialogListBig", isDialogListBig);

  useVisibleTask$(({track}) => {
    track(() => isDialogListBig.value)
    const callback = function (entries:IntersectionObserverEntry[]) {      
      if (entries[0].intersectionRect.y <=150) {
        isDialogListBig.value = true

      }
      else isDialogListBig.value = false
    };
    observerRef.value = noSerialize(new IntersectionObserver(callback));
    observerRef.value && observerRef.value.observe(lastElementRef.value);
  });

  const sendTextMessage = $(async (message: string) => {
    isFetching.value = true;
    const toFetchData = {
      content: message,
      language_code: currentLang.value,
    };

    messages.data.push({ from: "customer", content: message });

    const [resTextMessage, resBase64AudioData] = await Promise.all([
      textToTextApi(toFetchData),
      textToSpeechApi(toFetchData),
    ]);

    const messageData: TMessage = {
      from: "unity",
      content: resTextMessage
        ? resTextMessage.content
        : "Something's gone wrong ...",
      base64AudioData: resBase64AudioData && resBase64AudioData.content,
    };

    messages.data.push(messageData);

    isFetching.value = false;
  });

  const sendAudioMessage = $(async (base64AudioData: string) => {
    isFetching.value = true;
    const toFetchData = {
      content: base64AudioData,
      language_code: currentLang.value,
    };

    const [resTranscription, resTextMessage, resBase64AudioData] =
      await Promise.all([
        transcriptionApi(toFetchData),
        speechToTextApi(toFetchData),
        speechToSpeechApi(toFetchData),
      ]);

    const customerMessageData: TMessage = {
      from: "customer",
      content: resTranscription
        ? resTranscription.content
        : "Voice recognition failed.",
      base64AudioData: base64AudioData,
    };

    const unityMessageData: TMessage = {
      from: "unity",
      content: resTextMessage
        ? resTextMessage.content
        : "Something's gone wrong ...",
      base64AudioData: resBase64AudioData && resBase64AudioData.content,
    };

    isFetching.value = false;

    messages.data.push(customerMessageData);
    if (!resTranscription) return;
    messages.data.push(unityMessageData);
  });




  useVisibleTask$(({ track }) => {
    track(() => messages.data.length);
  });

  return (
    <main class="relative flex h-screen w-screen items-center justify-center bg-gray-medium">
      <div
        class={[
          "gradient-bd-purple-bg-dark fixed bottom-2 left-1 right-1 max-w-screen-sm rounded-3xl shadow-xl",
          "drop-shadow-lg transition-all duration-500 min-[478px]:bottom-[52px] min-[478px]:left-2 min-[478px]:right-2",
          "min-[620px]:left-auto md:bottom-[30px] md:right-[71px]",

          {
            "max-h-[calc(100%-16px)]": isWindowOpened.value,
            "max-h-[85px]": !isWindowOpened.value,
          },
          `${isWindowOpened.value ? "min-[620px]:w-full  min-[620px]:left-[70px]" :"min-[620px]:w-0 min-[620px]:left-[224px]"}`,
          `${!isWindowOpened.value ? "2xl:left-auto 2xl:bottom-[40px] 2xl:right-[420px]" :"2xl:w-[390px] 2xl:right-[135px]"}`

        ]}
      >
        <div class="relative z-[2] mx-[5px] mt-[5px] flex h-[60px] items-center justify-evenly rounded-[calc(24px-1px)] bg-gray-bold text-white min-[620px]:m-auto min-[620px]:mt-[-6px] min-[620px]:h-[40px] min-[620px]:w-[295px] min-[620px]:translate-y-[-50%]">
          <btns.BtnSound isAutoPlay={isAutoPlay} />
          <btns.BtnUnity />
          <div class="relative h-9 w-[84px]">
            <btns.BtnLanguage
              class="absolute"
              currentLang={currentLang}
              isWindowOpened={isWindowOpened}
              chatRef={chatRef}
            />

            <btns.BtnOpenWindow
              class="absolute right-0"
              isWindowOpened={isWindowOpened}
            />
          </div>
        </div>

        <div class="absolute -left-px -right-px -top-[13px] flex h-[82px] items-end min-[620px]:m-auto min-[620px]:w-[304px] min-[620px]:translate-y-[-50%]">
          <FigureOne class="flex-shrink-0" />
          <FigureTwo class="flex-grow" />
          <FigureThree class="flex-shrink-0" />
          <FigureFour class="flex-grow" />
          <FigureFive class="flex-shrink-0" />
        </div>

        <div class="absolute -top-[17px] left-[0px] right-[0px] mx-[3px] my-[1px] flex h-[81px] items-end min-[620px]:m-auto min-[620px]:w-[295px] min-[620px]:translate-y-[-50%]">
          <BgFigureOne class="flex-shrink-0" />
          <BgFigureTwo class="flex-grow" />
          <BgFigureThree class="mb-[-8px] flex-shrink-0" />
          <BgFigureFour class="flex-grow" />
          <BgFigureFive class="flex-shrink-0" />
        </div>

        <div class={["flex min-h-[220px] max-h-[600px] flex-col justify-end gap-4  px-5 py-3 transition-all", 
            {
              "block": isWindowOpened.value,
              "hidden": !isWindowOpened.value,
            },
        ]}>
          <div
            ref={chatRef}
            class="h-4/5 overflow-y-auto"
          >
            {messages.data.map((el, i) => (
              <MessageRow {...el} key={i} isAutoplay={isAutoPlay.value} />
            ))}

            {isFetching.value && <icons.IconLoader />}
            <div ref={lastElementRef} class="h-[20px] bg-transparent"></div>
          </div>
          {isDialogListBig.value == true && <BtnScrollDown ref={lastElementRef}></BtnScrollDown>}
          {/* {showToDownBtn.value && <BtnScrollDown scrollToDown={scrollToDown} />} */}
        </div>

        <div class={[
          "absolute left-[50%] top-[-40px] z-[-2] translate-x-[-50%] min-[620px]:translate-y-[-40%]",
          {
            "min-[620px]:translate-x-[90%]": !isWindowOpened.value,
          }
        ]}>
          <IconShadow />
        </div>

        <div
          class={[
            "mx-3 mb-4 rounded-xl bg-[#323232] transition-all",
            {
              "block": isWindowOpened.value,
              "hidden": !isWindowOpened.value,
            },
          ]}
        >
          <InputBlock {...{ sendAudioMessage, sendTextMessage, isFetching }} />
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to ChatAI",
  meta: [
    {
      name: "description",
      content: "ChatAI description",
    },
  ],
};
