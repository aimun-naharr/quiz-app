import React from "react";

type props = {
	question: string;
	answers: string[];
	callback: any;
   userAnswer: any;
   questionNumber: number;
   totalQuestion: number
};

const QuestionCard:React.FC<props> = ({question, answers, callback,  questionNumber, totalQuestion, userAnswer,}) => {
	return <div>
      <p>Question: {questionNumber}/{totalQuestion}</p>
      <p dangerouslySetInnerHTML={{__html: question}}/>
      <div>
         {
            answers.map(answer=>(
               <div>
                  <button disabled={userAnswer} onClick={callback}>
                     <span dangerouslySetInnerHTML={{__html: answer }}/>
                  </button>
               </div>
            ))
         }
      </div>
   </div>;
};

export default QuestionCard;
