import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

import s from './Page.module.scss';

interface IProps{
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo(({
    className,
    children,
    onScrollEnd,
}: IProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(s.page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
