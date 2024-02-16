import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateMovieButton(props) {
    let Navigate = useNavigate()
    return (
        <div className='create_movie_op'>
                <button onClick={()=>{
                    Navigate('/createmovie')
                }}>Create Movie</button>
        </div>
    );
}

export default CreateMovieButton;