import React, { useState } from 'react';
import {questions3} from './Questions';
import { useNavigate } from "react-router-dom";
import './Quiz.css'
import { PopupQuiz3 } from './Popup';
import background from '../img/wall.png';

export default function Quiz3() {
    let navigate = useNavigate();
    //is Open for ? Popup Box
    const [isOpen, setIsOpen] = useState(false);
    const TogglePopup = () => {
        setIsOpen(!isOpen);
    }
    const [answerSalesman, setAnswerSalesman] = useState(0);
    const [currentQuestion, newQuestion] = useState(0);
    const [score, newScore] = useState(0);
    const [tellScore, newTellStore] = useState(false);
    const nextQuestion = currentQuestion + 1;
    const nextAnswerSalesman = answerSalesman + 1;
    //Bei korrekter Antwort wird Score+1 gesetzt
    const whenCorrectAnswer = (correctness) => {
        if (correctness) {
            newScore(score + 1);
            (setIsOpen(false))
        }
        else {
            TogglePopup()
            nextQuestion = currentQuestion;
        }
        // Holt sich nächste Frage, bis 4 Fragen gestellt worden sind, danach Score mitteilen
        
        if (nextQuestion < 4) {
            newQuestion(nextQuestion);
            setAnswerSalesman(nextAnswerSalesman);
        }
        else {
            newTellStore(true);
        }
    };
    //Trennt guten von schlechten Score und lässt wiederholen bei zu schlechten bzw. weitermachen bei gutem
    return (
       
            <div style={{
                backgroundImage: `url(${background})`, backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
            }}>
                <div className='boxQuiz3'>
                {isOpen && <PopupQuiz3 handleClose={TogglePopup} content={<div><p><b>Eh?</b><br /><i>(Hä?)</i></p></div>} />}
                    {tellScore ? (
                        <div className='score'>
                            {(score < 3) ?
                                (<p>Du hast {score} von 4 Punkten erreicht, übe lieber noch etwas <button className='button' onClick={() => {
                                    navigate('/level1')
                                }}>Level 1 wiederholen</button></p>) :
                                (<p>Du hast es geschafft, herzlichen Glückwunsch!
                                    Hoffentlich konntest Du viel lernen und hattest Spaß!<br /><button className='button' onClick={() => {
                                    navigate('/')
                                }}>Neustart</button>
                                <button className='button' onClick={() => {
                                    navigate('/credits')
                                }}>Credits</button>
                                </p>)}
                                
                        </div>
                    ) : (
                        <>
                            <div>
                                <div className='question'>{questions3[currentQuestion].question}</div>
                                <div className='answerSalesman3'>{questions3[answerSalesman].answerSalesman}</div>
                            </div>
                            <div>
                                {questions3[currentQuestion].answerOptions.map((answerOptions) => (
                                    <button className='buttonQuiz3' onClick={() => whenCorrectAnswer(answerOptions.correctness)}>{answerOptions.answer}</button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        
    );
}