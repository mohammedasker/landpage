import React from 'react';
import './logo.style.css'

export const Logo = () => {
    return <div className='header-color'>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <a class="navbar-brand" href="#">Epic Chairs</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#features">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#promotion">Promotion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#order">Order It</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
};