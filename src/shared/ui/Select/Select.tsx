import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import s from './Select.module.scss';

export interface SelectOption<T extends string>{
    value: T;
    content: T;
}

interface IProps<T extends string>{
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: IProps<T>) => {
    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={s.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(s.wrapper, mods, [className])}>
            {label && (
                <span className={s.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readonly}
                className={s.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};
