import React,{useState} from 'react';
import LoadingComp from './LoadingComp';
import {useDispatch} from 'react-redux';
import {handleLogin} from '../Redux/actions'
import { useNavigate } from 'react-router-dom';
import './Styles/LoginForm.css'

function LoginForm({Setpgname}) {
    let [Email,SetEmail] = useState('');
    let [Password,SetPassword] = useState('');
    let [Loading,SetLoading] = useState(false);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let verify = async(e) => {
        e.preventDefault();
        if(!Email || !Password){
            SetLoading(false);
            alert('All fields are mandatory');
            return;
        }
        try {
            let result = await fetch(`https://propftxbackend-xyge.onrender.com/users/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    Email,
                    Password
                })
            })
            let response = await result.json();
            console.log(response);
            if(response.Message === 'Login successful'){
                dispatch(handleLogin(response));
                SetLoading(false);
                alert('Login Successful');
                navigate('/');

            }
            else{
                SetLoading(false);
                alert(response.Message);
            }
        } catch (error) {
            SetLoading(false);
            console.log(error);
            alert('Try again');
        }
    }

    return (
        <div className='loginform_main'>
            <div className='loginmsg_div'>
                <h3>Dear Valued Member</h3>
                <h1>Welcome Back...!</h1>
                <p>We are delighted to welcome you back at Propftx Movies! Your presence means world to us, and we cant wait to make your experience as fabulous as ever. </p>
            </div>
            
                <div className='loginform_div'>
                <h2>Login To Your Account</h2>
                <p>Please login to your account to explore all Movies, view insights. We are here to make a excellentg choice for your next movie time.</p>
                {
                    Loading ? <LoadingComp Text={'Logging in'}/> : <form onSubmit={verify}>
                    <input type="email" placeholder='Enter Username/Email' className='loginform_input' onChange={(event)=>{
                        SetEmail(event.target.value);
                    }}/>
                    <input type="password" placeholder='Enter Password' className='loginform_input' onChange={(event)=>{
                        SetPassword(event.target.value);
                    }}/>
                    <input type="submit" value='Login' className='loginform_login_btn'/>
                </form>  
                }
                <p onClick={()=>{
                    Setpgname({
                        Text:'Create Your Account',
                        Comp:false
                    })
                }}>Don't have a account, create one! </p>  
            </div>
            
        </div>
    );
}

export default LoginForm;