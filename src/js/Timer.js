import React, {useState, useEffect} from "react";
import {formatTime} from "./formatTime";
import Modal from "./Modal";
import "../modal.css";

export default function Timer({initialTime, initialStatus}) {
    const [seconds, setSeconds] = useState(initialTime);
    const [status, setStatus] = useState(initialStatus);
    const [modal, setModal] = useState(false);

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
    const resetTime = () => {
        setSeconds(initial);
    };

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if (seconds === 0) {
                setStatus("STOP");
                //show modal
                console.log("show modal now");
                setModal(true);
            }
            if ((seconds !== 0) & (status === "START")) {
                setSeconds(seconds - 1);
            }
        }, 1000);
    }, [seconds, status]);

    return (
        <div>
            <Modal show={modal} />
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
