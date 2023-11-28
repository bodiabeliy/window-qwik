import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export const FigureOne = component$((props: QwikIntrinsicElements["svg"]) => {
  return (
    <svg
      width="40"
      height="70"
      viewBox="0 0 40 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      preserveAspectRatio="none"
    >
      <mask id="path-1-inside-1_2077_114864" fill="white">
        <path d="M0 24C0 10.7452 10.7452 0 24 0H40V70H24C10.7452 70 0 59.2548 0 46V24Z" />
      </mask>
      <path
        d="M0 24C0 10.7452 10.7452 0 24 0H40V70H24C10.7452 70 0 59.2548 0 46V24Z"
        fill="black"
      />
      <path
        class="fill-purple-light"
        d="M-1 24C-1 10.1929 10.1929 -1 24 -1H40V1H24C11.2975 1 1 11.2975 1 24H-1ZM40 71H24C10.1929 71 -1 59.8071 -1 46H1C1 58.7025 11.2975 69 24 69H40V71ZM24 71C10.1929 71 -1 59.8071 -1 46V24C-1 10.1929 10.1929 -1 24 -1V1C11.2975 1 1 11.2975 1 24V46C1 58.7025 11.2975 69 24 69V71ZM40 0V70V0Z"
        mask="url(#path-1-inside-1_2077_114864)"
      />
    </svg>
  );
});
