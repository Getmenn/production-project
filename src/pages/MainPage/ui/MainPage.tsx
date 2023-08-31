import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <h1>{t('Главная страница')}</h1>
            {/* <BugButton /> */}
            {/* <Counter /> */}
        </Page>
    );
});

export default MainPage;
