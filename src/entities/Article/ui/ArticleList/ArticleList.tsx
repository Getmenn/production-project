import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import s from './ArticleList.module.scss';

interface IProps{
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            view={view}
            className={s.card}
            key={index}
        />
    ));

export const ArticleList = ({
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
}: IProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(s.articleList, {}, [className, s[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={s.card}
            key={article.id}
        />
    );

    return (
        <div className={classNames(s.articleList, {}, [className, s[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
};
