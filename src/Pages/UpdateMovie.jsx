import React,{useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import './Styles/UpdateMovie.css'
import LoadingComp from '../Components/LoadingComp';

function UpdateMovie(props) {
    let {id} = useParams();
    let [Item,SetItem] = useState({
        Name:'',
        Ratings:'',
        Category:'',
        Description:''
    });
   let [Loading,SetLoading] = useState(false)
   let Navigate = useNavigate();
    let Token = useSelector((store)=>{
        return store.user.Token
    })

    let updatemovie = async(e) => {
        e.preventDefault();
        try {
            let results = await fetch(`https://propftxbackend-xyge.onrender.com/movies/update/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json',
                    'authorization':`Bearer ${Token}`
                },
                body:JSON.stringify(Item)
            });
            let response = await results.json();
            if(response.Message === 'Movie updated'){
                alert('Movie updated');
                Navigate('/movies');
            }
            else{
                alert(response.Message);
            }
        } catch (error) {
            console.log(error);
            alert('Try again');
        }
    }

    useEffect(()=>{
        let getmovie = async() => {
            try {
                let result = await fetch(`https://propftxbackend-xyge.onrender.com/movies/${id}`,{
                    headers:{
                        'Content-Type':'application/json',
                        'authorization':`Bearer ${Token}`
                    },
                })
                let response = await result.json();
                SetItem({
                    Name:response.Movie.Name,
                    Ratings:response.Movie.Ratings,
                    Category:response.Movie.Category,
                    Description:response.Movie.Description
                })
            } catch (error) {
                console.log(error);
            }
        }
        getmovie();
    },[Token,id])


    return (
        <div className='createmovieform_main'>
        <div className='createmoviemsg_div'>
            <h3>Dear Admin</h3>
            <h1>Update a movie...</h1>
        </div>
        <div className='createmovieform_div'>
            <h2>Update movie</h2>
            {
                Loading ? <LoadingComp Text={'Creating Movie'}/> : <form onSubmit={updatemovie}>
                <input type="text" placeholder='Enter Name' className='createmovieform_input' value={Item.Name} onChange={(e)=>{
                    SetItem((prevItem)=>({...prevItem, Name:e.target.value}))
                }}/>     
                <input type="number" placeholder='Ratings' className='createmovieform_input' value={Item.Ratings}onChange={(e)=>{
                    SetItem((prevItem)=>({...prevItem, Ratings:e.target.value}))
                }}/>
                <input type="text" placeholder='Category' className='createmovieform_input' value={Item.Category}onChange={(e)=>{
                   SetItem((prevItem)=>({...prevItem, Category:e.target.value}))
                }}/>
                <input type="text" placeholder='Description' className='createmovieform_input' value={Item.Description} onChange={(e)=>{
                    SetItem((prevItem)=>({...prevItem, Description:e.target.value}))
                }}/>
                <input type="submit" value='Create' className='createmovieform_signup_btn'/>
            </form>  
            }
        </div>
    </div>
    );
}

export default UpdateMovie;