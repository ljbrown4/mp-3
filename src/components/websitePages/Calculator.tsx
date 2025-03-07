import styled from "styled-components";
import {useState, useEffect} from "react";

const Calc = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 2vh 2vw;
    background-color: #c5b7d3;
    align-items: center;
    color: #3a2c3a;
    
    h3 {
        padding-bottom: 2%;
    }
`;

const StyledInput = styled.input`
    border-color: #8a728a;
    border-radius: 5px;
    color: #6c576c;
    background-color: lavender;
    font-weight: bold;
    
    @media screen and (max-width: 1000px) {
        font-size: calc(8px + 1.9vw);
        margin: auto;
        padding:0 0 0 1vw;
    }
`;
const StyledLabel = styled.label` //placeholder wasn't showing
    color: #3a2c3a;
    font-weight: bold;
`;

const Result = styled.input`
    width: 80%;
    height: 4vh;
    background-color: lavender;
    padding: 2px 10px;
    color: #320032;
    border: 2px solid #3a2c3a;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2vh auto;
    font-weight: bold;
    //padding: 1%;
    
    @media screen and (max-width: 1000px) {
        font-size: calc(8px + 1.9vw);
        padding: 5vw;
        height: 2vh;
        margin: auto;
    }
`;

const StyledButton = styled.button`
    background-color: lavender;
    border-color: #8a728a;
    color: #3a2c3a;
    font-weight: bold;
    padding: 1vh 3vw;
    border-radius: 50px;
    
    @media screen and (max-width: 1000px) {
        font-size: calc(6px + 1.9vw);
        padding: 1vh 2.5vw;
    }
`;

export default function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const [op, setOp] = useState('');
    const [ans, setAns] = useState('');

    useEffect(() => {
        const n1 = Number(num1);
        const n2 = Number(num2);


        setAns(
            op === "add" ? String(n1 + n2) :
                op === "sub" ? String(n1 - n2) :
                    op === "mul" ? String(n1 * n2) :
                        op === "div" ? (n2 === 0 ? "Can't divide by 0" : String(n1 / n2)) :
                            op === "power" ? String(n2 < 0 ? 1 / Math.pow(n1, -n2) : Math.pow(n1, n2)) :
                                op === "clear" ? " " : " "
        );

        if (op === 'clear') {
            setAns("");
            setNum1("");
            setNum2("");
        }

    }, [num1, num2, op]);



    return (
        <Calc>
            <h3 > J a v a S c r i p t . C a l c u l a t o r</h3>
            <StyledLabel> Enter First Number: </StyledLabel>
            <StyledInput
                //placeholder = {`Enter First Number:`}
                type={`number`}
                value={num1}
                onChange={(e) => setNum1(e.target.value)}/>
            <br/><br/>
            <StyledLabel> Enter Second Number: </StyledLabel>
            <StyledInput
                //placeholder = {`Enter Second Number:`}
                type={`number`}
                value={num2}
                onChange={(e) => setNum2(e.target.value)}/>
            <br/><br/>

            <StyledButton onClick={() => setOp("add")}>+</StyledButton>
            <StyledButton onClick={() => setOp("sub")}>-</StyledButton>
            <StyledButton onClick={() => setOp("mul")}>*</StyledButton>
            <StyledButton onClick={() => setOp("div")}>/</StyledButton>
            <StyledButton onClick={() => setOp("power")}>**</StyledButton>
            <StyledButton onClick={() => setOp("clear")}>clear</StyledButton>
            <br/>
            <Result
                placeholder={`Result:`}
                value = {ans}
                type={`number`}/>
        </Calc>
    );
}