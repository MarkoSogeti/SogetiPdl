import { Portal } from "solid-js/web";
import { createSignal, Show } from "solid-js";

function LoadingIcon(props) {
  return (
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingIcon;
