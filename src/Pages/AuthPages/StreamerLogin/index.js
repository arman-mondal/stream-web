import React, { useState } from 'react'



const LoginSuccessAlert=()=>{
    return(<div className="alert alert-success">
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Loging Successfull</span>
  </div>)
}

const LoginErrorAlert=()=>{
    return(<div className="alert alert-error">
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Wrong Credentials</span>
  </div>)
}

const NoEmailPassword=()=>{
    return(<div className="alert alert-error mt-5 ">
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Enter Your Credentials</span>
  </div>)
}

const StreamerLogin=()=>{
    const[loginsuccessfull,setloginsuccessfull]=useState(false);
    const[loginunsuccessfull,setloginunsuccessfull]=useState(false);
    const[NoCredentials,setNoCredentials]=useState(false);
    
    

    const handlelogin=()=>{
        const user_email=document.getElementById('user_email').value
        const user_password=document.getElementById('user_password').value
        if(user_email===''||user_password===''){
            setNoCredentials(true)

        }else{
            const user_data={
                email:user_email,
                password:user_password
            }
            handlepost(user_data);
            
        }
    }

    const handlepost = async (user_data)=>{
        const response=await fetch('http://localhost:5000/streamer/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user_data)
        })
        if(response.status==401){
            setloginunsuccessfull(true)
        }
        if(response.status===200){
            setloginsuccessfull(true)
        const data=await response.json()
        localStorage.setItem('StreamerToken',data.token)
        window.location.href='/streamer/dashboard'

        }
    }
    return(<div>
        {NoCredentials && <NoEmailPassword/>}
        {loginsuccessfull && <LoginSuccessAlert/>}
        {loginunsuccessfull && <LoginErrorAlert/>}
<div className='h-screen w-full flex justify-center items-center' >

<div className="card w-96 bg-base-100 h-max shadow-xl">
<figure className="h-max pb-10 pt-10 w-full flex justify-center ">
<a className="btn btn-ghost cursor-text hover:bg-none normal-case text-4xl"><img src="https://img.icons8.com/3d-fluency/94/youtube-play.png"/> Streamzz</a>

</figure>
<div className="card-body items-center text-center">

<div className="form-control w-full m-5 max-w-xs">
<label className="label">
<span className="label-text">What is your email?</span>
<span className="label-text-alt text-red-600">*</span>
</label>
<input type="email" id='user_email' placeholder="example@email.com" className="input input-bordered w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs mb-5">
<label className="label">
<span className="label-text">What is your Password</span>
<span className="label-text-alt text-red-500 ">*</span>
</label>
<input type="password" id='user_password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
</div>


<div className="card-actions">


  <button onClick={handlelogin} className="btn btn-primary">Login</button>



</div>
<div className='w-full mt-2 flex-1 items-center ' >

<a href='/streamer/signup'>Don't have a account</a>

</div>
</div>
</div>
</div>
</div>)
}

export default StreamerLogin


