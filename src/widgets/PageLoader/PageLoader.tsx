import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

interface IProps{
    className?: string;
}

export const PageLoader = (props: IProps) => {
    const { className } = props;

    return (
        <div className={classNames(s.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
