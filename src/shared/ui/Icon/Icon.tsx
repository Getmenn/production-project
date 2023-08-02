import { classNames } from 'shared/lib/classNames/classNames';

import s from './Icon.module.scss';

interface IProps{
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export const Icon = ({ className, Svg }: IProps) => {
    let i;

    return (
        <Svg className={classNames(s.icon, {}, [className])} />
    );
};
