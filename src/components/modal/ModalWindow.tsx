
import './modal.scss';
import { staticData } from '../../staticData/staticData';
import { Button } from '../buttons/Button';
import React, { FC } from 'react';
import { ModalWindow_T } from './modalWindow';


export const ModalWindow: FC<ModalWindow_T> = ({ toggle, children, title }) => {
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
                    <Button
                        buttonsName={staticData.buttons.close}
                        onClick={toggle}
                    />
                </div>
            </div>
        </div>
    );
};
