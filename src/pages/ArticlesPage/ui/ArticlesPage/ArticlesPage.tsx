import { ArticleList } from 'entities/Article';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page';

import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import s from './ArticlesPage.module.scss';

interface IProps{
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: IProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = () => {
        console.log('onLoadNextPart');

        dispatch(fetchNextArticlesPage());
    };

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(s.articlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                {/* <ArticleViewSelector view={view} onViewClick={onChangeView} /> */}
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={s.list}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
