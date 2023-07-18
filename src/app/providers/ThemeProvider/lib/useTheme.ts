import { useContext } from 'react';

import { Light } from '../../../../widgets/SideBar/ui/SideBar/SideBar.stories';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult{
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    // @ts-ignore
    document.body.className = theme;
    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
