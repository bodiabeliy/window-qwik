import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export const BgFigureOne = component$((props: QwikIntrinsicElements["svg"]) => {
  return (
    <svg
      width="40"
      height="62"
      viewBox="0 0 40 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M0 20C0 8.9543 8.95431 0 20 0H40V62H20C8.95431 62 0 53.0457 0 42V20Z"
        fill="#171717"
      />
    </svg>
  );
});
