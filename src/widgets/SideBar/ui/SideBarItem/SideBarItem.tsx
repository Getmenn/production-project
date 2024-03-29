import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { SideBarItemType } from '../../model/types/sidebar';
import s from './SideBarItem.module.scss';

interface IProps{
    item: SideBarItemType;
    collapsed?: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: IProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

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
