import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme{
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
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
    size?: ButtonSize,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [s.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(s.button, mods, [s[size], s[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
