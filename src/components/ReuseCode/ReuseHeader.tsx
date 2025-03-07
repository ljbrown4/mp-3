
import styled from 'styled-components';


const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: black;
    color: #b9bfca;
    text-align: left;
    position: relative;
    

    @media screen and (max-width: 1000px) {
        align-items: center;
        text-align: center;
        
        h1 {
            font-size: calc(10px + 1.1vw);
        }
    }
`;


export default function ReuseHeader() {
    return (
        <StyledHeader>
            <h1> Leigh Brown, Undergraduate Student </h1>
            <p> Online Resume </p>
        </StyledHeader>
    )
}