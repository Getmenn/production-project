import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

export interface InputProps extends HTMLInputProps{
    type?: string
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        type = 'text',
        className,
        value,
        onChange,
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

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

    const mods: Mods = {
        [s.readonly]: readonly,
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
                    className={classNames(s.input, mods, [])}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    ref={ref}
                    {...otherProps}
                />
                {isCaretVisible
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
