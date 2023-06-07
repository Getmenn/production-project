import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface IProps{
    className?: string;
}

export const PageError = (props: IProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(s.pageError, {}, [className])}>
            <p>{t('proizoshla-nepredvidennaya-oshibka')}</p>
            <Button onClick={reloadPage}>
                {t('obnovit-stranicu')}
            </Button>
        </div>
    );
};
