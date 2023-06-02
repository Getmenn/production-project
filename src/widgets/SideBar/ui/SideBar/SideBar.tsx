import { useState } from "react";
import s from "./SideBar.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";

interface SideBarProps{
    className?: string;
}

export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div 
            className={classNames(s.sideBar, {[s.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang}/>
            </div>
        </div>
    )
}