import React, {useState, useEffect} from "react";
import {formatTime} from "./formatTime";
import useModal from "./useModal";
import Modal from "./Modal";
import {Progress} from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas);
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
        <div className="timer">
            <Modal
                isShowing={isShowing}
                hide={toggle}
                willRestart={willRestart}
                setWillRestart={setWillRestart}
            />
            <Progress
                type="circle"
                percent={100 - (seconds / initialSeconds) * 100}
                status={status == "BREAK" ? "success" : "active"}
                theme={{
                    error: {
                        symbol: formatTime(seconds),
                        trailColor: "blue",
                        color: "#c30232",
                    },
                    default: {
                        symbol: formatTime(seconds),
                        trailColor: "purple",
                        color: "#c30232",
                    },
                    active: {
                        symbol: formatTime(seconds),
                        trailColor: "purple",
                        color: "#c30232",
                    },
                }}
            />
            <div>
                <button
                    className="timer__button"
                    onClick={toggleStatus}
                    disabled={!willRestart && seconds == 0 ? true : false}>
                    {status == "STOP" || status == "BREAK" ? (
                        <FontAwesomeIcon icon="fa-solid fa-play" />
                    ) : (
                        <FontAwesomeIcon icon="fa-solid fa-stop" />
                    )}
                </button>
                <button
                    className="timer__button"
                    onClick={resetTime}
                    disabled={
                        status === "START" || seconds == initialSeconds
                            ? true
                            : false
                    }>
                    reset
                </button>
                <button
                    className="timer__button"
                    onClick={addTime}
                    disabled={status === "START" ? true : false}>
                    <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                </button>
                <button
                    className="timer__button"
                    onClick={substractTime}
                    disabled={status === "START" ? true : false}>
                    <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
                </button>
            </div>
        </div>
    );
}
