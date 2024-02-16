import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


function EditButton({id,Token,getData}) {
    let Navigate = useNavigate();
    let deletemovie = async() => {
        try {
            let results = await fetch(`https://propftxbackend-xyge.onrender.com/movies/delete/${id}`,{
            method:'DELETE',        
            headers:{
                        'Content-Type':'application/json',
                        'authorization':`Bearer ${Token}`
                    },
                });
                let response = await results.json();
                // console.log(response);
                alert('Movie Deleted');
                getData();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='movie_card_op_btn'>
            <button onClick={()=>{
                Navigate(`/updatemovie/${id}`);
            }}>Edit</button>
            <button onClick={deletemovie}>Delete</button>
        </div>
    );
}

export default EditButton;