import { createContext, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    setTheme(theme: Theme): void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {},
});

type ThemeProviderProps = {
    children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
