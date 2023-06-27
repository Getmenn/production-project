import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import s from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

interface IProps{
    className?: string;
}

export const LoginForm = (props: IProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    }

    return (
        <div
            className={classNames(s.loginForm, {}, [className])}
        >
            <Input 
                type="text" 
                value={value} 
                onChange={onChange}
                placeholder={t('Введите username')}
                autofocus
            />
            <Input 
                type="text"
                placeholder={t('Введите пароль')}
            />
            <Button className={s.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
