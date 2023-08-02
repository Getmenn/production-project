import { CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './Skeleton.module.scss';

interface IProps{
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = ({
    className,
    height,
    width,
    border,
}: IProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(s.skeleton, {}, [className])}
            style={styles}
        />
    );
};
