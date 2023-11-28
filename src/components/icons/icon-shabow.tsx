import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export const IconShadow = component$((props: QwikIntrinsicElements["svg"]) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="108"
      height="108"
      viewBox="0 0 108 108"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_f_2306_11925)">
        <circle cx="54" cy="54" r="49" fill="url(#paint0_radial_2306_11925)" />
      </g>
      <defs>
        <filter
          id="filter0_f_2306_11925"
          x="0.558836"
          y="0.558836"
          width="106.882"
          height="106.882"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.22058"
            result="effect1_foregroundBlur_2306_11925"
          />
        </filter>
        <radialGradient
          id="paint0_radial_2306_11925"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(54 54) rotate(90) scale(49)"
        >
          <stop stop-color="#9363FD" />
          <stop offset="1" stop-color="#9363FD" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
});
