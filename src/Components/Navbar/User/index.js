import React from "react";

const UserNavbar=(props)=>{
    return(<div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl"><img src="https://img.icons8.com/3d-fluency/34/youtube-play.png"/> Streamzz</a>
      <button onClick={()=>window.location.href="#pplr"} className="btn btn-ghost ml-5 ">Popular Videos</button>
      <button onClick={()=>window.location.href="#rcfu"} className="btn btn-ghost ml-5 ">Recommanded For You</button>
      <button onClick={()=>window.location.href="#spcl"} className="btn btn-ghost ml-5 ">Speacial Latest Videos</button>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.icons8.com/3d-fluency/54/user-male-circle.png" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a onClick={props.logout} >Logout</a></li>
        </ul>
      </div>
    </div>
  </div>)
}

export default UserNavbar