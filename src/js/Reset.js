import React from "react";

export default function Reset({seconds, initialSeconds, status, resetTime}) {
    return (
        <button
            className="timer__button"
            onClick={resetTime}
            disabled={
                status === "START" || seconds == initialSeconds ? true : false
            }>
            reset
        </button>
    );
}
