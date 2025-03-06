import styled from "styled-components";

export const WebsiteWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    font-family: Lato, sans-serif, Arial, Helvetica;
    line-height: 1.6;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    background-color: #373737;
    
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`;

export const StyledMain = styled.main`
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: #1b1b1b;
    min-height: 100vh;
    
    p {
        font-size: calc(1px + 0.98vw);
        color: whitesmoke;
        font-weight: lighter;
        margin-top: 2vh;
        margin-bottom: 1vh;
        margin-left: 2vw;
    }
    
    @media screen and (max-width: 1000px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        
        p {
            font-size: calc(7px + 2.1vw);
            text-align: center;
            margin: 2%;
            padding: 1vh 2vw;
            width: 90%;
            
        }
    }
`;

export const Title = styled.h2`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(10px + 2vw);
    color: #8298bd;
    
    @media screen and (max-width: 1000px) {
        text-align: center;
        font-size: calc(18px + 2.1vw);
    }
`;

export const Arch1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2vh 2vw;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

export const Arch2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2vh 2vw;
    font-weight: bold;

    @media screen and (max-width: 1000px) {
        align-items: center;
    }
`;

export const StyledH3 = styled.h3`
    color: #b9bfca;
    padding-left: 2%;
    
    @media screen and (max-width: 1000px) {
        text-align: center;
        font-size: calc(14px + 2.1vw);
    }
`;

export const Sp = styled.p`
        color: whitesmoke;
        margin: 3vh 2vw;
        
    @media screen and (max-width: 1000px) {
        font-size: calc(7px + 2.1vw);
        text-align: center;
        margin: auto;
        width: 100%;
    }
`;