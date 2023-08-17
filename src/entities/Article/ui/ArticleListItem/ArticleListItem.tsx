import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EaeIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';

import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import s from './ArticleListItem.module.scss';

interface IProps{
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = ({
    className,
    article,
    view,
}: IProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.articles_details + article.id);
    }, [article.id, navigate]);

    const types = <Text text={article.type.join(', ')} className={s.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={s.views} />
            <Icon Svg={EaeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(s.articleListItem, {}, [className, s[view]])}>
                <Card className={s.card}>
                    <div className={s.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={s.username} />
                        <Text text={article.createdAt} className={s.date} />
                    </div>
                    <Text title={article.title} className={s.title} />
                    {types}
                    <img src={article.img} className={s.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={s.textBlock} />
                    )}
                    <div className={s.footer}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onOpenArticle}
                        >
                            {t('Читать далее')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(s.articleListItem, {}, [className, s[view]])}>
            <Card className={s.card} onClick={onOpenArticle}>
                <div className={s.imageWrapper}>
                    <img src={article.img} alt={article.title} className={s.img} />
                    <Text text={article.createdAt} className={s.date} />
                </div>
                <div className={s.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={s.title} />
            </Card>
        </div>
    );
};