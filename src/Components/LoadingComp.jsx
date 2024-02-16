import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Styles/Loading.css'

function LoadingComp({Text}) {
    return (
        <div className='loading'>
            <CircularProgress color='success'/>
            <h1>{Text}...!</h1>
        </div>
    );
}

export default LoadingComp;