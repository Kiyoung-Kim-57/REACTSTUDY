import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type CardProps = {
    title: string;
    description: string;
};

export function Card({ title, description }: CardProps) {
    const themeContext = useContext(ThemeContext);

    return (
        <li
            style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #000000",
                backgroundColor:
                    themeContext.theme === "light" ? "#ffffff" : "#000000",
                color: themeContext.theme === "light" ? "#000000" : "#ffffff",
            }}
        >
            <div
                style={{
                    backgroundColor: "#e0e0e0",
                    width: "300px",
                    height: "200px",
                }}
            ></div>
            <div style={{ padding: 8 }}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
}
