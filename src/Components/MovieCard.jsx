import React from 'react';
import EditButton from './EditButton';
import './Styles/MovieCard.css'

function MovieCard(props) {
    return (
        <div className='movie_card'>
            <div className='movie_card_poster'>
                <img src="https://pbs.twimg.com/media/EsVSi0wXUAE9QhP.jpg:large" alt="" />
            </div>
            <div className='movie_card_info'>
                <div className='movie_card_name'>
                <p className='movie_card_movie_name'>Special Ops 1.5</p>
                <p className='movie_card_ratings'>5.5</p>
                <p className='movie_card_category'>Action</p>
                </div>
                {/* <div className='movie_card_op_btn'>
                    <button>View</button>
                </div> */}
                <EditButton/>
            </div>
        </div>
    );
}

export default MovieCard;