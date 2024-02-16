import React,{useState} from 'react';
import LoadingComp from '../Components/LoadingComp';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Styles/CreateMovie.css'
function CreateMovie(props) {
   let Navigate = useNavigate();
    let [Name,SetName] = useState('');
   let [Ratings,SetRatngs] = useState('');
   let [Category,SetCategory] = useState('');
   let [Description,SetDescription] = useState('');
   let [Poster,SetPoster] = useState('');
   let [Loading,SetLoading] = useState(false) 
   let Token = useSelector((store)=>{
    return store.user.Token;
   })

   let createmovie = async(PosterUrl) => {
    try {
        let result = await fetch(`https://propftxbackend-xyge.onrender.com/movies/create`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'authorization':`Bearer ${Token}` 
            },
            body:JSON.stringify({
                Name,
                Ratings,
                Category,
                Description,
                Posters:PosterUrl
            })
        });
        let response = await result.json();
        // SetLoading(false);
        if(response.Message === 'Movie added'){
            alert('Movie added');
            SetLoading(false);
            Navigate('/movies');
        }
        else{
            alert(response.Message);
            SetLoading(false);
        }
        // Navigate('/movies');
    } catch (error) {
        // SetLoading(false);
        alert('Something went wrong try again');
    }
   }
   
   let addmovie = (e) =>{
    e.preventDefault();
    SetLoading(true);
    if(!Name || !Ratings || !Category || !Description){
        SetLoading(false);
        alert('All fields are mandatory');
        return
    }

    let data = new FormData();
    data.append('file',Poster);
    data.append('upload_preset','formease');
    data.append('cloud_name','dakxdcwzr');

    fetch('https://api.cloudinary.com/v1_1/dakxdcwzr/image/upload',{
        method:'POST',
        body:data,
       
    }).then((response)=>{
        if(!response.ok){
            throw new Error('Response was not ok')
        }
        return response.json();
        
    }).then((response)=>{
        // SetImage(response.url);
        // calulateage(response.url);
        console.log(response.url);
        createmovie(response.url);
        SetLoading(false)
        
    }).catch((error)=>{
        console.log(error);
        SetLoading(false)
    })

   } 
   return (
        <div className='createmovieform_main'>
        <div className='createmoviemsg_div'>
            <h3>Dear Admin</h3>
            <h1>Create a movie...</h1>
            <p>Create movie that everyone will like it.</p>
        </div>
        <div className='createmovieform_div'>
            <h2>Create the best movie</h2>
            {
                Loading ? <LoadingComp Text={'Creating Movie'}/> : <form onSubmit={addmovie}>
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
                    SetPoster(event.target.files[0])
                }}/>
                <input type="submit" value='Create' className='createmovieform_signup_btn'/>
            </form>  
            }
        </div>
    </div>
    );
}

export default CreateMovie;