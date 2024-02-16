import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
function PrivateRoutes({children}) {
    let status = useSelector((store)=>{
        return store.status;
    })
    if(status === "in"){
        return children;
    }
    else{
        return <Navigate to='/loginsignup'/>
    }
}

export default PrivateRoutes;