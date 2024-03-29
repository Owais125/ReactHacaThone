import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card02 = () => {
    const navigate = useNavigate()
    const click_handle = ()=>{
        navigate("/procurer")
    }
  return (
    <div className='flex  justify-center w-2/4'><div className="card card-side bg-base-100 shadow-xl">
    <figure><img src="https://tse3.mm.bing.net/th?id=OIP.hvGherU9BD7cv6QSoF8QGAHaHa&pid=Api&P=0&h=220"  alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title">Accepter</h2>
      <p> Your donation could help save the life of someone in our community, and it's a simple and powerful way to give back.</p>
        <button onClick={click_handle} className="btn btn-primary">Accepted</button>
    </div>
  </div></div>
  )
}

export  {Card02}