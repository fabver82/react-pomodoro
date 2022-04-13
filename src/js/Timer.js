import React, {useState, useEffect} from "react";
import {formatTime} from "./formatTime";
import useModal from "./useModal";
import Modal from "./Modal";

export default function Timer({initialTime, initialStatus}) {
    const [willRestart, setWillRestart] = useState(false);
    const [initialSeconds, setInitialSeconds] = useState(initialTime);
    const [seconds, setSeconds] = useState(initialTime);
    const [status, setStatus] = useState(initialStatus);
    const {isShowing, toggle} = useModal();
    let interval;

    const toggleStatus = () => {
        if (status === "START") {
            setStatus("STOP");
            clearInterval(interval);
        } else {
            setStatus("START");
            clearInterval(interval);
        }
    };
    const addTime = () => {
        if (seconds < 60) {
            setSeconds(seconds + 1);
            setInitialSeconds(seconds + 1);
            return;
        }
        setSeconds(seconds + 60);
        setInitialSeconds(seconds + 60);
    };
    const substractTime = () => {
        if (seconds > 60) {
            setSeconds(seconds - 60);
            setInitialSeconds(seconds - 60);
            return;
        }
        if (seconds <= 1) {
            return;
        }
        if (seconds <= 60) {
            setSeconds(seconds - 1);
            setInitialSeconds(seconds - 1);
            return;
        }
    };
    const resetTime = () => {
        setSeconds(initialSeconds);
    };

    useEffect(() => {
        interval = setInterval(() => {
            clearInterval(interval);
            if (seconds === 0) {
                setStatus("BREAK");
                !isShowing ? toggle(true) : null;
            }
            if ((seconds !== 0) & (status === "START")) {
                setSeconds(seconds - 1);
            }
        }, 1000);
    }, [seconds, status]);

    useEffect(() => {
        if (status === "BREAK" && willRestart) {
            resetTime();
            setStatus("START");
            setWillRestart(false);
        }
    }, [willRestart]);

    return (
        <div>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                willRestart={willRestart}
                setWillRestart={setWillRestart}
            />
            <div>{formatTime(seconds)}</div>
            <button onClick={toggleStatus}>
                {status == "STOP" || status == "BREAK" ? "start" : "stop"}
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
