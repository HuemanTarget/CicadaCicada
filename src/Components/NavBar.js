import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className="container">
            <a href="#story">Story</a>
            <a href="#actors">Actors</a>
            <a href="#captain">Sea Captain</a>
            <a href="#">Tickets</a>
        </div>
    )
}

export default NavBar;