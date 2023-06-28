import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation('main');

    return (
        <>
            <h1>{t('Главная страница')}</h1>
            <BugButton />
            <Counter />
        </>
    );
}
