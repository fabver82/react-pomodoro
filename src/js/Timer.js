import React, {useState, useEffect} from "react";
import {formatTime} from "./formatTime";

export default function Timer({initialTime, initialStatus}) {
    // const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(initialTime);
    const [status, setStatus] = useState(initialStatus);

    const toggleStatus = () => {
        if (status === "START") {
            setStatus("STOP");
        } else {
            setStatus("START");
        }
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
                setStatus("STOP");
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
            <button onClick={toggleStatus}>
                {status == "STOP" ? "start" : "stop"}
            </button>
            <button onClick={addTime}>+</button>
            <button onClick={substractTime}>-</button>
        </div>
    );
}
