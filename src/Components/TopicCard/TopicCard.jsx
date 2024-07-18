import React from 'react'
import { Link } from 'react-router-dom'
import './TopicCard.css'
function TopicCard({id,name,image}) {
  return (
    <div className='card-container'>
        <div className="card">
            <h3>{name}</h3>
            <img src={image} alt="" className='image-class'/>
            <br />
              <Link to={`/quiz/topic/${id}`} className='link-class'>
                  <button className='start-btn'>START</button>
              </Link>
        </div>
    </div>
  )
}
export default TopicCard
