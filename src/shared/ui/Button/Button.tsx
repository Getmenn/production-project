import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButton{
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    children: ReactNode;
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
            type="button"
            className={classNames(s.button, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
