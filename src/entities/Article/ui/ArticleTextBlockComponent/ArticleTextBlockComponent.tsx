import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.scss';
import { Text } from 'shared/ui/Text/Text';

interface IProps{
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(s.articleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={s.title}/>
            )}
            {block.paragraphs.map((paragraph, index) => (
                <Text key={paragraph} text={paragraph} className={s.paragraph}/>
            ))}
        </div>
    );
});
