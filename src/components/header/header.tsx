import './header.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { links } from './headerLinks';

export const Header: FC = () => {
    return (
        <header className="header">
            {links.map((link) => (
                <Link key={link.to} to={link.to} className="header__link">
                    {link.title}
                </Link>
            ))}
        </header>
    );
};
