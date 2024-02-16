import React from 'react';
import {Routes,Route} from 'react-router-dom'


// Pages
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import LoginSignUp from '../Pages/LoginSignUp'
import CreateMovie from '../Pages/CreateMovie'
import UpdateMovie from '../Pages/UpdateMovie';
import PrivateRoutes from './PrivateRoutes';

function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movies' element={<PrivateRoutes><Movies/></PrivateRoutes>}/>
                <Route path='/loginsignup' element={<LoginSignUp/>}/>
                <Route path='/createmovie' element={<PrivateRoutes><CreateMovie/></PrivateRoutes>}/>
                <Route path='/updatemovie/:id' element={<PrivateRoutes><UpdateMovie/></PrivateRoutes>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;