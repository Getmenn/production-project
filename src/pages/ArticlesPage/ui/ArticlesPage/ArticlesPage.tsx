import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './ArticlesPage.module.scss';

interface IProps{
    className?: string;
}

const ArticlesPage = ({ className }: IProps) => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(s.articlesPage, {}, [className])}>
            Articles page
        </div>
    );
};

export default memo(ArticlesPage);
