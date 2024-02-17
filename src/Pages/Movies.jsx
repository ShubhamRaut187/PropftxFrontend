import React, { useEffect, useState } from 'react';
import './Styles/Movies.css'
import PageTitle from '../Components/PageTitle';
import MovieCard from '../Components/MovieCard';
import CreateMovieButton from '../Components/CreateMovieButton';
import { useSelector } from 'react-redux';
import LoadingComp from '../Components/LoadingComp';

function Movies(props) {
    let [Search,SetSearch] = useState('');
    let Token = useSelector((store)=>{
        return store.user.Token;
    })
    let [Loading,SetLoading] = useState(false);
    let Role = useSelector((store)=>{
        return store.user.User.Role;
    })
    let [Movies,SetMovies] = useState([]);
    let getData = async() => {
        SetLoading(true);
        try {
            let results = await fetch(`https://propftxbackend-xyge.onrender.com/movies/`,{
                headers:{
                    'Content-Type':'application/json',
                    'authorization':`Bearer ${Token}`
                },
            });
            let response = await results.json();
            // console.log(response);
            SetLoading(false);
            SetMovies(response.Movies)
        } catch (error) {
            console.log(error);
            SetLoading(false)
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
            <div className='movie_search'>
                <input type="text" placeholder='Enter Movie Name' onChange={(e)=>{
                        SetSearch(e.target.value);
                }}/>
            </div>
            {
                Loading ? <LoadingComp Text={'Getting Movies'}/> : <div className='movie_parent'>
                {
                 Movies?Movies.filter((item)=>{
                    return Search.toLowerCase() === '' ? item : item.Name.toLowerCase().includes(Search.toLowerCase());
                 }).map((elem)=>{
                     return <MovieCard key={elem._id} elem={elem} Token={Token} Role={Role} getData={getData}/>
                 }) : <></>
                }
             </div>
            }
        </div>
    );
}

export default Movies;