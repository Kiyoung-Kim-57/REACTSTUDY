import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Footer() {
    const themeContext = useContext(ThemeContext);

    return (
        <footer
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100px",
                padding: "8px 0px",
                borderTop: "1px solid #e0e0e0",
                backgroundColor:
                    themeContext.theme === "light" ? "#ffffff" : "#000000",
                color: themeContext.theme === "light" ? "#000000" : "#ffffff",
            }}
        >
            Footer
        </footer>
    );
}
