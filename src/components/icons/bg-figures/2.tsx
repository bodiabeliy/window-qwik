import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export const BgFigureTwo = component$((props: QwikIntrinsicElements["svg"]) => {
  return (
    <svg
      width="100%"
      height="62"
      viewBox="0 0 54 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <path d="M0 0H54V62H0V0Z" fill="#171717" />
    </svg>
  );
});