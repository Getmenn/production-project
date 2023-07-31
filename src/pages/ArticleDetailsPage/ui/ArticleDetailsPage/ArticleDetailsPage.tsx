import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './ArticleDetailsPage.module.scss';
import { memo } from 'react';

interface IProps{
    className?: string;
}

const ArticleDetailsPage = ({ className }: IProps) => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(s.articleDetailsPage, {}, [className])}>
            Article details page
        </div>
    );
};

export default memo(ArticleDetailsPage);
