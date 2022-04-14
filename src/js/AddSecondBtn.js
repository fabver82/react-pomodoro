import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas);
export default function addSecondBtn({addTime, status}) {
    return (
        <button
            className="timer__button"
            onClick={addTime}
            disabled={status === "START" ? true : false}>
            <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
        </button>
    );
}
