import React, { useEffect } from 'react';
import './Nav.scss';
import { Link } from "react-router-dom";
import navStore from '../../State/nav.reducer';
import Logo from '../Logo';

function Nav(props) {
    const [open, setOpen] = React.useState(false);
    const [theme, setTheme] = React.useState('dark');
    // props.setTheme('dark');

    const links = [
        { to: '/', text: 'home', icon: 'roofing' },
        { to: '/about', text: 'about', icon: 'help_outline' },
        { to: '/contact', text: 'contact', icon: 'mail_outline' },
        { to: '/projects', text: 'projects', icon: 'work_outline' }
    ];

    useEffect(() => {
        props.setTheme(theme);
    });

    navStore.subscribe(() => setOpen(navStore.getState().open));

    return (
        <div>
            <nav className={open ? 'open' : null}>
                <div className="nav-content">
                    <Link onClick={() => navStore.dispatch({ type: 'close' })} to="/">
                        <Logo></Logo>
                    </Link>

                    <div className="link-group">
                        {
                            links.map((link, i) =>
                                <Link onClick={() => navStore.dispatch({ type: 'close' })} to={link.to} key={i}>{link.text}</Link>)
                        }

                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                        </button>
                    </div>
                </div>
            </nav>

            <div onClick={() => navStore.dispatch({ type: 'close' })} className={open ? 'filler open' : 'filler'}></div>
        </div>
    );
}

export default Nav;