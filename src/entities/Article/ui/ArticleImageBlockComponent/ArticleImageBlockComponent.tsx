import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import { ArticleImageBlock } from '../../model/types/article';
import s from './ArticleImageBlockComponent.module.scss';

interface IProps{
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(s.articleImageBlockComponent, {}, [className])}>
            <img src={block.src} className={s.img} alt={block.title} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
