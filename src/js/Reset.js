import React from "react";

export default function Reset({setSeconds, seconds, initialSeconds, status}) {
    const resetTime = () => {
        setSeconds(initialSeconds);
    };
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
