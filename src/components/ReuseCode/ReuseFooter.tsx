import {Link} from "react-router-dom";
import styled from 'styled-components';


const StyledFooter = styled.footer`
    background-color: black ;
    color: #b9bfca;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: relative;
`;
const LinkStyles = {
    color: '#b9bfca'
};
const StyledA  = styled.a`
    color: lavender;
    font-weight: bold;
`;

export default function ReuseFooter() {
    //find a new way to download resume without using anchor tag
    return (
        <StyledFooter>
            <p>
                All Rights Reserved by Leigh Brown{" "}
                <Link to="/credits" style = {LinkStyles}>Credits</Link> &copy;{" "}
                <StyledA href="/public/Leigh Brown Resume.pdf" download>
                    Download Resume
                </StyledA>
            </p>
    </StyledFooter>
)
}