import TimeSlot from "./TimeSlot";
import { createSignal, onMount, Show } from "solid-js";
import CheckMark from "./CheckMark";
import getTimeSlots from "../service/api-service";
import clickOutside from "./click-outside";
import addParticipant from "../service/add-participant-service";
import removeParticipant from "../service/remove-particant-service";

function BookingTable(props) {
  const [data, setData] = createSignal([]);
  const [selected, setSelected] = createSignal("");
  const [showCheckMark, setShowCheckMark] = createSignal(false);
  const [showFailure, setShowFailure] = createSignal(false);
  const [showPopup, setShow] = createSignal(false);
  const toggle = (event, id) => {
    setShow(!showPopup());
    id ? setSelected(id) : "";
  };
  const confirmBooking = () => {
    toggle();
    addParticipant(selected(), props.userInfo)
      .then(() => {
        setShowCheckMark(true);
        getTimeSlots().then((res) => setData(res.filteredResults));
      })
      .catch((e) => {
        setShowFailure(true);
        console.log("Failed to add participant" + e);
      });
    setTimeout(() => {
      setShowCheckMark(false);
    }, 3000);
  };
  const confirmRemove = () => {
    toggle();
    removeParticipant(selected(), props.userInfo)
      .then(() => {
        setShowCheckMark(true);
        getTimeSlots().then((res) => setData(res.filteredResults));
      })
      .catch((e) => {
        setShowFailure(true);
        console.log("Failed to add participant" + e);
      });
    setTimeout(() => {
      setShowCheckMark(false);
    }, 3000);
  };

  onMount(async () => {
    return getTimeSlots().then((res) => {
      console.log(res);
      setData(res.filteredResults);
    });
  });
  return (
    <div className={"box"}>
      <h2>Sogeti PDL Bokning</h2>
      <ul className={` ${showCheckMark() ? "active" : ""}`}>
        {data().map((card) => (
          <li onClick={(event) => toggle(event, card.id)}>
            <TimeSlot
              time={card.time}
              participants={card.participants ? card.participants.length : 0}
              id={card.id}
            />
          </li>
        ))}
      </ul>
      <Show when={showPopup()}>
        <div class={"popup"} use:clickOutside={() => setShow(false)}>
          <h1>Boka PADEL</h1>
          <div class="button-wrapper">
            <button onClick={() => confirmBooking(selected())}>Boka</button>
            <button onClick={() => confirmRemove(selected())}>Avboka</button>
          </div>
        </div>
      </Show>
      <Show when={showCheckMark()}>
        <div class="transition">
          <CheckMark />
        </div>
      </Show>
    </div>
  );
}

export default BookingTable;
