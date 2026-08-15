import React, { useState } from 'react';
import { siteContent } from '../data/content';

export default function RelationshipQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === siteContent.quiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < siteContent.quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const getResultMessage = () => {
    const percentage = (score / siteContent.quiz.questions.length) * 100;

    if (percentage === 100) {
      return siteContent.quiz.results.perfect;
    } else if (percentage >= 80) {
      return siteContent.quiz.results.great;
    } else if (percentage >= 60) {
      return siteContent.quiz.results.good;
    } else {
      return siteContent.quiz.results.okay;
    }
  };

  return (
    <section id="quiz" className="min-h-screen py-20 px-4 bg-gradient-to-b from-romantic-50 to-cream">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-romantic-700 mb-4">
          {siteContent.quiz.title}
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Let's see how well you know our story!
        </p>

        {!showResult ? (
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-600">
                  Question {currentQuestion + 1}/{siteContent.quiz.questions.length}
                </span>
                <span className="text-sm font-semibold text-romantic-600">
                  Score: {score}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-romantic-500 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / siteContent.quiz.questions.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {siteContent.quiz.questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {siteContent.quiz.questions[currentQuestion].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full p-4 text-left bg-gradient-to-r from-romantic-50 to-romantic-100 hover:from-romantic-200 hover:to-romantic-300 border-2 border-romantic-200 hover:border-romantic-500 rounded-xl transition-all duration-300 font-semibold text-gray-800 hover:text-romantic-700 transform hover:scale-105"
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-romantic-100 to-romantic-50 rounded-2xl shadow-2xl p-8 text-center animate-fade-in">
            {/* Result animation */}
            <div className="text-7xl mb-6 animate-heart-beat">❤️</div>

            {/* Score */}
            <div className="mb-6">
              <div className="text-6xl font-bold text-romantic-600 mb-2">
                {score}/{siteContent.quiz.questions.length}
              </div>
              <p className="text-gray-600">
                {Math.round((score / siteContent.quiz.questions.length) * 100)}%
              </p>
            </div>

            {/* Result message */}
            <div className="mb-8">
              <p className="text-2xl font-bold text-romantic-700 mb-4">
                {getResultMessage()}
              </p>
              <p className="text-gray-700">
                {score === siteContent.quiz.questions.length
                  ? 'You got a perfect score! You definitely know our love story!'
                  : "No matter the score, I love you with all my heart! 💕"}
              </p>
            </div>

            {/* Confetti effect */}
            <div className="flex justify-center gap-2 mb-8 text-4xl">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  ✨
                </span>
              ))}
            </div>

            {/* Reset button */}
            <button
              onClick={resetQuiz}
              className="px-8 py-3 bg-romantic-500 text-white rounded-full font-semibold hover:bg-romantic-600 transition-colors duration-300 shadow-lg"
            >
              Take Quiz Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
