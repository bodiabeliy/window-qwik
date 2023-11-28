import { noSerialize, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import type { NoSerialize } from "@builder.io/qwik";

export const usePlayer = (url: string, isAutoplay?: boolean) => {
  const audioRef = useSignal<NoSerialize<HTMLAudioElement>>();
  const isPlaying = useSignal(false);
  const showedTime = useSignal(0);
  const duration = useSignal(0);

  useVisibleTask$(async () => {
    const audio = new Audio(url);

    audio.onplay = () => (isPlaying.value = true);
    audio.onended = () => {
      isPlaying.value = false;
      showedTime.value = audio.duration;
    };
    audio.onpause = () => (isPlaying.value = false);
    audio.ontimeupdate = () => {
      showedTime.value = audio.duration - audio.currentTime;
    };
    audio.ondurationchange = () => {
      const checkedDuration = Number.isFinite(audio.duration)
        ? audio.duration
        : 0;

      duration.value = checkedDuration;
      showedTime.value = checkedDuration;
    };

    audio.autoplay = !!isAutoplay;
    audioRef.value = noSerialize(audio);
  });

  const play = $(() => audioRef.value?.play());
  const stop = $(() => audioRef.value?.pause());

  const playPause = $(() => (isPlaying.value ? stop() : play()));

  // const undo = $((offset: number = 10) => {
  //   if (audioRef.value) {
  //     audioRef.value.currentTime -= offset;
  //   }
  // });

  // const redo = $((offset: number = 10) => {
  //   if (audioRef.value) {
  //     audioRef.value.currentTime += offset;
  //   }
  // });

  // const seek = $((newTime: number) => {
  //   if (audioRef.value) {
  //     audioRef.value.currentTime = newTime;
  //   }
  // });

  return {
    playPause,
    play,
    stop,
    isPlaying,
    showedTime,
    duration,
    audioRef,
    // undo, redo, seek,
  };
};
