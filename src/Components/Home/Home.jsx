import React from 'react'
import TopicData from '../../Data/TopicData.js'
import Footer from '../Footer/Footer.jsx'
import TopicCard from '../TopicCard/TopicCard.jsx'
import './Home.css'
function Home() {
  return (
    <div className='home-container'>
      <div className="quiz-head">
        <h1>Quiz App</h1>
        <h2>"Challenge Yourself. Test your Knowledge!"</h2>
      </div>
      <div className="topic-card">
        {
          TopicData.map((item,index)=>{
            return(
              <TopicCard key={index} id={item.t_no} name={item.t_name} image={item.t_image}></TopicCard>
            )
          })
        }
      </div>
      <Footer className='footer'></Footer>
    </div>
  )
}
export default Home
