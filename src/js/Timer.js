import React, {useState, useEffect} from "react";
import {formatTime} from "./formatTime";

export default function Timer({initialTime, initialStatus}) {
    // const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(initialTime);
    const [status, setStatus] = useState(initialStatus);

    const start = () => {
        setStatus("START");
        console.log(status);
    };
    const addTime = () => {
        setSeconds(seconds + 60);
    };
    const substractTime = () => {
        if (seconds >= 60) {
            setSeconds(seconds - 60);
        } else if (seconds >= 10) {
            setSeconds(seconds - 10);
        } else {
            setSeconds(1);
        }
    };

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if (seconds === 0) {
                setStatus("BREAK");
                //show modal
            }
            if ((seconds !== 0) & (status === "START")) {
                setSeconds(seconds - 1);
            }
        }, 1000);
    }, [seconds, status]);

    return (
        <div>
            <div>{formatTime(seconds)}</div>
            <div>{status}</div>
            <button onClick={start} {...(status === "START" ? "disabled" : "")}>
                start
            </button>
            <button onClick={addTime}>+</button>
            <button onClick={substractTime}>-</button>
        </div>
    );
}
