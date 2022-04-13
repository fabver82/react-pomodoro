import React, {useState, useEffect} from "react";
import {formatTime} from "./formatTime";

export default function Timer() {
    // const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(5);
    const [hasEnded, setHasEnded] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                //show modal
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);
    }, [seconds]);
    return (
        <div>
            <div>{formatTime(seconds)}</div>
        </div>
    );
}
