import React from 'react';
import './Nav.scss';
import { Link } from "react-router-dom";
import navStore from '../../State/nav.reducer';

function Nav(props) {
    const [open, setOpen] = React.useState(false);

    const links = [
        { to: '/', text: 'home', icon: 'roofing' },
        { to: '/about', text: 'about', icon: 'help_outline' },
        { to: '/contact', text: 'contact', icon: 'mail_outline' },
        { to: '/projects', text: 'projects', icon: 'work_outline' }
    ];

    navStore.subscribe(() => setOpen(navStore.getState().open));

    // const toggle = () => this.setState({ open: !this.state.open ? true : false });

    return (
        <div>
            <nav className={open ? 'open' : null}>
                <div className="nav-content">
                    <Link onClick={() => navStore.dispatch({ type: 'close' })} to="/">
                        <img src="https://static.isakgranqvist.com/svg/logo.svg" alt="site logo" />
                    </Link>

                    <div className="link-group">
                        {
                            links.map((link, i) =>
                                <Link onClick={() => navStore.dispatch({ type: 'close' })} to={link.to} key={i}>{link.text}</Link>)
                        }
                    </div>
                </div>
            </nav>

            <div onClick={() => navStore.dispatch({ type: 'close' })} className={open ? 'filler open' : 'filler'}></div>
        </div>
    );
}

export default Nav;