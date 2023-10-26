import { FC } from 'react';
import './modal.scss';

type Modal = {
    toggle(): void;
};
export const Modal: FC<Modal> = ({ toggle }) => {
    return (
        <div className="modal-bg" onClick={toggle}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div>хэдэр модалки</div>
                <div>тело</div>

                <div>
                    <p>footer</p>
                    <button onClick={toggle}>close</button>
                </div>
            </div>
        </div>
    );
};
