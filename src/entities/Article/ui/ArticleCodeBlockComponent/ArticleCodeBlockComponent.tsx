import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';

import { ArticleCodeBlock } from '../../model/types/article';
import s from './ArticleCodeBlockComponent.module.scss';

interface IProps{
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({ className, block }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(s.articleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
