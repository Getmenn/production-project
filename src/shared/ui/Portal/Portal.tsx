import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IProps{
    children?: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: IProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
