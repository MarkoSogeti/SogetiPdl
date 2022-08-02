import {  Portal } from "solid-js/web";
import {createSignal, Show} from "solid-js";
import CheckMark from "./CheckMark";


function TimeSlot(props) {


    return (
        <div onClick={props.toggle}>
            <p>{props.time}</p>
            <p className="remainingPlaces">Återstående platser: 2</p>
        </div>
    );
}

export default TimeSlot;
