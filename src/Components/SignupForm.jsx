import React,{useState} from 'react';
import LoadingComp from './LoadingComp';
import './Styles/SignupForm.css'


function SignupForm({Setpgname}) {
    let [Name,SetName] = useState('');
    let [Email,SetEmail] = useState('');
    let [Password,SetPassword] = useState('');
    let [Loading,SetLoading] = useState(false)
    
    let adduser = async(e) => {
        e.preventDefault();
        SetLoading(true);
        if(!Name || !Email || !Password){
            SetLoading(false);
            alert('All fields are mandatory');
            return;
        }
        try {
            let result = await fetch(`https://propftxbackend-xyge.onrender.com/users/signup`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    Name,
                    Email,
                    Password
                })
            })
            let response = await result.json();
            SetLoading(false)
            Setpgname({
                Text:'Login Account',
                Comp:true
            })
        } catch (error) {
            console.log(error);
            SetLoading(false);
        }
    }
    
    return (
        <div className='signupform_main'>
            <div className='signupmsg_div'>
                <h3>Dear Valued Member</h3>
                <h1>Welcome To Propftx Movies...!</h1>
                <p>We are thrilled that you have choosen us your movie partner.</p>
            </div>
            <div className='signupform_div'>
                <h2>Create Your Account</h2>
                <p>Signup today and embark the journey of entertainment, suspense, actiion and comedy with us. Your time and entertainment matters to us.</p>
                {
                    Loading ? <LoadingComp Text={'Creating account'}/> : <form onSubmit={adduser}>
                    <input type="text" placeholder='Enter Name' className='signupform_input' onChange={(event)=>{
                        SetName(event.target.value)
                    }}/>     
                    <input type="email" placeholder='Enter Username/Email' className='signupform_input'onChange={(event)=>{
                        SetEmail(event.target.value)
                    }}/>
                    <input type="password" placeholder='Enter  Password' className='signupform_input'onChange={(event)=>{
                        SetPassword(event.target.value)
                    }}/>
                    <input type="submit" value='SignUp' className='signupform_signup_btn'/>
                </form>  
                }
                <p onClick={()=>{
                    Setpgname({
                        Text:'Login Account',
                        Comp:true
                    })
                }}>Already have a account, Login!</p>  
            </div>
        </div>
    );
}

export default SignupForm;