import React from 'react'
import './MainPage.css'
import {useNavigate} from 'react-router-dom';

const Card = ({ item }) => {

  const navigate = useNavigate();

  //Redirect to Shows Page
  function redirect(id){
    navigate(`/shows/${id}`);
  }

  return (
    <>
      <div className="card">

        <div className="img">
          <img src={item.show.image.medium} alt="" />
        </div>

        <div className="cardinfo">
          {item.show.rating.average ? <span>{item.show.rating.average} out of 10</span> : <span>6 out of 10</span>}

          <h3>{item.show.name}</h3>

          <button onClick={()=>{redirect(item.show.id)}}>View More</button>

        </div>
      </div>
    </>
  )
}

export default Card;