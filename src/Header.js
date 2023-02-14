import React from 'react';
import './Header.css';
import { useRef } from 'react';

function Headers() {

    return (
        <div className = 'header'>
            <div className = 'header_portfolio'>
                Jay's Portfolio
            </div>
            <div className='header_menus'>
                <div className = 'header_menu'>
                    <div className='nav'>Skills</div>
                </div>
                <div className = 'header_menu'>
                    <div className='nav'>About me</div>
                    </div>
                <div className = 'header_menu'>
                    <div className='nav'>Archiving</div>
                </div>
                <div className = 'header_menu'>
                    <div className='nav'>Career</div>
                </div>
                <div className = 'header_menu'>
                    <div className='nav'>Projects</div>
                </div>
            </div>
        </div>
    );
}

export default Headers;