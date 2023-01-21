import React, { useState } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { Difficulty, fetchQuestions } from './Api';
const code= require('../src/images/code.jpg') 


const totalQuestion=10

function App() {
  const [loading, setLoading]=useState(false)
  const [question, setQuestion]=useState([])
  const [number, setNumber]=useState(0)
  const [userAnswer, setUserAnswer]=useState([])
  const [score, setScore]=useState(0  )
  const [gameOver, setGameOver]=useState(true)
  console.log(fetchQuestions(totalQuestion, Difficulty.EASY));
  const startTrivia=()=>{

  }

  const checkAnswer=(e: React.MouseEvent<HTMLButtonElement>)=>{

  }

  const nextQuestion=()=>{

  }

  return (
    <div className="App" 
    style={{background: `linear-gradient(rgba(0,0,0,0.5), #020808), url(${code}) center/cover no-repeat`, height: '100vh'}}
    >
      <h1>react quiz</h1>
      <button onClick={startTrivia}>Let's go</button>
      <p>Score: 0</p>
      <p>Loading questions....</p>
      {/* <QuestionCard
      questionNumber={number +1}
      totalQuestion={totalQuestion}
      question={question[number].question}
      answers={question[number].answers}
      userAnswer={userAnswer? userAnswer[number] : undefined}
callback={checkAnswer}
      /> */}
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
