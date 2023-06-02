import { ButtonHTMLAttributes, FC } from "react";
import s from "./Button.module.scss"
import { classNames } from "shared/lib/classNames/classNames"


export enum ThemeButton{
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button 
            className={classNames(s.button, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}