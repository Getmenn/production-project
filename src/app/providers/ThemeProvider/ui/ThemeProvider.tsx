import { useState, useMemo, ReactNode } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
// import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../../../../shared/config/theme/ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface IProps{
    children: ReactNode;
    initialTheme?: Theme,
}

export const ThemeProvider = ({ children, initialTheme }: IProps) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
