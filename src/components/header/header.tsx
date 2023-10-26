import { FC } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import useModal from '../../hooks/useModal';
import { createPortal } from 'react-dom';
import { Modal } from '../modal/modal';

export const Header: FC = () => {
    const { isOpen, toggle } = useModal();

    return (
        <header className="header">
            <Link className="header__link" to="/">
                main
            </Link>

            <Link className="header__link" to="/allunits">
                all units
            </Link>

            <button onClick={toggle}>add unit</button>

            {isOpen && createPortal(<Modal toggle={toggle} />, document.body)}
        </header>
    );
};
