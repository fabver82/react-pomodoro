import Timer from "./Timer";
import React from "react";
import {useCountdownTimer} from "use-countdown-timer";
import {formatTime} from "./formatTime";

export function App() {
    const defaultTimer = 65;
    const {countdown, start, reset, pause, isRunning} = useCountdownTimer({
        timer: 1000 * defaultTimer,
    });
    let formatCountDown = formatTime(countdown / 1000);
    return (
        <div className="App">
            <header>
                <h1>Pomodoro</h1>
            </header>
            <main>
                <React.Fragment>
                    <div>{formatCountDown}</div>
                    <button onClick={reset}>Reset</button>
                    {isRunning ? (
                        <button onClick={pause}>Pause</button>
                    ) : (
                        <button onClick={start}>Start</button>
                    )}
                </React.Fragment>
            </main>
        </div>
    );
}
