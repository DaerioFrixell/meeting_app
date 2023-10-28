import { FC } from 'react';
import './modal.scss';

type Modal = {
    toggle(): void;
    children: React.ReactNode;
    title: string;
};
export const Modal: FC<Modal> = ({ toggle, children, title }) => {
    return (
        <div className="modal-bg" onClick={toggle}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <p className="modal__header__title">{title}</p>
                </div>

                <div className="modal__body">{children}</div>

                <div className="modal__footer">
                    <p>footer</p>
                    <button onClick={toggle}>close</button>
                </div>
            </div>
        </div>
    );
};
