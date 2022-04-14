import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export default function addSecondBtn({
    seconds,
    setSeconds,
    setInitialSeconds,
    status,
}) {
    const addTime = () => {
        if (seconds < 60) {
            setSeconds(seconds + 1);
            setInitialSeconds(seconds + 1);
            return;
        }
        setSeconds(seconds + 60);
        setInitialSeconds(seconds + 60);
    };
    return (
        <button
            className="timer__button"
            onClick={addTime}
            disabled={status === "START" ? true : false}>
            <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
        </button>
    );
}
