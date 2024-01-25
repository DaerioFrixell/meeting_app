import './header.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { authLinks, noAuthLink } from './headerLinks';
import { Button } from '../buttons/Button';
import { useAction } from '../../hooks/useAction';


export const Header: FC = () => {
    const { settingLogOut } = useAction()

    const fakeToken = localStorage.getItem("token");

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
                            onClick={() => settingLogOut()}
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