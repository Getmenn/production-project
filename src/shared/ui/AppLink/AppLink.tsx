import { Link, LinkProps } from "react-router-dom";
import s from "./AppLink.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { FC } from "react";

export enum AppLinkTheme{
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className, 
        children, 
        theme = AppLinkTheme.PRIMARY, 
        ...otherProps
    } = props;

    return (
        <Link 
            to={to} 
            className={classNames(s.appLink, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}