import { useNavigate } from "react-router-dom";
import styled from 'styled-components'


export const StartScreen = ({onStartClick}) => {
    let navigate = useNavigate();
    return (
        <Style>
            <br />
            <Box><h2>Lerne Italienisch in ein paar wenigen Schritten</h2>
            <p>Herzlich willkommen zu meinem Lernspiel, das Ziel des Spieles ist, dass Du so viel Italienisch lernst,<br />
                dass Du bei Deinem kommenden Besuch in Italien die wichtigsten Basics kannst.<br />
                <br />
                <b>Spielablauf:</b><br />
                Mit den Pfeiltasten kannst Du rumfliegen, wenn Du mal nicht fliegen kannst, klicke einmal auf den Bildschrim!<br />
                Jedesmal, wenn Du zu einer Fragezeichenbox kommst, erscheinen Vokabeln.<br />
                Schaue Dir dieses ganz genau an und wenn Du alles verinnerlicht hast, schließe das Fenster <b>mit einem Doppelklick</b> und fliege weiter zur darrauffolgenden Fragezeichenbox.<br />
                Aber pass auf und schau es Dir ganz genau an, am Ende gibt es eine Konversation, in der Du sehen kannst, ob Du die Vokabeln wirklich gelernt hast.<br />
                <b>Viel Spaß!</b><br />
            </p>
            <form>
                <Button onClick={() => {
                    navigate('/level1')
                }}>Jetzt spielen</Button>
            </form>
            </Box>
        </Style>
    );
};

const Style = styled.div`
    margin: 0 auto;
    display: flex;
    font-size: 25px;
    flex-direction: column;
	align-items:center;
    min-height: 100vh;
    min-width: 100vh;
    background-image: linear-gradient(60deg, #fA8072, #ffebb3);
    `;

const Box = styled.div`
display: flex;
    flex-direction: column;
	align-items:center;
        background-color: #ecffeb;
        padding: 1rem;
        width: 120rem;
        max-width: 70%;
        max-height: 70%;
        text-align: center;
        border-radius: 12px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
        font-family: inherit;
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
    width: 150px;  `;