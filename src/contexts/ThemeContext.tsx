import { PropsWithChildren, createContext, useContext, useState } from "react";

// Define your context props
export interface ThemeContextProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
    colors: {
        backgroundColor: string;
        textColor: string;
    };
}

export const themes = {
    light: {
        backgroundColor: "#ffffff",
        textColor: "#000000",
    },
    dark: {
        backgroundColor: "#000000",
        textColor: "#ffffff",
    },
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export default function ThemeContextProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const themeContextValue: ThemeContextProps = {
        theme,
        toggleTheme,
        colors: themes[theme],
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext<ThemeContextProps | undefined>(ThemeContext);

    if (context === undefined) {
        throw new Error("useThemeContext must be used inside ThemeContextProvider!");
    }

    return context;
}