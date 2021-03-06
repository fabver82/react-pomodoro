import React from "react";
import Timer from "./Timer";

export function App() {
    return (
        <div className="App">
            <header>
                <h1>Pomodoro</h1>
            </header>
            <main>
                <Timer initialTime={60} initialStatus="STOP" />
            </main>
        </div>
    );
}
