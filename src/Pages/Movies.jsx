import React from 'react';
import './Styles/Movies.css'
import PageTitle from '../Components/PageTitle';
import MovieCard from '../Components/MovieCard';
function Movies(props) {
    return (
        <div>
            <PageTitle Title={'Movies'}/>
            <div className='create_movie_op'>
                <button>Create Movie</button>
            </div>
            <div className='movie_parent'>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
    );
}

export default Movies;