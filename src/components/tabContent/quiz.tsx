import React, { useCallback, useMemo, useState } from "react";

const quizData = [
  {
    id: 1,
    question: "What is ReactJS?",
    options: ["Server side framework", "UI framework", "Both", "NOTA"],
  },
  {
    id: 2,
    question: "What is ReactJS mainly used for building?",
    options: ["Database", "connectivity", "User Interface", "Design Platform"],
  },
  {
    id: 3,
    question: "What is used to handle code-splitting?",
    options: ["React.lazy", "React.memo", "React.fallback", "React.split"],
  },
  {
    id: 4,
    question: "When is useReducer used over useState in react component?",
    options: [
      "When you want to replace redux",
      "when we want to break our prod app",
      "When we want to improve performance",
      "NOTA",
    ],
  },
  {
    id: 5,
    question: "Which of the following are two ways to handle data in react?",
    options: [
      "Services & Components",
      "State & Props",
      "State & Services",
      "State & Component",
    ],
  },
];

const Quiz = () => {
  const [questionSet, setQuestionSet] = useState(quizData);
  const [currentQuestion, setCurrentQuestion] = useState(questionSet[0]);

  const isNextDisable = useMemo(() => {
    return currentQuestion.id === questionSet.length;
  }, [currentQuestion.id, questionSet.length]);

  const onNextHandler = useCallback(() => {
    if (currentQuestion.id !== questionSet.length) {
      setCurrentQuestion(questionSet[currentQuestion.id]);
    }
  }, [currentQuestion.id, questionSet]);

  const isBackDisable = useMemo(() => {
    return currentQuestion.id === 1;
  }, [currentQuestion.id]);

  const onBackHandler = useCallback(() => {
    console.log("ds",currentQuestion.id);
    if (currentQuestion.id !== 0) {
      setCurrentQuestion(questionSet[currentQuestion.id - 2]);
    }
  }, [currentQuestion.id, questionSet]);

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h3>Question {currentQuestion.id}:</h3>
        <p>{currentQuestion.question}</p>
        <ol>
          {currentQuestion.options.map((option) => {
            return <li>{option}</li>;
          })}
        </ol>
        <div className="quiz-button">
          <button onClick={onBackHandler} disabled={isBackDisable}>
            Back
          </button>
          <button onClick={onNextHandler} disabled={isNextDisable}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
