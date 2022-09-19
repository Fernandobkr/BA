import { useNavigate } from "react-router-dom";
import styled from 'styled-components'


const Credits = ({ onStartClick }) => {
    let navigate = useNavigate();
    return (
        <Style>
            <br />
            <Box><h2>Credits</h2>
                <p>Dieses Spiel wurde als Teil einer Bachelorarbeit entwickelt.<br />
                    Ein großer Dank geht an meinen Betreuer Dr. Jan Schneider für die Hilfe und hilfreichen Tipps!<br /><br />
                    <b>Programmierung:</b> Fernando Bokari<br />
                    <b>Design:</b> Fernando Bokari<br />
                    <b>Übersetzungen:</b> Fernando Bokari<br /><br />
                    <b>Bilder auf allen Leveln:</b><br />
                    <b>Verkäufer:innen:</b> <a href="https://www.freepik.com/vectors/pixel-people">Pixel people vector created by freepik - www.freepik.com</a><br />
                    <b>Favicon</b>: Copyright 2020 Twitter, Inc and other contributors<br /><br />
                    <b>Bilder Level 1:</b><br />
                    <b>Bäume:</b> <a href="https://www.freepik.com/vectors/tree">Tree vector created by alekksall - www.freepik.com</a><br />
                    <b>Shop:</b> @florassence<br />
                    <b>Früchte:</b> <a href="https://www.freepik.com/vectors/fruit-icon">Fruit icon vector created by rawpixel.com - www.freepik.com</a><br />
                    <b>Essen:</b> <a href="https://www.freepik.com/vectors/food-icon">Food icon vector created by freepik - www.freepik.com</a><br /><br />
                    <b>Bilder Level 2:</b><br />
                    <b>Essensstand:</b> <a href="https://www.freepik.com/vectors/food-stand">Food stand vector created by freepik - www.freepik.com</a><br />
                    <b>Bänke, Tisch und Strassenlampen:</b> <a href="https://dreamgryphon.itch.io/landscapes">dreamgryphon.itch.io/landscapes</a><br /><br />
                    <b>Bilder Level 3:</b><br />
                    <b>Häuser und Mond:</b> <a href="https://www.vecteezy.com/free-vector/pixel-building">Pixel Building Vectors by Vecteezy</a>
                </p>
                <form>
                    <Button onClick={() => {
                        navigate('/')
                    }}>Spiel wiederholen</Button>
                </form>
            </Box>
        </Style>
    );
};

export default Credits;

const Style = styled.div`
    margin: 0 auto;
    display: flex;
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
        width: 70rem;
        max-width: 95%;
        text-align: center;
        border-radius: 12px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
        font-family: inherit;
        font-size:20px;
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