import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './Card.module.scss';

interface IProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
}

export const Card = ({
    className,
    children,
    ...otherProps
}: IProps) => {
    let i;

    return (
        <div
            className={classNames(s.card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
