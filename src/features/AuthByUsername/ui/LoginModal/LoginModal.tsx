import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface IProps{
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: IProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            className={classNames(s.loginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
