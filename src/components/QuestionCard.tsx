import React from "react";

type props = {
	question: string;
	answers: string[];
	callback:  (e: React.MouseEvent<HTMLButtonElement>) =>void;
   userAnswer: any;
   questionNumber: number;
   totalQuestion: number
};

const QuestionCard:React.FC<props> = ({question, answers, callback,  questionNumber, totalQuestion, userAnswer}) => {
	return <div>
      <p>Question: {questionNumber}/{totalQuestion}</p>
      <p dangerouslySetInnerHTML={{__html: question}}/>
      <div>
         {
            answers.map(answer=>(
               <div>
                  <button value={answer} disabled={userAnswer} onClick={callback}>
                     <span dangerouslySetInnerHTML={{__html: answer }} />
                  </button>
               </div>
            ))
         }
      </div>
   </div>;
};

export default QuestionCard;
