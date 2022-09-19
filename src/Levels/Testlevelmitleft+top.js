import "./Level.css";
import { useState } from 'react';
import styled from 'styled-components';
import { Popup } from '../Components/Popup';
import { useNavigate } from "react-router-dom";
import background from '../img/background-lv1_2.jpg';
import avatar from '../img/avatar-pink.png';
import questionmark from '../img/questionmark.png';
import arrow from '../img/arrow.png';

const Level1 = () => {
    let navigate = useNavigate();
    const [left, setLeft] = useState(50);
    const [top, setTop] = useState(500);
    const [bottom, setBottom] = useState(0);
    const [right, setRight] = useState(0);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(true);
    //Textinhalt Learningbox1
    const learning1 =
        <>
            <div>
                <b>Lernbox 1</b>
                <p>Ja – sì („si“) <br />
                    Nein – nò („no“) <br />
                    Hallo – ciao („tschau“) <br />
                    Tschüss – ciao („tschau“) <br />
                    Guten Tag, Guten Morgen – Buongiorno! („Bonschorno“) <br />
                    Guten Abend – Buonasera! („Bonasera“)</p>
            </div> </>

    const learning2 =
        <>
            <div>
                <b>Lernbox 2</b>
                <p>Bitte – per favore („per fawore“)<br />
                    Danke – grazie („grazi-e“)<br />
                    Es tut mir leid! – Scusa! („skusa“)<br />
                    Ich heiße… – Mi chiamo/a… („me kiamo/a“)<br />
                    Guten Tag, Guten Morgen – Buongiorno! („Bonschorno“) <br />
                    Hallo – ciao („tschau“) <br />
                </p>
            </div> </>

    const learning3 =
        <>
            <div>
                <b>Lernbox 3</b>
                <p>Bitte – per favore („per fawore“)<br />
                    Danke – grazie („grazi-e“)<br />
                    Es tut mir leid! – Scusa! („skusa“)<br />
                    Ich heiße… – Mi chiamo/a… („me kiamo/a“)<br />
                    Guten Tag, Guten Morgen – Buongiorno! („Bonschorno“) <br />
                    Hallo – ciao („tschau“) <br />
                </p>
            </div> </>

    const quizPopUp =
        <>
            <div>
                <b>1. Lektion beendet</b>
                <p>Sehr schön, Du hast Deine erste Lektion beendet.
                    Hoffentlich hat sie Dir Spaß gemacht und Du hast etwas gelernt.<br />
                    Um zweiteres zu prüfen, gehen wir jetzt über zum Quiz, wo Du abgefragt wirst.
                    Viel Spaß und Erfolg!
                </p>
                <br />
                <center>
                    <Button onClick={() => {
                        navigate('/quiz')
                    }}>Zum Quiz</Button></center>
            </div> </>

    const greeting =
        <>
            <div>
                <b>Herzlich Willkommen in Level 1</b>
                <p>Du bist im wunderschönen Italien und willst in den Supermarkt.
                    Leider ist das Dein erster Besuch in Iatlien und daher hast Du noch keine Italienischkennnisse.
                    Das ist aber kein Problem, fliege als erstes zu den Fragezeichen-Boxen um Vokabeln zu lernen.
                    Wenn Du Dich bereit fühlst, fliege auf die Eingangstür des Supermarktes zu und kaufe ein.
                </p>
            </div> </>

    //Pop ups öffnen(einzeln), anfangs sind zu

    const TogglePopup1 = () => {
        setIsOpen1(!isOpen1);
    }

    const TogglePopup2 = () => {
        setIsOpen2(!isOpen2);
    }

    const TogglePopup3 = () => {
        setIsOpen3(!isOpen3);
    }

    const TogglePopup4 = () => {
        setIsOpen4(!isOpen4);
    }

    const TogglePopup5 = () => {
        setIsOpen5(!isOpen5);
    }


    // onKeyDown handler function
    const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
        //console.log(event.code);        
            if ((event.code === "ArrowUp") && (top > 0 )) {
                setTop((top) => top - 10);
            }

            if ((event.code === "ArrowDown") ) {
                setTop((top) => top + 10);
            }

            if ((event.code === "ArrowLeft") && (left > 0 )){
                setLeft((left) => left - 10);
            }

            if (event.code === "ArrowRight") {
                setLeft((left) => left + 10);
                setRight((right) => right + 0);
            }

            //rechts hoch
            if (event.code === "ArrowUp" && event.code === "ArrowRight") {
                setTop((top) => top - 10);
                setLeft((left) => left + 10);
            }
            // rechts runter
            if (event.code === "ArrowDown" && event.code === "ArrowRight") {
                setTop((top) => top + 10);
                setLeft((left) => left + 10);
            }
            //links hoch
            if (event.code === "ArrowUp" && event.code === "ArrowLeft") {
                setTop((top) => top - 10);
                setLeft((left) => left - 10);
            }

            //links runter
            if (event.code === "ArrowDown" && event.code === "ArrowLeft") {
                setTop((top) => top - 10);
                setLeft((left) => left - 10);
            }
        if (left === 300 && (top === 320 || top === 310 || top === 300 || top === 290 || top === 280 || top === 270 || top === 260 || top === 250)) {
            TogglePopup1()
        }
        if (left === 800 && (top === 420 || top === 410 || top === 400 || top === 390 || top === 380 || top === 370 || top === 360 || top === 350)) {
            TogglePopup2()
        }

        if (left === 1200 && (top === 40 || top === 30 || top === 20 || top === 10 || top === 0 || top === -10)) {
            TogglePopup3()
        }

        if ((right === 140 || right === 130 || right === 120 || right === 110 || right === 100) && (bottom === 200 || bottom === 190 || bottom === 180 || bottom === 170 || bottom === 160 || bottom === 150)) {
            TogglePopup4()
        }
    };

    return (
        <div style={{
            backgroundImage: `url(${background})`, backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
        }} tabIndex={0} onKeyDown={keyDownHandler}>
            <div style={{ top: top, left: left, right: right, bottom: bottom, }}></div>
            {isOpen1 && <Popup handleClose={TogglePopup1} content={learning1} />}
            {isOpen2 && <Popup handleClose={TogglePopup2} content={learning2} />}
            {isOpen3 && <Popup handleClose={TogglePopup3} content={learning3} />}
            {isOpen4 && <Popup handleClose={TogglePopup4} content={quizPopUp} />}
            {isOpen5 && <Popup handleClose={TogglePopup5} content={greeting} />}
            <Avatar positionleft={left} positiontop={top} positionbottom={bottom} positionright={right} style={{ backgroundImage: `url(${avatar})` }} />
            <Infobox1 style={{ backgroundImage: `url(${questionmark})` }} />
            <Infobox2 style={{ backgroundImage: `url(${questionmark})` }} />
            <Infobox3 style={{ backgroundImage: `url(${questionmark})` }} />
            <Arrow style={{ backgroundImage: `url(${arrow})` }} />
        </div>
    );
};

export default Level1;

const Avatar = styled.div`
    position: absolute;
    background-image: {avatar};    
    border-radius: 10px;
    top: ${(props) => props.positiontop}px;
    left: ${(props) => props.positionleft}px;
    bottom: ${(props) => props.positionbottom}px;
    right: ${(props) => props.positionright}px;
    width: 51px;
    height: 50px;
    z-index: 3;
    margin: 10px;w
    `;

const Infobox1 = styled.div` 
    width: 40px;
    height: 40px;
    position: absolute;
    top:  300px;
    left: 300px;
    `;

const Infobox2 = styled.div` 
    width: 40px;
    height: 40px;
    position: absolute;
    top: 400px;
    left: 800px;
    `;

const Infobox3 = styled.div` 
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    left: 1200px;
    `;

const Arrow = styled.div` 
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 180px;
    right: 120px;
    `;

const Button = styled.div` 
    font: inherit;
    cursor: pointer;
    padding: 0.5rem 2rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    width: 150px; 
    `;

