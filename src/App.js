import "./App.css";
import { DarkmodeToggleButton, MODE } from "./components/DarkmodeToggle/DarkmodeToggleButton";
import { useState } from "react";

function App() {
    const [mode, setMode] = useState(MODE.DARK);

    const onToggle = () => {
        setMode((prev) => {
            if (prev === MODE.DARK) {
                return MODE.LIGHT;
            }
            return MODE.DARK;
        });
    };

    return (
        <div className={`container`}>
            <div className={`bg dark-bg top ${mode === MODE.DARK ? "show" : ""}`}></div>
            <div className={`bg light-bg bottom ${mode === MODE.LIGHT ? "show" : ""}`}></div>
            <div
                style={{
                    width: "150px",
                    height: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#D4DCEA",
                }}
            >
                <DarkmodeToggleButton onClick={onToggle} mode={mode} />
            </div>
        </div>
    );
}

export default App;

