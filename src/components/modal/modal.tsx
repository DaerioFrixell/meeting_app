import { Button } from '../buttons/Button';
import './modal.scss';
import { FC, ReactNode } from 'react';

type Modal = {
    toggle(): void;
    children: ReactNode;
    title: string;
};
export const Modal: FC<Modal> = ({ toggle, children, title }) => {
    return (
        <div className="modal-bg" onClick={toggle}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <p className="modal__header__title">
                        {title}
                    </p>
                </div>

                <div className="modal__body">
                    {children}
                </div>

                <div className="modal__footer">
                    {/* DO: статика в голом виде опять */}
                    <Button
                        buttonsName={"close"}
                        onClick={toggle}
                    />
                </div>
            </div>
        </div>
    );
};
