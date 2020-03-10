import React from 'react';

function Header () {
    return (
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28"/>
                </a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">More</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">About</a>
                            <a class="navbar-item">Jobs</a>
                            <a class="navbar-item">Contact</a>
                            <hr class="navbar-divider" />
                            <a class="navbar-item">Report an issue</a>
                        </div>
                    </div>
                </div>
                <div class="navbar-end">
                    <a class="navbar-item">Contact</a>
                    <a class="navbar-item" style={{marginRight:'1.5em'}}>About me</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;