import { Footer } from "./features/darkmode/Footer";
import { GNB } from "./features/darkmode/GNB";
import { Main } from "./features/darkmode/Main";
import {
    ThemeContext,
    ThemeProvider,
    type Theme,
} from "./contexts/ThemeContext";
import { useState } from "react";

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            <ThemeProvider>
                <GNB />
                <Main />
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
