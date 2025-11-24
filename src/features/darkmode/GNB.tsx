import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function GNB() {
    const themeContext = useContext(ThemeContext);

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 12px",
                borderBottom: "1px solid #e0e0e0",
                backgroundColor:
                    themeContext.theme === "light" ? "#ffffff" : "#000000",
                color: themeContext.theme === "light" ? "#000000" : "#ffffff",
            }}
        >
            <h1>Dihisoft</h1>
            <button
                onClick={() => {
                    themeContext.setTheme(
                        themeContext.theme === "light" ? "dark" : "light"
                    );
                }}
            >
                {themeContext.theme === "light" ? "다크" : "라이트"} 모드로 전환
            </button>
        </header>
    );
}
