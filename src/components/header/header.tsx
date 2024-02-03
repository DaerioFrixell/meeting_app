import './header.scss';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authLinks, noAuthLink } from './headerLinks';
import { Button } from '../buttons/Button';
import { useAction } from '../../hooks/useAction';


export const Header: FC = () => {
    const { settingLogOut } = useAction();
    const navigate = useNavigate();

    const fakeToken = localStorage.getItem("token");

    const logOut = () => {
        settingLogOut();
        navigate('/auth');
    }

    return (
        <header className="header">
            {fakeToken
                ? (
                    <nav className="header__nav">
                        {authLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="header__link"
                            >
                                {link.title}
                            </Link>
                        ))}

                        <Button
                            buttonsName='выйти'
                            onClick={logOut}
                        />
                    </nav>

                )
                : (
                    noAuthLink.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="header__link"
                        >
                            {link.title}
                        </Link>
                    ))
                )
            }
        </header>
    );
};