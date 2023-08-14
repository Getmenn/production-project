import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { getSidebarItems } from 'widgets/SideBar/model/selectors/getSidebarItems';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { SideBarItem } from '../SideBarItem/SideBarItem';
import s from './SideBar.module.scss';

interface SideBarProps{
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sideBarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sideBarItemsList.map((item) => (
        <SideBarItem
            item={item}
            key={item.path}
            collapsed={collapsed}
        />
    )), [collapsed, sideBarItemsList]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(s.sideBar, { [s.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={s.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={s.items}>
                {itemsList}
            </div>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang} short={collapsed} />
            </div>
        </div>
    );
});
