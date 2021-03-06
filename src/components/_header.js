import React from 'react';

function Header () {
    return (
        <nav className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                {/* <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28"/>
                </a> */}
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item" style={{marginRight:'1.5em'}}>Portofolio</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;