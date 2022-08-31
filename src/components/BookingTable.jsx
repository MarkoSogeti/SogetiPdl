import TimeSlot from "./TimeSlot";
import { createSignal, onMount, Show } from "solid-js";
import CheckMark from "./CheckMark";
import getTimeSlots from "../service/api-service";
import clickOutside from "./click-outside";
import addParticipant from "../service/add-participant-service";
import removeParticipant from "../service/remove-particant-service";
import LoadingIcon from "./LoadingIcon";
import CrossMark from "./CrossMark";

function BookingTable(props) {
  const [data, setData] = createSignal([]);
  const [selected, setSelected] = createSignal("");
  const [showCheckMark, setShowCheckMark] = createSignal(false);
  const [showFailure, setShowFailure] = createSignal(false);
  const [showPopup, setShow] = createSignal(false);
  const [loaded, setLoaded] = createSignal(false);
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
      setShowFailure(false);
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
      setShowFailure(false);
    }, 3000);
  };
  const hasUserBooked = (participants, user) => {
    return participants.includes(user);
  }

  onMount(async () => {
    return getTimeSlots().then((res) => {
      setData(res.filteredResults);
      setLoaded(true);
    });
  });
  return (
    <Show when={loaded()} fallback={<LoadingIcon />}>
      <div className={"box"}>
        <h2>Sogeti PDL Bokning</h2>
        <Show
          when={data().length >= 1}
          fallback={
            <ul>
              <li>
                <p>Ingen tid tillgänglig</p>
              </li>
            </ul>
          }
        >
          <ul className={` ${showCheckMark() ? "active" : ""}`}>
            {data().map((card) => (
              <li onClick={(event) => toggle(event, card.id)}>
                <TimeSlot
                  time={card.time}
                  participants={
                    card.participants ? card.participants.length : 0
                  }
                  id={card.id}
                  hasUserBooked = {hasUserBooked(card.participants, props.userInfo)}
                />
              </li>
            ))}
          </ul>
        </Show>
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
        <Show when={showFailure()}>
          <div class="transition">
            <CrossMark />
          </div>
        </Show>
      </div>
    </Show>
  );
}

export default BookingTable;
