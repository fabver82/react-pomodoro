import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export default function SubSecondBtn({
    seconds,
    setSeconds,
    setInitialSeconds,
    status,
}) {
    const substractTime = () => {
        if (seconds > 60) {
            setSeconds(seconds - 60);
            setInitialSeconds(seconds - 60);
            return;
        }
        if (seconds <= 1) {
            return;
        }
        if (seconds <= 60) {
            setSeconds(seconds - 1);
            setInitialSeconds(seconds - 1);
            return;
        }
    };
    return (
        <button
            className="timer__button"
            onClick={substractTime}
            disabled={status === "START" ? true : false}>
            <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
        </button>
    );
}
