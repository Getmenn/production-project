import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends HTMLInputProps{
    type?: string
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        type = 'text',
        className,
        value,
        onChange,
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => setIsFocused(false);
    const onFocus = () => setIsFocused(true);

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(s.inputWrapper, {}, [className])}>
            {placeholder
                && (
                    <div className={s.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )}
            <div className={s.caretWrapper}>
                <input
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={s.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    ref={ref}
                    {...otherProps}
                />
                {isFocused
                    && (
                        <span
                            className={s.caret}
                            style={{ left: `${caretPosition * 9}px` }}
                        />
                    )}
            </div>

        </div>

    );
});
