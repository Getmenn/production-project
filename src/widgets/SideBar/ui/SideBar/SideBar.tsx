import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { SideBarItemsList } from '../../model/item';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import s from './SideBar.module.scss';

interface SideBarProps{
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => SideBarItemsList.map((item) => (
        <SideBarItem
            item={item}
            key={item.path}
            collapsed={collapsed}
        />
    )), [collapsed]);

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
