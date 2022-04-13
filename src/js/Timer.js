import React, {useState, useEffect} from "react";
import {formatTime} from "./formatTime";

export default function Timer({initialTime, initialStatus}) {
    // const [minutes, setMinutes] = useState(1);
    const [initial, setInitial] = useState(initialTime);
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
        // console.log(seconds);
        // setInitial(seconds + 60);
        // console.log(initial);
    };
    const substractTime = () => {
        if (seconds >= 60) {
            setSeconds(seconds - 60);
        } else if (seconds >= 10) {
            setSeconds(seconds - 10);
        } else {
            setSeconds(1);
        }
        setInitial(seconds);
    };
    const resetTime = () => {
        setSeconds(initial);
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
            <button
                onClick={resetTime}
                disabled={status === "START" ? true : false}>
                reset
            </button>
            <button
                onClick={addTime}
                disabled={status === "START" ? true : false}>
                +
            </button>
            <button
                onClick={substractTime}
                disabled={status === "START" ? true : false}>
                -
            </button>
        </div>
    );
}
