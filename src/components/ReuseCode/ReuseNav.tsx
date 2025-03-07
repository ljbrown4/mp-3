import styled from 'styled-components';
import {NavLink} from "react-router-dom";


const StyledNav = styled.nav`
    max-width: 20%;
    height: 50vh;
    margin: auto;
    width: 100%;
    

    @media screen and (max-width: 1000px) {
        max-width: 100%;
        margin: 0;
        justify-content: space-evenly;
        height: auto;
        padding: 1vw;
        align-self: flex-start;
    }
    `;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: calc(2px + 1.2vw);
    text-align: center;
    background-color: #373737;
    color: whitesmoke;
    list-style: none;
    height: 50vh;
    width: 98%;
    margin: 0;

    @media screen and (max-width: 1000px) {
        padding: 1vh 1vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; //Allows items to wrap onto a new line if needed so it doesn't go over the edge
        justify-content: flex-start;
        list-style: none;
        color: whitesmoke;
        height: auto;
        width: 100%;
    }
    `;

const StyledLi = styled.li`
    color: whitesmoke;
    display: flex;
    max-width: 80%;
    font-size: calc(2px + 1.2vw);
    margin: auto 0;

    @media screen and (max-width: 1000px) {
        display: flex;
        text-align: center;
        color: whitesmoke;
        font-size: calc(4px + 1.9vw);
        padding: .5% .5%;
        margin: .5% .5%;
    }
    `;

const NavLinkStyled = styled(NavLink) `
    text-decoration: none;
    color: whitesmoke;
    font-weight: bold;

    &.active { //looked up online
        color: #9cabc3;
        border-bottom: 2px solid #a4bfe3;
    }
`;

export default function ReuseNav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi> <NavLinkStyled to = '/' > Home </NavLinkStyled></StyledLi>
                <StyledLi> <NavLinkStyled to = '/education' > Education </NavLinkStyled></StyledLi>
                <StyledLi> <NavLinkStyled to = '/projects'> Projects </NavLinkStyled></StyledLi>
                <StyledLi> <NavLinkStyled to = '/organizations'> Organizations </NavLinkStyled></StyledLi>
                <StyledLi> <NavLinkStyled to = '/leadership'> Leadership </NavLinkStyled></StyledLi>
                <StyledLi> <NavLinkStyled to = '/experience'> Experience </NavLinkStyled></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}