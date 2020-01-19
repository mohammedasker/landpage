import React from 'react'
import './video.style.css'

export const Video = () => {
    return <div id="promotion" className='video-section'>
        <h1>And the biggest reason to own this chair is...</h1>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/B1VvJhquVWU" frameborder="0"></iframe>
        </div>
    </div>
}