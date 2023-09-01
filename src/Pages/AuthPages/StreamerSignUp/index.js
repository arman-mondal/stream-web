import React from "react";


const StreamerSignUp=()=>{
    
    const handleSingup=()=> {
        const ch_name=document.getElementById('ch_name').value
        const user_email=document.getElementById('user_email').value
        const user_password=document.getElementById('user_password').value
    
        const user_data={
            ch_name:ch_name,
            email:user_email,
            password:user_password
        }
        if(ch_name===''||user_email===''||user_password===''){
            alert('Please enter email and password')
        }else{
            //            console.log("User Data",user_data)
            console.log(user_data)
            handlepost(user_data)

        }

      
        
    }
      const handlepost=async (user_data)=>{
            const response=await fetch('http://localhost:5000/streamer/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user_data)
            })
            const data=await response.json()
            console.log(data)
           window.location.href="/streamer/login"
        }
    return(<div className='h-screen w-full flex justify-center items-center' >

    <div className="card w-96 bg-base-100 h-max shadow-xl">
      <figure className="h-max pb-10 pt-10 w-full flex justify-center ">
      <a className="btn btn-ghost cursor-text hover:bg-none normal-case text-4xl"><img src="https://img.icons8.com/3d-fluency/94/youtube-play.png"/> Streamzz</a>
    
      </figure>
      <div className="card-body items-center text-center">
      <div className="form-control w-full  max-w-xs">
      <label className="label">
        <span className="label-text">What is your Channel Name?</span>
        <span className="label-text-alt text-red-600">*</span>
      </label>
      <input type="text" id='ch_name' placeholder="GAMING TECH" className="input input-bordered w-full max-w-xs" />
    
    </div>
    
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
    
    
          <button onClick={handleSingup}  className="btn btn-primary">SignUp</button>
    
    
    
        </div>
        <div className='w-full mt-2 flex-1 items-center ' >
    
        <a href='/streamer/login'>Already have a account</a>
    
        </div>
      </div>
    </div>
        </div>)


}

export default StreamerSignUp;