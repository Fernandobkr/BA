import "./Level.css";
import { useState } from 'react';
import styled from 'styled-components';
import { Popup } from '../Components/Popup';
import { useNavigate } from "react-router-dom";
import background from '../img/bgLv2.png';
import avatar from '../img/avatar-pink.png';
import questionmark from '../img/questionmark.png';
import arrow from '../img/arrow.png';

const Level2 = () => {
    let navigate = useNavigate();
    //const [left, setLeft] = useState(50);
    //const [top, setTop] = useState(500);
    const [bottom, setBottom] = useState(500);
    const [right, setRight] = useState(1750);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(true);
    const [isOpen6, setIsOpen6] = useState(false); //zusatzbox1
    const [isOpen7, setIsOpen7] = useState(false); //zusatzbox1
    //Textinhalt Learningbox1
    const learning1 =
        <>
            <div className="learningbox">
                <b>Vokabelbox 1</b>
                <p> Ich heiße.. - Mi chiamo/a..<br />
                    Ich hätte gerne.. – Vorrei..<br />
                    Wie geht es Dir? – Come stai?<br />
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
                    Guten Appetit! - Buon appetito! <br />
                    Was kostet das? - Quanto costa?<br />
                    Eine Pizza - Una pizza<br />
                    Eine Cola - Una cola<br /><br />
                    <p className="kursiv">Vergiss nicht das Fenster mit einem Doppelklick zu schließen!</p>
                </p>
            </div> </>

    const learning3 =
        <>
            <div className="learningbox">
                <b>Vokabelbox 3</b>
                <p>Frau - Signora<br />
                    Mann – Uomo<br />
                    Mädchen  - Ragazza<br />
                    Junge  - Ragazzo
                </p>
            </div> </>

    const learning4 =
        <>
            <div className="learningbox">
                <b>Vokabelbox 4</b>
                <p>Ein Stück Pizza - Una fetta di pizza<br />
                    Wie geht es Dir? - Come stai?<br />
                    Mir geht es gut - Sto bene<br />
                    Lecker - Delizioso<br />
                    Sieht lecker aus - Sembra delizioso
                </p>
            </div> </>

    const learning5 =
        <>
            <div className="learningbox">
                <b>Vokabelbox 5</b>
                <p>Hallo/Tschüss – Ciao<br />
                Sieht lecker aus - Sembra delizioso<br />
                    Danke – Grazie<br />
                    Ich heiße.. - Mi chiamo/a..<br />
                    Ich hätte gerne.. – Vorrei..
                </p>
            </div> </>

    const quizPopUp =
        <>
            <div className="learningbox">
                <b>2. Lektion beendet</b>
                <p>Sehr schön, Du hast nun auch die zweite Lektion beendet.
                    Hoffentlich konntest Du viel Lernen! Du hast jetzt sicherlich Hunger, Lust auf Pizza?<br />
                    Bestelle Dir eine im 2. Quiz!
                </p>
                <center>
                    <Button onClick={() => {
                        navigate('/quiz2')
                    }}>Zum Quiz</Button></center>
            </div> </>

    const greeting =
        <>
            <div className="learningbox">
                <b>Herzlich Willkommen in Level 2</b>
                <p>Du hast nur ein paar Äpfel zum Frühstück gehabt und willst jetzt zum Mittag ein leckeres Stück Pizza.
                    Doch leider weißt Du nicht, wie man auf italienisch ein Stück Pizza bestellt.
                    Zum Glück gibt es die Vokabelboxen, die Dir dabei helfen können!
                    Fliege hin und lerne neue Basics.<br /><br />
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
            setIsOpen2(true);
            setIsOpen1(false);
            setIsOpen3(false);
            setIsOpen4(false);
            setIsOpen5(false);
            setIsOpen6(false);
            setIsOpen7(false);
        }

        if ((right === 520 || right === 510 || right === 500 || right === 490 || right === 480 || right === 470 || right === 460) && (bottom === 720 || bottom === 710 || bottom === 700 || bottom === 690 || bottom === 680 || bottom === 670 || bottom === 660 || bottom === 650)) {
            setIsOpen3(true);
            setIsOpen1(false);
            setIsOpen2(false);
            setIsOpen4(false);
            setIsOpen5(false);
            setIsOpen6(false);
            setIsOpen7(false);
        }

        if ((right === 380 || right === 370 || right === 360 || right === 350 || right === 340 || right === 330 || right === 320 || right === 310 || right === 300 || right === 290) && (bottom === 380 || bottom === 370 || bottom === 360 || bottom === 350 || bottom === 340 || bottom === 330 || bottom === 320 || bottom === 310 || bottom === 300 || bottom === 290 || bottom === 280 || bottom === 270)) {
            setIsOpen4(true);
            setIsOpen1(false);
            setIsOpen2(false);
            setIsOpen3(false);
            setIsOpen5(false);
            setIsOpen6(false);
            setIsOpen7(false);
        }

        if ((right === 1320 || right === 1310 || right === 1300 || right === 1290 || right === 1280 || right === 1270 || right === 1260 || right === 1250) && (bottom === 420 || bottom === 410 || bottom === 400 || bottom === 390 || bottom === 380 || bottom === 370 || bottom === 360 || bottom === 350)) {
            setIsOpen1(false);
            setIsOpen2(false);
            setIsOpen3(false);
            setIsOpen4(false);
            setIsOpen5(false);
            setIsOpen6(true);
            setIsOpen7(false);
        }
        if ((right === 520 || right === 510 || right === 500 || right === 490 || right === 480 || right === 470 || right === 460 || right === 450) && (bottom === 370 || bottom === 360 || bottom === 350 || bottom === 340 || bottom === 330 || bottom === 320 || bottom === 310 || bottom === 300)) {
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
            <div style={{ right: right, bottom: bottom, }}></div>
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

export default Level2;

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
    margin: 10px;w
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
    bottom: 400px;
    right: 1300px;
    `;

const Infobox5 = styled.div` 
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 350px;
    right: 500px;
    `;

const Arrow = styled.div` 
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 300px;
    right: 300px;
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

