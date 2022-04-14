import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export default function Play({toggleStatus, willRestart, seconds, status}) {
    return (
        <button
            className="timer__button"
            onClick={toggleStatus}
            disabled={!willRestart && seconds == 0 ? true : false}>
            {status == "STOP" || status == "BREAK" ? (
                <FontAwesomeIcon icon="fa-solid fa-play" />
            ) : (
                <FontAwesomeIcon icon="fa-solid fa-stop" />
            )}
        </button>
    );
}
