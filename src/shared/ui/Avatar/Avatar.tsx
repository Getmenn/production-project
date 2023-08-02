import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './Avatar.module.scss';

interface IProps{
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo(({
    className,
    src,
    size,
    alt,
}: IProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            style={styles}
            className={classNames(s.avatar, {}, [className])}
            alt={alt}
        />
    );
});
