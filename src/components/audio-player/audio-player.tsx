import { component$ } from "@builder.io/qwik";
import { useAudioCtx } from "~/hooks/use-audio-ctx";
import { formatTime } from "~/utils/utils";

import { BtnPlayPause } from "../buttons/btn-play-pause";
import { ProgressBar } from "./progress-bar";
import { usePlayer } from "~/hooks/use-player";

type Props = {
  base64AudioData: string;
  isCustomer?: boolean;
  isAutoplay?: boolean;
};

export const AudioPlayer = component$<Props>((props) => {
  const { base64AudioData, isCustomer, isAutoplay } = props;
  const { playPause, isPlaying, showedTime, audioRef, duration } = usePlayer(
    "data:audio/wav;base64," + base64AudioData,
    isAutoplay,
  );
  const { analyser, freqArray } = useAudioCtx(audioRef);

  const Btn = (
    <div class="h-6 w-6 shrink-0 lg:h-8 lg:w-8">
      <BtnPlayPause isAudioPlaying={isPlaying.value} action$={playPause} />
    </div>
  );

  const Bar = (
    <div class="ml-4 mr-2 h-3 w-24 lg:h-3">
      <ProgressBar
        duration={duration.value}
        isAudioPlaying={isPlaying.value}
        {...{ audioRef, freqArray, analyser }}
      />
    </div>
  );

  const Time = (
    <span class="text-xs font-extralight leading-4 tracking-tighter text-[#DEDEDE]">
      {formatTime(showedTime.value)}
    </span>
  );

  return (
    <div
      class={[
        "flex h-6 w-44 items-center rounded-full lg:h-8 lg:w-48",
        { "justify-end": isCustomer },
        { "bg-gray-bold": !isPlaying.value },
        { "bg-[#4B3D6B]": isPlaying.value },
      ]}
    >
      {isCustomer ? [Time, Bar, Btn] : [Btn, Bar, Time]}
    </div>
  );
});
