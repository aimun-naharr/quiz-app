import React, { useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import { Difficulty, fetchQuestions, QuestionState } from "./Api";
const code = require("../src/images/code.jpg");

type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const totalQuestion = 10;

function App() {
	const [loading, setLoading] = useState(false);
	const [question, setQuestion] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);
		const newQuestions = await fetchQuestions(totalQuestion, Difficulty.EASY);
		setQuestion(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			const answer = e.currentTarget.value;
			// check whether the answer is correct or not
			const correct = question[number].correct_answer === answer;
			// if correct returns true the increase the score value
			if (correct) setScore((prev) => prev + 1);
			const answerObject: AnswerObject = {
				question: question[number].question,
				answer,
				correct,
				correctAnswer: question[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = ():void => {
		// move on to the next question if not the last
		const nextQuestion = number + 1;
		if (nextQuestion === totalQuestion) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion)
		}
	};

	return (
		<div className="App" style={{ background: `linear-gradient(rgba(0,0,0,0.5), #020808), url(${code}) center/cover no-repeat`, height: "100vh" }}>
			<h1>react quiz</h1>
			{(gameOver || userAnswers.length === totalQuestion) && <button onClick={startTrivia}>Let's go</button>}
			{!gameOver ? <p>Score: 0</p> : null}
			{loading && <p>Loading questions....</p>}
			{!loading && !gameOver && (
				<QuestionCard
					questionNumber={number + 1}
					totalQuestion={totalQuestion}
					question={question[number].question}
					answers={question[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
				/>
			)}
			{!loading && !gameOver && userAnswers.length === number + 1 && number !== totalQuestion - 1 && <button onClick={nextQuestion}>Next</button>}
		</div>
	);
}

export default App;
