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
                <p className='movie_card_movie_name'><i className="fa-solid fa-video fa-sm" style={{'color': 'white'}}></i>&nbsp;{elem.Name}</p>
                <p className='movie_card_ratings'><i className="fa-solid fa-star fa-sm" style={{'color': '#FFD43B'}}></i>&nbsp;{elem.Ratings}</p>
                <p className='movie_card_category'><i className="fa-solid fa-film fa-sm" style={{'color':'#FFD43B'}}></i>&nbsp;{elem.Category}</p>
                </div>
                {/* <div className='movie_card_op_btn'>
                    <button>View</button>
                </div> */}
                {
                    Role === 'Admin' ? <EditButton id={elem._id} Token={Token} getData={getData}/> :<div className='movie_card_op_btn'>
                    <></>
                </div>
                }
            </div>
        </div>
    );
}

export default MovieCard;