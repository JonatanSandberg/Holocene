import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../data/quizData';
import '../styles/QuizPage.css';
import { Player } from '@lottiefiles/react-lottie-player';
import gameOver from '../assets/gameOver.json';
import choose from '../assets/choose.json';
import yes from '../assets/Yes.json';
import wrong from '../assets/Wrong2.json';
import quiz from '../assets/quiz.gif';

const QuizPage: React.FC = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [feedbackAnimation, setFeedbackAnimation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDifficulty) {
      const filteredQuestions = quizData
        .filter(q => q.difficulty === selectedDifficulty)
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
      setQuestions(filteredQuestions);
    }
  }, [selectedDifficulty]);

  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowExplanation(false);
    setFeedbackAnimation('');
  };

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      setFeedbackAnimation(yes);
    } else {
      setFeedbackAnimation(wrong);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setShowExplanation(false);
      setFeedbackAnimation('');
    } else {
      setShowScore(true);
      setFeedbackAnimation(gameOver);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowExplanation(false);
    setFeedbackAnimation('');
    setSelectedDifficulty('');
    setQuestions([]);
  };

  const handleQuit = () => {
    navigate('/');
  };

  const scorePercentage = (score / questions.length) * 100;

  return (
    <div className="quiz-container">
      {!selectedDifficulty ? (
        <div className="difficulty-selection">
          <h2>Select Difficulty Level:</h2>
          <Player
            autoplay
            loop
            src={choose}
            style={{ height: '300px', width: '300px' }}
          />
          <button onClick={() => handleDifficultySelect('easy')}>Easy</button>
          <button onClick={() => handleDifficultySelect('medium')}>Medium</button>
          <button onClick={() => handleDifficultySelect('hard')}>Hard</button>
        </div>
      ) : showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {questions.length}</h2>
          <div className="score-bar">
            <div className="score-fill" style={{ width: `${scorePercentage}%` }} />
          </div>
          <Player
            autoplay
            loop
            src={gameOver}
            style={{ height: '300px', width: '300px' }}
          />
          <div>
            <button onClick={handleRestartQuiz} className="restart-button">Restart Quiz</button>
            <button onClick={handleQuit} className="quit-button">Quit</button>
          </div>
        </div>
      ) : (
        <>
          {questions.length > 0 && (
            <div>
              <div className="question-section">
                <h2>
                  <img src={quiz} alt="Quiz GIF" style={{ width: '350px', height: 'auto' }} />
                </h2>
                <h3>Question {currentQuestion + 1}/{questions.length}</h3>
                <p>{questions[currentQuestion].question}</p>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {showExplanation && (
                <div className="explanation-section">
                  <div className="feedback-box">
                    <Player
                      autoplay
                      loop={false}
                      src={feedbackAnimation}
                      style={{ height: '200px', width: '200px' }}
                    />
                  </div>
                  <div className="explanation-box">
                    <p><strong>Explanation:</strong> {questions[currentQuestion].explanation}</p>
                    <button onClick={handleNextQuestion}>Next Question</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizPage;









