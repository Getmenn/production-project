import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './NotFoundPage.module.scss';

interface IProps{
    className?: string;
}

export const NotFoundPage = (props: IProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(s.notFoundPage, {}, [className])}>
            {t('stranica-ne-naidena')}
        </div>
    );
};
