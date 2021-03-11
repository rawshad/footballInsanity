import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header className="jumbotron jumbotron-fluid header">
                <div className="container">
                    <h1 className="display-4 text-center text-uppercase font-weight-bolder">Football Insanity</h1>
                </div>
            </header>
        </div>
    );
};

export default Header;