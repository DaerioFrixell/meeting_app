import './header.scss';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authLinks, commonLinks, noAuthLink } from './headerLinks';
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
            <nav className="header__nav">
                {fakeToken
                    ? (
                        <>
                            {authLinks.map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="header__nav__link"
                                >
                                    {link.title}
                                </Link>
                            ))}

                            <Button
                                className='header__nav__logout'
                                buttonsName='выйти'
                                onClick={logOut}
                            />
                        </>

                    )
                    : (
                        noAuthLink.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="header__nav__link"
                            >
                                {link.title}
                            </Link>
                        ))
                    )
                }
            </nav>
        </header>
    );
};