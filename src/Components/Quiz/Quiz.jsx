import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TopicData from '../../Data/TopicData.js';
import './Quiz.css';
function Quiz() {
  const { id } = useParams();
  const {topicId} = useParams();
  const topic = TopicData.find(
    t => t.t_no === parseInt(topicId)
  )
  const [indexNumber,setIndexNumber] = useState(0);
  const [answerClicked,setAnswerClicked] = useState(false);
  const [validateAnswer,setValidateAnswer] = useState(false);
  const [score,setScore] = useState(0);
  const optionsArray = topic.t_quiz[indexNumber].options;
  const correctAnswer = topic.t_quiz[indexNumber].answer;
  const Question = topic.t_quiz[indexNumber].q_id;
  const totalQuestions = topic.t_quiz.length;
  const QuizTopic = topic.t_name;
  const quizId = topic.t_no;
  if(!topic){
    return(
      <div>404 Page Not Found</div>
    )
  }
  const incrementIndex = () =>{
    setIndexNumber(indexNumber+1)
    setAnswerClicked(false)
    setValidateAnswer(false)
  }
  const checkAnswer = (userAnswer) =>{
      setAnswerClicked(true)
      if(userAnswer == correctAnswer){
        setValidateAnswer(true)
        setScore(score+1)
      }else{
        setValidateAnswer(false)
      }
  }
  const getOptionClass = (option) =>{
    if(answerClicked === false){
      return 'options'
    }if(option === correctAnswer){
      return 'correct-answer'
    }else{
      return 'wrong-answer'
    }
  }

  const data = {
    finalScore : score
  }
  return (
    <div className='quiz-container'>
      {/* <h2>{topic.t_name}</h2> */}
      <div className="quiz-div">
        <div className="question-div">
          <p>{topic.t_quiz[indexNumber].q_id} of {totalQuestions} Question</p>
          <hr />
          <p>{topic.t_quiz[indexNumber].question}</p>
          <div className="option-div">
            <div className={getOptionClass(optionsArray[0])} onClick={()=>checkAnswer(optionsArray[0])}>
              <p>{optionsArray[0]}</p>
            </div>
            <div className={getOptionClass(optionsArray[1])} onClick={()=>checkAnswer(optionsArray[1])}>
              <p>{optionsArray[1]}</p>
            </div>
            <div className={getOptionClass(optionsArray[2])} onClick={()=>checkAnswer(optionsArray[2])}>
              <p>{optionsArray[2]}</p>
            </div>
            <div className={getOptionClass(optionsArray[3])} onClick={()=>checkAnswer(optionsArray[3])}>
              <p>{optionsArray[3]}</p>
            </div>
          </div>
          <div className="button-container">
                <button className='exit-btn'>
                  <Link to='/' className='link-class'>Home</Link>
                </button>
              {
                Question < totalQuestions ?
                <button className='next-btn' onClick={incrementIndex}>Next</button>:
                <Link 
                  to={`/result/quiz/${quizId}`}
                  state={{ fromHome: { data } }}
                  className='link-class'>
                    <button className='result-btn'>Result</button>
                </Link>
              }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Quiz
