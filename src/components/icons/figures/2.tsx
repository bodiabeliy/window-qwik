import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export const FigureTwo = component$((props: QwikIntrinsicElements["svg"]) => {
  return (
    <svg
      width="100%"
      height="70"
      viewBox="0 0 58 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <mask id="path-1-inside-1_2077_114865" fill="white">
        <path d="M0 0H58V70H0V0Z" />
      </mask>
      <path d="M0 0H58V70H0V0Z" fill="black" />
      <path
        class="fill-purple-light"
        d="M0 1H58V-1H0V1ZM58 69H0V71H58V69Z"
        mask="url(#path-1-inside-1_2077_114865)"
      />
    </svg>
  );
});
