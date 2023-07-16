import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './Text.module.scss';
import { DefaultTFuncReturn } from 'i18next';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface IProps{
    className?: string;
    title?: string | DefaultTFuncReturn;
    text?: string | DefaultTFuncReturn;
    theme?: TextTheme;
}

export const Text = memo((props: IProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(s.text, {}, [className, s[theme]])}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});
