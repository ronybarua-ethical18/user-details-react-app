import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <a href="/about">About</a>
                    <a href="/company">Company</a>
                    <a href="/blog">Blog</a>
                    <a href="/goal">Goal</a>
                    <a href="/signup">Sign Up</a>
                </ul>
            </nav>
            <h2 className="title">User Information</h2>
        </div>
    );
};

export default Header;