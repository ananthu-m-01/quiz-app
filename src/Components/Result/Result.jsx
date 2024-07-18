import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import resultImg from '../../assets/results.png';
import './Result.css';
function Result() {
  const location = useLocation();
  const { fromHome } = location.state;
  let data = fromHome.data
  console.log(data.finalScore)
  return (
    <div className="result-div">
        <div className='result-container'>
            <h3 className='score'>SCORE</h3>
            <img src={resultImg} alt="" className='result-img'/>
            <p>Total Question : 20</p>
            <p>Your Score : {data.finalScore}</p>
            <h4>Congratulations!!</h4>
            <button className='home-btn'>
              <Link to='/' className='link-class'>Home</Link>
            </button>
      </div>
    </div>
  )
}
export default Result
