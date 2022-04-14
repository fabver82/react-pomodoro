import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export default function SubSecondBtn({substractTime, status}) {
    return (
        <button
            className="timer__button"
            onClick={substractTime}
            disabled={status === "START" ? true : false}>
            <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
        </button>
    );
}
