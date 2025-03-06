import {Title, Arch1, StyledH3} from "../ReuseCode/Reuse.tsx";
import styled from "styled-components";
import Calculator from "./Calculator.tsx";

const Col = styled.div`
    width: 50%;
    margin: 1vh 1vw;

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin: auto;
        text-align: center;
        align-items: center;
        
        p {
            width: 100%;
        }
    }
`;
const Sa = styled.a`
    display: block;
    text-decoration: none;
    color: whitesmoke;
    font-size: calc(1px + 0.98vw);
    margin-left: 2vw;
    padding-bottom: 1vh;  
    
    @media screen and (max-width: 1000px) {
        margin: 0 2%;
        font-size: calc(5px + 1.5vw);
        align-items: center;
        text-align: center;
    }
`;

export default function Projects() {
    return (
        <>
            <Title>Personal and University Projects</Title>
            <Arch1>
                <Col>
                    <StyledH3> <u><em>University Projects: Python and Java</em></u> </StyledH3>
                    <Sa href="https://github.com/ljbrown4/university-projects" target="_blank"> <i><b><u>link:</u></b> University
                        Projects</i> </Sa>
                    <p> In-class Projects for Intro to Computer Science I and II. <b>Including:</b> <br/> Connect Four <br/> Sudoku <br/> TTS (Stock Analysis Program)
                        <br/> Final Project (Text Classification) <br/></p>
                </Col>
                <Col>
                    <StyledH3> <u><em>One Stop Calculator: Personal Project</em></u> </StyledH3>
                    <Sa href="https://github.com/ljbrown4/personal-projects" target="_blank">
                        <i><b><u>link:</u></b> Personal Projects</i> </Sa>
                    <p> Features five main modes: Standard Calculator for basic
                        arithmetic, Scientific Calculator for advanced calculations, Unit Converter for measurement
                        conversions, Tip Calculator for gratuity calculations, and Currency Converter for exchange rate
                        computations.</p>
                </Col>
            </Arch1>
            <Calculator />
        </>
    );
}