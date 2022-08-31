import { Portal } from "solid-js/web";
import { createSignal, Show } from "solid-js";
import CheckSmall from "./CheckSmall";

function TimeSlot(props) {
  return (
    <div className="time_slot">
      <p>
        {props.time ? new Date(props.time).toLocaleDateString("sv-SE") : ""}{" "}
        17:00
      </p>
      <p className="remainingPlaces">
        Återstående platser: {4 - props.participants}
        <Show when={props.hasUserBooked}>
          <CheckSmall />
        </Show>
      </p>
    </div>
  );
}

export default TimeSlot;
