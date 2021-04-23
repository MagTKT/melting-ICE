import React, { useState } from "react";

// reactstrap components
import { Container } from "reactstrap";

function Quiz() {
  let quizz = React.createRef();
  const questions = [
		{
			questionText: 'Quelle serait la température moyenne de la Terre sans effet de serre ?',
			answerOptions: [
				{ answerText: '	15 °C', isCorrect: false },
				{ answerText: '	0 °C', isCorrect: false },
				{ answerText: ' -18 °C', isCorrect: true },
				{ answerText: 'Je ne sais pas ', isCorrect: false },
			],
		},
		{
			questionText: 'Parmi les gaz suivants, lesquel n"est pas un gaz à effet de serre ?',
			answerOptions: [
				{ answerText: 'le dioxyde de carbone', isCorrect: false },
				{ answerText: 'le dioxygène', isCorrect: true },
				{ answerText: 'le méthane', isCorrect: false },
				{ answerText: 'l"ozone', isCorrect: false },
			],
		},
		{
			questionText: 'Quel est l’ordre de grandeur de l’augmentation de la température moyenne de la Terre depuis 1750 ?',
			answerOptions: [
				{ answerText: '1 °C', isCorrect: true },
				{ answerText: '0,1 °C', isCorrect: false },
				{ answerText: '10 °C', isCorrect: false },
				{ answerText: 'Je ne sais pas', isCorrect: false },
			],
		},
		{
			questionText: 'Les modèles climatiques prévoient d’ici à 2100 une augmentation de la température de...',
			answerOptions: [
				{ answerText: '2 °C', isCorrect: false },
				{ answerText: '4 °C', isCorrect: false },
				{ answerText: '6 °C', isCorrect: false },
				{ answerText: 'un large éventail de températures', isCorrect: true },
			],
		},
	];
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
        <Container>
          <div className="motto text-center">
            <h1>Petit Quiz</h1>
            <br />
          </div>
          <div className='card'>
          {showScore ? (
            <div className='score-section'>
              Votre score est de {score} point sur {questions.length} questions.
            </div>
			        ) : (
				        <>
                <div className='question-section'>
                  <div className='question-count'>
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                  </div>
                  <div className='question-text'>{questions[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                  {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                  ))}
                </div>
              </>
            )}
          </div>
        </Container>
  );
}

export default Quiz;