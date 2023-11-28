import { component$ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";

import { IconPlay, IconPause } from "../icons";

interface BtnProps {
  isAudioPlaying: boolean;
  action$: PropFunction<() => void>;
}

export const BtnPlayPause = component$<BtnProps>(
  ({ isAudioPlaying, action$ }) => {
    return (
      <button
        class={[
          "max-w-8 h-full max-h-8 w-full rounded-full",
          { "gradient-bd-white-bg-purple": isAudioPlaying },
          { "gradient-bd-white-bg-dark": !isAudioPlaying },
        ]}
        onClick$={action$}
      >
        {!isAudioPlaying ? <IconPlay /> : <IconPause />}
      </button>
    );
  },
);
