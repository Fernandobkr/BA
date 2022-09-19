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
    //const [left, setLeft] = useState(50);
    //const [top, setTop] = useState(500);
    const [bottom, setBottom] = useState(500);
    const [right, setRight] = useState(1750);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false); //Quizbox
    const [isOpen5, setIsOpen5] = useState(true); //Anfangsbox
    const [isOpen6, setIsOpen6] = useState(false); //zusatzbox1
    const [isOpen7, setIsOpen7] = useState(false); //zusatzbox1
    //Textinhalt Learningbox1
    const learning1 =
        <>
            <div className="learningbox">
                <b>Vokabelbox 1</b>
                <p>Ja – Sì<br />
                    Nein – No<br />
                    Hallo/Tschüss – Ciao<br />
                    Bitte – Per favore<br />
                    Danke – Grazie<br />
                    Verzeihung – Scusi<br /><br />
                    <p className="kursiv">Vergiss nicht das Fenster mit einem Doppelklick zu schließen!</p>
                </p>
            </div> </>

    const learning2 =
        <>
            <div className="learningbox">
                <b>Vokabelbox 2</b>
                <p>
                    Die Zitronen - I limoni<br />
                    Die Wassermelone - L'anguria<br />
                    Die Kirschen - Le ciliegie<br />
                    Die Orangen - Le arance<br />
                    Der Apfel - La mela<br /><br />
                    <p className="kursiv">Vergiss nicht das Fenster mit einem Doppelklick zu schließen!</p>
                </p>
            </div> </>

    const learning3 =
        <>
            <div className="learningbox">
                <b>Vokabelbox 3</b>
                <p>Eins - Uno<br />
                    Zwei - Due<br />
                    Drei - Tre<br />
                    Vier - Quattro<br />
                    Fünf - Cinque<br />
                </p>
            </div> </>

    const learning4 =
        <>
            <div className="learningbox">
                <b>Vokabelbox 4</b>
                <p>Ich nehme... - Lo prendo...<br />
                    Wie geht es Dir? - Come stai?<br />
                    Mir geht es gut - Sto bene<br />
                    Die Orangen - Le arance<br />
                    Der Apfel - La mela
                </p>
            </div> </>

    const learning5 =
        <>
            <div className="learningbox">
                <b>Vokabelbox 5</b>
                <p>Hallo/Tschüss – Ciao<br />
                    Bitte – Per favore <br />
                    Danke – Grazie<br />
                    Eins - Uno<br />
                    Zwei - Due<br />
                    Drei - Tre
                </p>
            </div> </>

    const quizPopUp =
        <>
            <div className="learningbox">
                <b>1. Lektion beendet</b>
                <p>Sehr schön, Du hast Deine erste Lektion beendet.
                    Hoffentlich hat sie Dir Spaß gemacht und Du hast etwas gelernt.<br />
                    Um zweiteres zu prüfen, gehen wir jetzt zum Supermarkt, wo Du etwas kaufen wirst.
                    Übersetze die Dir angezeigten Wörter ins italienische.
                    Viel Spaß und Erfolg!
                </p>
                <center>
                    <Button onClick={() => {
                        navigate('/quiz1')
                    }}>Zum Quiz</Button></center>
            </div> </>

    const greeting =
        <>
            <div className="learningbox">
                <b>Herzlich Willkommen in Level 1</b>
                <p>Du bist im wunderschönen Italien und willst etwas zum Frühstück kaufen.
                    Leider ist dies Dein erster Besuch in Italien und Du kannst noch kein Wort italienisch.
                    Das ist aber kein Problem, fliege als erstes zu den Vokabelboxen um ein paar neue Wörter zu lernen.
                    Wenn Du Dich bereit fühlst, fliege zum Supermarkt und kaufe dort ein.<br /><br />
                    <p className="kursiv">Vergiss nicht das Fenster mit einem Doppelklick zu schließen!</p>
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

    const TogglePopup6 = () => {
        setIsOpen6(!isOpen6);
    }

    const TogglePopup7 = () => {
        setIsOpen7(!isOpen7);
    }



    // onKeyDown handler function
    const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
        //console.log(event.code);        
        if ((event.code === "ArrowUp")) {
            setBottom((bottom) => bottom + 10);
        }

        if ((event.code === "ArrowDown") && (bottom > 0)) {
            setBottom((bottom) => bottom - 10);
        }

        if ((event.code === "ArrowLeft")) {
            setRight((right) => right + 10);
        }

        if ((event.code === "ArrowRight") && (right > 0)) {
            setRight((right) => right - 10);
        }

 /*
        //rechts hoch
        if (event.code === "ArrowUp" && event.code === "ArrowRight") {
            setBottom((bottom) => bottom + 10);
            setRight((right) => right - 10);
        }
        // rechts runter
        if (event.code === "ArrowDown" && event.code === "ArrowRight") {
            setBottom((bottom) => bottom - 10);
            setRight((right) => right - 10);
        }
        //links hoch
        if (event.code === "ArrowUp" && event.code === "ArrowLeft") {
            setBottom((bottom) => bottom + 10);
            setRight((right) => right + 10);
        }

        //links runter
        if (event.code === "ArrowDown" && event.code === "ArrowLeft") {
            setBottom((bottom) => bottom - 10);
            setRight((right) => right + 10);
        }
*/
        if ((right === 1620 || right === 1610 || right === 1600 || right === 1590 || right === 1580 || right === 1570 || right === 1560 || right === 1550) && (bottom === 620 || bottom === 610 || bottom === 600 || bottom === 590 || bottom === 580 || bottom === 570 || bottom === 560 || bottom === 550)) {
            setIsOpen1(true);
            setIsOpen2(false);
            setIsOpen3(false);
            setIsOpen4(false);
            setIsOpen5(false);
            setIsOpen6(false);
            setIsOpen7(false);
        }
        if ((right === 1010 || right === 1000 || right === 990 || right === 980 || right === 970 || right === 960) && (bottom === 720 || bottom === 710 || bottom === 700 || bottom === 690 || bottom === 680 || bottom === 670 || bottom === 660 || bottom === 650)) {
            setIsOpen1(false);
            setIsOpen2(true);
            setIsOpen3(false);
            setIsOpen4(false);
            setIsOpen5(false);
            setIsOpen6(false);
            setIsOpen7(false);
        }

        if ((right === 520 || right === 510 || right === 500 || right === 490 || right === 480 || right === 470 || right === 460) && (bottom === 720 || bottom === 710 || bottom === 700 || bottom === 690 || bottom === 680 || bottom === 670 || bottom === 660 || bottom === 650)) {
            setIsOpen1(false);
            setIsOpen2(false);
            setIsOpen3(true);
            setIsOpen4(false);
            setIsOpen5(false);
            setIsOpen6(false);
            setIsOpen7(false);
        }

        if ((right === 200 || right === 190 || right === 180 || right === 170 || right === 160 || right === 150 || right === 140 || right === 130 || right === 120 || right === 110) && (bottom === 260 || bottom === 250 || bottom === 240 || bottom === 230 || bottom === 220 || bottom === 210 || bottom === 200 || bottom === 190 || bottom === 180 || bottom === 170 || bottom === 160 || bottom === 150)) {
            setIsOpen1(false);
            setIsOpen2(false);
            setIsOpen3(false);
            setIsOpen4(true);
            setIsOpen5(false);
            setIsOpen6(false);
            setIsOpen7(false);
        }
        if ((right === 1320 || right === 1310 || right === 1300 || right === 1290 || right === 1280 || right === 1270 || right === 1260 || right === 1250) && (bottom === 220 || bottom === 210 || bottom === 200 || bottom === 190 || bottom === 180 || bottom === 170 || bottom === 160 || bottom === 150)) {
            setIsOpen1(false);
            setIsOpen2(false);
            setIsOpen3(false);
            setIsOpen4(false);
            setIsOpen5(false);
            setIsOpen6(true);
            setIsOpen7(false);
        }
        if ((right === 520 || right === 510 || right === 500 || right === 490 || right === 480 || right === 470 || right === 460 || right === 450) && (bottom === 220 || bottom === 210 || bottom === 200 || bottom === 190 || bottom === 180 || bottom === 170 || bottom === 160 || bottom === 150)) {
            setIsOpen1(false);
            setIsOpen2(false);
            setIsOpen3(false);
            setIsOpen4(false);
            setIsOpen5(false);
            setIsOpen6(false);
            setIsOpen7(true);
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
            <div style={{ right: right, bottom: bottom,}}></div>
            {isOpen1 && <Popup handleClose={TogglePopup1} content={learning1} />}
            {isOpen2 && <Popup handleClose={TogglePopup2} content={learning2} />}
            {isOpen3 && <Popup handleClose={TogglePopup3} content={learning3} />}
            {isOpen4 && <Popup handleClose={TogglePopup4} content={quizPopUp} />}
            {isOpen5 && <Popup handleClose={TogglePopup5} content={greeting} />}
            {isOpen6 && <Popup handleClose={TogglePopup6} content={learning4} />}
            {isOpen7 && <Popup handleClose={TogglePopup7} content={learning5} />}
            <Avatar positionbottom={bottom} positionright={right} style={{ backgroundImage: `url(${avatar})` }} />
            <Infobox1 style={{ backgroundImage: `url(${questionmark})` }} />
            <Infobox2 style={{ backgroundImage: `url(${questionmark})` }} />
            <Infobox3 style={{ backgroundImage: `url(${questionmark})` }} />
            <Infobox4 style={{ backgroundImage: `url(${questionmark})` }} />
            <Infobox5 style={{ backgroundImage: `url(${questionmark})` }} />
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
    bottom:  ${(props) => props.positionbottom}px;
    left: ${(props) => props.positionleft}px;
    right:  ${(props) => props.positionright}px;
    width: 51px;
    height: 50px;
    z-index: 3;
    margin: 10px;
    `;

const Infobox1 = styled.div` 
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 600px;
    right: 1600px;
    `;

const Infobox2 = styled.div` 
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 700px;
    right: 1000px;
    `;

const Infobox3 = styled.div` 
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 700px;
    right: 500px;
    `;

const Infobox4 = styled.div` 
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 200px;
    right: 1300px;
    `;

const Infobox5 = styled.div` 
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 200px;
    right: 500px;
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
    border: 1px solid #a8eda1;
    background-color: #a8eda1;
    color: black;
    border-radius: 12px;
    margin-right: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    width: 150px; 
    `;

