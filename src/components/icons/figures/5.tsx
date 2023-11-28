import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export const FigureFive = component$((props: QwikIntrinsicElements["svg"]) => {
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
      <mask id="path-1-inside-1_2077_114863" fill="white">
        <path d="M0 0H16C29.2548 0 40 10.7452 40 24V46C40 59.2548 29.2548 70 16 70H0V0Z" />
      </mask>
      <path
        d="M0 0H16C29.2548 0 40 10.7452 40 24V46C40 59.2548 29.2548 70 16 70H0V0Z"
        fill="black"
      />
      <path
        class="fill-purple-light"
        d="M0 -1H16C29.8071 -1 41 10.1929 41 24H39C39 11.2975 28.7025 1 16 1H0V-1ZM41 46C41 59.8071 29.8071 71 16 71H0V69H16C28.7025 69 39 58.7025 39 46H41ZM0 70V0V70ZM16 -1C29.8071 -1 41 10.1929 41 24V46C41 59.8071 29.8071 71 16 71V69C28.7025 69 39 58.7025 39 46V24C39 11.2975 28.7025 1 16 1V-1Z"
        mask="url(#path-1-inside-1_2077_114863)"
      />
    </svg>
  );
});
