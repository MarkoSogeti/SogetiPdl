import TimeSlot from "./TimeSlot";
import {createSignal, onMount, Show} from "solid-js";
import CheckMark from "./CheckMark";
import getTimeSlots from "../service/api-service";
import clickOutside from "./click-outside";
import addParticipant from "../service/add-participant-service";


function BookingTable(props) {

    const [data, setData] = createSignal([]);
    const [selected, setSelected] = createSignal("");
    const [showCheckMark, setShowCheckMark] = createSignal(false);
    const [showPopup, setShow] = createSignal(false);
    const toggle = (event, id) => {setShow(!showPopup()); id ? setSelected(id) : ''}
    const confirmBooking = () => { toggle(); setShowCheckMark(true); addParticipant(selected(), props.userInfo).then(() => getTimeSlots().then((res) => setData(res.result.resources ))); setTimeout( () => {setShowCheckMark(false)}, 3000)}

    onMount(async () => {
        return getTimeSlots().then((res) => { console.log(res); setData(res.result.resources);} )
    });
    return (
        <div className={'box'} >
            <h2>Sogeti PDL Bokning</h2>
            <ul className={` ${showCheckMark() ? "active" : ""}`}>
                {data().map((card) =>(
                    <li onClick={event => toggle(event, card.id)}>
                        <TimeSlot time={card.time} participants={card.participants ? card.participants.length : 0} id={card.id}/>
                    </li>
                ))}
            </ul>
            <Show
                when={showPopup()}
            >
                <div class={"popup"} use:clickOutside={() => setShow(false)} >
                    <h1>Boka PADEL</h1>
                    <div class="button-wrapper">
                        <button onClick={() =>  confirmBooking(selected())}>Boka</button>
                        <button onClick={() =>  toggle()}>Avboka</button>
                    </div>
                </div>
            </Show>
            <Show
                when={showCheckMark()}>
                <div class="transition">
                    <CheckMark />
                    <p>Tiden är bokad!</p>
                </div>
            </Show>
        </div>
    );
}

export default BookingTable;
