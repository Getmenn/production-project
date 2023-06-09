import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onthrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onthrow}
        >
            {t('Вызвать ошибку')}
        </Button>
    );
};
