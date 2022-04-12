import React, {useState, useEffect} from "react";
import {formatTime} from "./formatTime";
import {useCountdownTimer} from "use-countdown-timer";

export default function Timer({initialTime}) {
    const {countdown, start, reset, pause, isRunning} = useCountdownTimer({
        timer: 1000 * initialTime,
    });

    return (
        <React.Fragment>
            <div>{formatTime(countdown / 1000)}</div>
            <button onClick={reset}>Reset</button>
            {isRunning ? (
                <button onClick={pause}>Pause</button>
            ) : (
                <button onClick={start}>Start</button>
            )}
        </React.Fragment>
    );
}
