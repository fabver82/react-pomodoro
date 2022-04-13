import React, {useState, useEffect} from "react";
import {formatTime} from "./formatTime";
import useModal from "./useModal";
import Modal from "./Modal";

export default function Timer({initialTime, initialStatus}) {
    const [initialSeconds, setInitialSeconds] = useState(initialTime);
    const [seconds, setSeconds] = useState(initialTime);
    const [status, setStatus] = useState(initialStatus);
    const {isShowing, toggle} = useModal();

    const toggleStatus = () => {
        if (status === "START") {
            setStatus("STOP");
        } else {
            setStatus("START");
        }
    };
    const addTime = () => {
        setSeconds(seconds + 60);
        setInitialSeconds(seconds + 60);
        console.log(initialSeconds);
    };
    const substractTime = () => {
        if (seconds >= 60) {
            setSeconds(seconds - 60);
            setInitialSeconds(seconds - 60);
        } else if (seconds >= 10) {
            setSeconds(seconds - 10);
            setInitialSeconds(seconds - 10);
        } else {
            setSeconds(1);
            setInitialSeconds(1);
        }
    };
    const resetTime = () => {
        setSeconds(initialSeconds);
    };

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if (seconds === 0) {
                setStatus("STOP");
                !isShowing ? toggle(true) : null;
            }
            if ((seconds !== 0) & (status === "START")) {
                setSeconds(seconds - 1);
            }
        }, 1000);
    }, [seconds, status]);

    return (
        <div>
            <Modal isShowing={isShowing} hide={toggle} />
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
            <button className="modal-toggle" onClick={toggle}>
                Show modal
            </button>
        </div>
    );
}
