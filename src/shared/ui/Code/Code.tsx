import { ReactNode, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import s from './Code.module.scss';

interface IProps{
    className?: string;
    text: string;
}

export const Code = ({ className, text }: IProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(s.code, {}, [className])}>
            <Button className={s.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <CopyIcon className={s.copyIcon} />
                {/* <Icon Svg={CopyIcon} /> */}
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
