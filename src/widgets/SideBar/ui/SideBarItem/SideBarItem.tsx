import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { SideBarItemType } from '../../model/item';
import s from './SideBarItem.module.scss';

interface IProps{
    item: SideBarItemType;
    collapsed?: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: IProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item?.path}
            className={classNames(s.item, { [s.collapsed]: collapsed }, [])}
        >
            <item.Icon className={s.icon} />
            <span className={s.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
