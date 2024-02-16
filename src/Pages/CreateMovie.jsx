import React,{useState} from 'react';
import LoadingComp from '../Components/LoadingComp';
import './Styles/CreateMovie.css'
function CreateMovie(props) {
   let [Name,SetName] = useState('');
   let [Ratings,SetRatngs] = useState('');
   let [Category,SetCategory] = useState('');
   let [Description,SetDescription] = useState('');
   let [Poster,SetPoster] = useState('');
   let [Loading,SetLoading] = useState(false) 
    return (
        <div className='createmovieform_main'>
        <div className='signupmsg_div'>
            <h3>Dear Admin</h3>
            <h1>Create a movie...</h1>
            <p>Create movie that everyone will like it.</p>
        </div>
        <div className='createmovieform_div'>
            <h2>Create the best movie</h2>
            {
                Loading ? <LoadingComp Text={'Creating Movie'}/> : <form>
                <input type="text" placeholder='Enter Name' className='createmovieform_input' onChange={(event)=>{
                    SetName(event.target.value)
                }}/>     
                <input type="number" placeholder='Ratings' className='createmovieform_input'onChange={(event)=>{
                    SetRatngs(event.target.value)
                }}/>
                <input type="text" placeholder='Category' className='createmovieform_input'onChange={(event)=>{
                    SetCategory(event.target.value)
                }}/>
                <input type="text" placeholder='Description' className='createmovieform_input' onChange={(event)=>{
                    SetDescription(event.target.value)
                }}/>
                <input type="file" placeholder='Poster' className='createmovieform_input_address' onChange={(event)=>{
                    SetPoster(event.target.value)
                }}/>
                <input type="submit" value='Create' className='createmovieform_signup_btn'/>
            </form>  
            }
        </div>
    </div>
    );
}

export default CreateMovie;