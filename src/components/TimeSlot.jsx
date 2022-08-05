import {  Portal } from "solid-js/web";
import {createSignal, Show} from "solid-js";
import CheckMark from "./CheckMark";


function TimeSlot(props) {


    return (
        <div>
            <p>{props.time ? new Date(props.time).toLocaleDateString() : ''} 18:00</p>
            <p className="remainingPlaces">Återstående platser: {4- props.participants}</p>
        </div>
    );
}

export default TimeSlot;
