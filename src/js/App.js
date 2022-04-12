import Timer from "./Timer";

export function App() {
    const defaultTime = 60;
    return (
        <div className="App">
            <header>
                <h1>Pomodoro</h1>
            </header>
            <main>
                <Timer timeInSec={defaultTime} />
                <button>+</button>
                <button>-</button>
                <button>start</button>
                <button>reset</button>
            </main>
        </div>
    );
}
