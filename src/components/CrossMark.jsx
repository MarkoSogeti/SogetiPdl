import { Portal } from "solid-js/web";
import { createSignal, Show } from "solid-js";

function CrossMark() {
  return (
    <svg
      class="crossmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle class="crossmark__circle" cx="260" cy="260" r="250" fill="none" />
      <path
        class="cross__path cross__path--right addClass"
        fill="none"
        d="M16,16 l20,20"
      />
      <path
        class="cross__path cross__path--left addClass"
        fill="none"
        d="M16,36 l20,-20"
      />
    </svg>
  );
}

export default CrossMark;
