import { ArticleView } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import LinesIcon from 'shared/assets/icons/lines.svg';
import SquareIcon from 'shared/assets/icons/square.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import s from './ArticleViewSelector.module.scss';

interface IProps{
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: SquareIcon,
    },
    {
        view: ArticleView.BIG,
        icon: LinesIcon,
    },
];

export const ArticleViewSelector = ({ className, view, onViewClick }: IProps) => {
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(s.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={index}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [s.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
};
