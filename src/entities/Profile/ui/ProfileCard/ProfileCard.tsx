import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import s from './ProfileCard.module.scss';

interface IProps{
    className?: string;
}

export const ProfileCard = (props: IProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(s.profileCard, {}, [className])}>
            <div className={s.header}>
                <Text title={t('Профиль')} />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={s.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={s.data}>
                <Input
                    value={data?.first}
                    placeholder={t<string>('Ваше имя')}
                    className={s.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t<string>('Ваша фамилия')}
                    className={s.input}
                />
            </div>
        </div>
    );
};
