import React from 'react'
import './features.style.css'

export const Features = () => {
    return <section id='features' className='features-section'>
        <h1>Why Epic Chairs</h1>
        <div class="row">
            <div class="col-sm-3">
                <i class="fas fa-magic fa-5x"></i>
                <h3>Great designs</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum asperiores eos consectetur</p>
            </div>
            <div class="col-sm-3">
                <i class="fas fa-cube fa-5x"></i>
                <h3>Great materials</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum asperiores eos consectetur</p>
            </div>
            <div class="col-sm-3">
                <i class="fas fa-dollar-sign fa-5x"></i>
                <h3>Great Budgets</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum asperiores eos consectetur</p>
            </div>
            <div class="col-sm-3">
                <i class="fas fa-headset fa-5x"></i>
                <h3>Great Supports</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum asperiores eos consectetur</p>
            </div>
        </div>
    </section>
};