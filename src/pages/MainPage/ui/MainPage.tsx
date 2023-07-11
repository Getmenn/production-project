import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <>
            <h1>{t('Главная страница')}</h1>
            <BugButton />
            <Counter />
        </>
    );
});

export default MainPage;
