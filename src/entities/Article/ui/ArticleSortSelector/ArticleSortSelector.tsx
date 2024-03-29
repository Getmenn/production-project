import { ArticleSortField } from 'entities/Article/model/types/article';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import { Select, SelectOption } from 'shared/ui/Select/Select';

import s from './ArticleSortSelector.module.scss';

interface IProps{
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
}: IProps) => {
    const { t } = useTranslation('articles');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);

    return (
        <div className={classNames(s.articleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t<string>('Сортировать ПО')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t<string>('по')}
                value={order}
                onChange={onChangeOrder}
                className={s.order}
            />
        </div>
    );
};
