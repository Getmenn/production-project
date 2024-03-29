import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import s from './Button.module.scss';

export enum ButtonTheme{
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND ='background',
    BACKGROUND_INVERTED ='backgroundInverted',
}

export enum ButtonSize{
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    children: ReactNode;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.L,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [s.square]: square,
        [s.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(s.button, mods, [s[size], s[theme], className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
