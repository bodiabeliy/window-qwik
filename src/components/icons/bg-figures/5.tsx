import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export const BgFigureFive = component$(
  (props: QwikIntrinsicElements["svg"]) => {
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
          d="M0 0H20C31.0457 0 40 8.9543 40 20V42C40 53.0457 31.0457 62 20 62H0V0Z"
          fill="#171717"
        />
      </svg>
    );
  },
);
