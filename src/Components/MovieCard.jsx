import React from 'react';
import EditButton from './EditButton';
import './Styles/MovieCard.css'

function MovieCard({elem,Token,Role,getData}) {
    return (
        <div className='movie_card'>
            <div className='movie_card_poster'>
                <img src={elem.Posters} alt="" />
            </div>
            <div className='movie_card_info'>
                <div className='movie_card_name'>
                <p className='movie_card_movie_name'>{elem.Name}</p>
                <p className='movie_card_ratings'>{elem.Ratings}</p>
                <p className='movie_card_category'>{elem.Category}</p>
                </div>
                {/* <div className='movie_card_op_btn'>
                    <button>View</button>
                </div> */}
                {
                    Role === 'Admin' ? <EditButton id={elem._id} Token={Token} getData={getData}/> :<div className='movie_card_op_btn'>
                    <button>View</button>
                </div>
                }
            </div>
        </div>
    );
}

export default MovieCard;