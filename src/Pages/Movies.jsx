import React, { useEffect, useState } from 'react';
import './Styles/Movies.css'
import PageTitle from '../Components/PageTitle';
import MovieCard from '../Components/MovieCard';
import CreateMovieButton from '../Components/CreateMovieButton';
import { useSelector } from 'react-redux';

function Movies(props) {
    let Token = useSelector((store)=>{
        return store.user.Token;
    })
    let Role = useSelector((store)=>{
        return store.user.User.Role;
    })
    let [Movies,SetMovies] = useState([]);
    let getData = async() => {
        try {
            let results = await fetch(`https://propftxbackend-xyge.onrender.com/movies/`,{
                headers:{
                    'Content-Type':'application/json',
                    'authorization':`Bearer ${Token}`
                },
            });
            let response = await results.json();
            // console.log(response);
            SetMovies(response.Movies)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        
        getData();
    },[Token])

    return (
        <div>
            <PageTitle Title={'Movies'}/>
            {
                Role === 'Admin'? <CreateMovieButton/>:<></>
            }
            <div className='movie_parent'>
               {
                Movies?Movies.map((elem)=>{
                    return <MovieCard key={elem._id} elem={elem} Token={Token} Role={Role} getData={getData}/>
                }) : <></>
               }
            </div>
        </div>
    );
}

export default Movies;