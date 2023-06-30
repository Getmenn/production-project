import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import s from './LoginForm.module.scss';

interface IProps{
    className?: string;
}

export const LoginForm = memo((props: IProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback((val: string) => {
        dispatch(loginActions.setUsername(val));
    }, [dispatch]);

    const onChangePassword = useCallback((val: string) => {
        dispatch(loginActions.setPassword(val));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div
            className={classNames(s.loginForm, {}, [className])}
        >
            { error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                onChange={onChangeUsername}
                placeholder={t('Введите username')}
                value={username}
                autofocus
            />
            <Input
                type="text"
                onChange={onChangePassword}
                placeholder={t('Введите пароль')}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={s.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
