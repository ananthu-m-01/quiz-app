import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Quiz from './Components/Quiz/Quiz.jsx'
import Result from './Components/Result/Result.jsx'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/quiz/topic/:topicId' element={<Quiz/>}></Route>
        <Route path='/result/quiz/:quizId' element={<Result></Result>}></Route>
      </Routes>
    </div>
  )
}

export default App
