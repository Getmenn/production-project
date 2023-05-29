import { useState, useMemo, ReactNode } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface IProps{
    children: ReactNode;
}

export const ThemeProvider = ({children}: IProps) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
