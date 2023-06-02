import { Theme, useTheme } from "app/providers/ThemeProvider";
import s from "./ThemeSwitcher.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import LightIcon from 'shared/assets/icons/sun.svg'
import DarkIcon from 'shared/assets/icons/moon.svg'
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps{
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    
    const {theme, toggleTheme} = useTheme();


    return (
        <Button 
            theme={ThemeButton.CLEAR}
            className={classNames(s.themeSwitcher, {}, [className])} 
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon />}
        </Button>
    )
}