import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export const FigureThree = component$((props: QwikIntrinsicElements["svg"]) => {
  return (
    <svg
      width="114"
      height="82"
      viewBox="0 0 114 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <g id="center" clip-path="url(#clip0_2077_114860)">
        <path
          class="stroke-purple-light"
          id="Vector"
          d="M-0.5 12.5037L19.0509 12.6481H19.0546C26.3725 12.6481 33.0251 8.94625 39.0197 5.29645L39.0203 5.29605C43.9981 2.25471 49.8308 0.5 56.0777 0.5C62.3246 0.5 68.1573 2.25471 73.1351 5.29605L73.1361 5.29664C79.1402 8.94618 85.783 12.6481 93.1108 12.6481H114.5V81.5H-0.5V12.5037Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_2077_114860">
          <rect width="114" height="82" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
