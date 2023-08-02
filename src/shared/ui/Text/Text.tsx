import { DefaultTFuncReturn } from 'i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign{
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize{
    M = 'sizeM',
    L = 'sizeL',
}

interface IProps{
    className?: string;
    title?: string | DefaultTFuncReturn;
    text?: string | DefaultTFuncReturn;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: IProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    return (
        <div className={classNames(s.text, {}, [className, s[theme], s[align], s[size]])}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});
