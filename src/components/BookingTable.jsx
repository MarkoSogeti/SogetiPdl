import TimeSlot from "./TimeSlot";
import {createSignal, onMount, Show} from "solid-js";
import CheckMark from "./CheckMark";
import getTimeSlots from "../service/api-service";


function BookingTable() {
    const [data, setData] = createSignal();
    const [name, setName] = createSignal("");
    const [showCheckMark, setShowCheckMark] = createSignal(false);
    const [showPopup, setShow] = createSignal(false);
    const toggle = () => {setShow(!showPopup())}
    const confirmBooking = () => { toggle(); setShowCheckMark(true); setTimeout( () => setShowCheckMark(false), 3000)}

    onMount(async () => {
        await getTimeSlots().then((result) => {setData(result.resources); console.log(result);} )
    });

    return (
        <div className={'box'} >
            <h2>Sogeti PDL Bokning</h2>
            <ul className={` ${showCheckMark() ? "active" : ""}`}>
                {data.time.map((card) =>(
                    <li>
                    <TimeSlot time={card} toggle={toggle}/>
                    </li>
                ))}
            </ul>

            <Show
                when={showPopup()}
            >
                <div class={"popup"} use:clickOutside={() => setShow(false)} >
                    <h1>Boka PADEL</h1>
                    <p>Namn</p>
                    <input
                        type="text"
                        value={name()}
                        onInput={(e) => setName(e.currentTarget.value)}
                        required />
                    <div class="button-wrapper">
                    <button onClick={() => name() ? confirmBooking() : ''}>Boka</button>
                    <button onClick={() => name() ? toggle() : ''}>Avboka</button>
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
