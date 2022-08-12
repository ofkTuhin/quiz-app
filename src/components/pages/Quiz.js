import useQuestions from "hooks/useQuiz";
import React, { useEffect, useReducer, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import Progressbar from "../Progressbar";
import _ from "lodash";
import { useAuth } from "context/AuthContext";
const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.map((question) =>
        question.options.map((option) => {
          option.checked = false;
        })
      );
      return action.value;

    case "answers":
      const questions = _.cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;
      console.log(action.value);
      return questions;
    default:
      return state;
  }
};
const Quiz = () => {
  const { id } = useParams();
  const { questions, loading, error } = useQuestions(id);
  const { currentUser } = useAuth();

  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleChecked = (e, index) => {
    dispatch({
      type: "answers",
      value: e.target.value,
      questionId: currentQuestions,
      optionIndex: index,
    });
  };
  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestions + 1 < questions.length) {
      setCurrentQuestions((prevCurrent) => prevCurrent + 1);
    }
  }

  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestions >= 1 && currentQuestions <= questions.length) {
      setCurrentQuestions((prevCurrent) => prevCurrent - 1);
    }
  }

  // calculate percentage of progress
  const percentage =
    questions.length > 0
      ? ((currentQuestions + 1) / questions.length) * 100
      : 0;
  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>Pick three of your favorite Star Wars Flims</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            handleChecked={handleChecked}
            options={qna[currentQuestions].options}
          ></Answers>
          <Progressbar
            nextQuestion={nextQuestion}
            prevQuestion={prevQuestion}
            percentage={percentage}
          />
          <Miniplayer />
        </>
      )}
    </>
  );
};

export default Quiz;
