import { ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Card, CardTheme } from '../Card/Card';
import s from './Tabs.module.scss';

export interface TabItem{
    value: string;
    content: ReactNode;
}

interface IProps{
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = ({
    className,
    tabs,
    value,
    onTabClick,
}: IProps) => {
    const { t } = useTranslation();

    const clickHandle = useCallback((tab: TabItem) => () => { // для прокидывания tab, а не event
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(s.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    className={s.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
