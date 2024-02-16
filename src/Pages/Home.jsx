import React from 'react';
import './Styles/Home.css'
function Home(props) {
    return (
        <div>
            <div id='home_intro_main'>
            <div id='home_info_div'>
                <h3 id='home_hello'>Welcome!</h3>
                <h1 id='user-detail-name'>Propftx</h1>
                <h3 id='home_short_intro'>A movie information platform.</h3>
            </div>
            <div id='home_profile_img'>
                <img src='https://e1.pxfuel.com/desktop-wallpaper/574/383/desktop-wallpaper-movie-poster-mix-of-movies.jpg' className='home-img' alt="ProfileImage" />
            </div>
        </div>
        </div>
    );
}

export default Home;