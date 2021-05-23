import React from 'react';
import './Nav.scss';
import { Link } from "react-router-dom";
import Logo from './logo.svg';
import navStore from '../../State/nav.reducer';

class Nav extends React.Component {

    constructor(props) {
        super();
        this.state = {
            open: false
        };

        this.links = [
            { to: '/', text: 'home', icon: 'roofing' },
            { to: '/about', text: 'about', icon: 'help_outline' },
            { to: '/contact', text: 'contact', icon: 'mail_outline' },
            { to: '/projects', text: 'projects', icon: 'work_outline' }
        ];
    }

    componentDidMount() {
        navStore.subscribe(() => this.setState({
            open: navStore.getState().open
        }));
    }

    toggle() {
        this.setState({ open: !this.state.open ? true : false });
    }

    render() {
        return (
            <div>
                <nav className={this.state.open ? 'open' : null}>
                    <div className="nav-content">
                        <Link onClick={() => navStore.dispatch({ type: 'close' })} to="/">
                            <img src={Logo} alt="site logo" />
                        </Link>

                        <div className="link-group">
                            {
                                this.links.map((link, i) =>
                                    <Link onClick={() => navStore.dispatch({ type: 'close' })} to={link.to} key={i}>{link.text}</Link>)
                            }
                        </div>
                    </div>
                </nav>

                <div onClick={() => navStore.dispatch({ type: 'close' })} className={this.state.open ? 'filler open' : 'filler'}></div>
            </div>
        );
    }
}

export default Nav;