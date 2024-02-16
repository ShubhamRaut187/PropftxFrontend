import React from 'react';
import {Routes,Route} from 'react-router-dom'

// Pages
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import LoginSignUp from '../Pages/LoginSignUp'
import CreateMovie from '../Pages/CreateMovie'


function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/loginsignup' element={<LoginSignUp/>}/>
                <Route path='/createmovie' element={<CreateMovie/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;