import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';

import s from './ArticleEditPage.module.scss';

interface IProps{
    className?: string;
}

const ArticleEditPage = ({ className }: IProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(s.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('Редактирование статьи с ID =') + id
                : t('Создание новой статьи')}
        </Page>
    );
};

export default ArticleEditPage;
