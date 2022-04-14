import React from "react";
import Play from "./Play";
import Reset from "./Reset";
import AddSecondBtn from "./AddSecondBtn";
import SubSecondBtn from "./SubSecondBtn";

export default function Settings({
    toggleStatus,
    willRestart,
    seconds,
    setSeconds,
    status,
    initialSeconds,
    setInitialSeconds,
}) {
    return (
        <div>
            <Play
                toggleStatus={toggleStatus}
                willRestart={willRestart}
                seconds={seconds}
                status={status}
            />
            <Reset
                seconds={seconds}
                setSeconds={setSeconds}
                initialSeconds={initialSeconds}
                status={status}
            />
            <AddSecondBtn
                seconds={seconds}
                setSeconds={setSeconds}
                setInitialSeconds={setInitialSeconds}
                status={status}
            />
            <SubSecondBtn
                seconds={seconds}
                setSeconds={setSeconds}
                setInitialSeconds={setInitialSeconds}
                status={status}
            />
        </div>
    );
}
