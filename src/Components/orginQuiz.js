import React, { useState } from 'react';
import questions from './Questions';
import { useNavigate } from "react-router-dom";
import './Quiz1.css'
import { Popup } from './Popup';

export default function Quiz() {
    let navigate = useNavigate();
    //is Open for ? Popup Box
    const [isOpen, setIsOpen] = useState(false);
    const TogglePopup = () => {
        setIsOpen(!isOpen);
    }
    const [currentQuestion, newQuestion] = useState(0);
    const [score, newScore] = useState(0);
    const [tellScore, newTellStore] = useState(false);
    //Bei korrekter Antwort wird Score+1 gesetzt
    const whenCorrectAnswer = (correctness) => {
        if (correctness) {
            newScore(score + 1);
        }
        else {
            TogglePopup()
            nextQuestion = currentQuestion
        }
        // Holt sich nächste Frage, bis 4 Fragen gestellt worden sind, danach Score mitteilen
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < 4) {
            newQuestion(nextQuestion);
        }
        else {
            newTellStore(true);
        }
    };
    //Trennt guten von schlechten Score und lässt wiederholen bei zu schlechten bzw. weitermachen bei gutem
    return (
       
           

            <div className='background'>
                <div className='box'>
                {isOpen && <Popup handleClose={TogglePopup} content={'hi'} />}
                    {tellScore ? (
                        <div className='score'>
                            {(score < 3) ?
                                (<p>Du hast {score} von 4 Punkten erreicht, übe lieber noch etwas <button className='button' onClick={() => {
                                    navigate('/level1')
                                }}>Level 1 wiederholen</button></p>) :
                                (<p>Sehr gut, Du hast {score} von 4 Punkten erreicht. Jetzt kannst Du weiter zu Level 2<br /><button className='button' onClick={() => {
                                    navigate('/level2')
                                }}>Zu Level 2</button></p>)}
                        </div>
                    ) : (
                        <>
                            <div>
                                <div className='question'>{questions[currentQuestion].question}</div>
                            </div>
                            <div>
                                {questions[currentQuestion].answerOptions.map((answerOptions) => (
                                    <button className='button' onClick={() => whenCorrectAnswer(answerOptions.correctness)}>{answerOptions.answer}</button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        
    );
}