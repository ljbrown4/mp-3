import {Title, Arch1} from "../ReuseCode/Reuse.tsx";
import styled from "styled-components";
//import {Link} from "react-router-dom";

const Images = styled.div`
    width: 40%;
    margin: 1vh 1vw;

    img {
        max-width: 100%;
        border-radius: 50%; /*makes image into a circle */
    }
    h4 {
        align-items: center;
        text-align: center;
        color: #93a6c5;
        font-size: calc(2px + 1.3vw);
    }
    h5 {
        align-items: center;
        text-align: center;
        color: whitesmoke;
        font-size: calc(1px + 1.3vw);
    }
    
    @media screen and (max-width: 1000px) {
        width: 80%;
        align-self: center;
        
        h4 {
            text-align: center;
            color: #93a6c5;
            font-size: calc(17px + 1.7vw);
        }
        h5 {
            align-items: center;
            text-align: center;
            color: whitesmoke;
            font-size: calc(14px + 1.3vw);
        }
        img {
            padding-bottom: 1vh;
        }
    }
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    li {
        list-style: none; //get rid of bullet points
    }
`;
const About = styled.div`
    align-self: center;
    //align-items: center;
    width: 60%;
    margin: 1vh 1vw;
    
    
    a {
        text-decoration: underline;
        list-style-type: none;
        display: inline;
        color: #b9bfca;
        font-size: calc(2px + 1.5vw);
    }
    
    h2 {
        color: #93a6c5;
        align-items: center;
        text-align: center;
        padding-bottom: 1vh;
    }
    
    @media screen and (max-width: 1000px) {
        align-items: center;
        width: 100%;
        
        h2 {
            font-size: calc(18px + 1.6vw);
            padding-top: 1vh;
            margin: 2%;
        }
        a {
            font-size: calc(12px + 1.9vw);
        }
        p {
            padding-top: 1vh;
        }
    }
`;


export default function Home() {
    return (
        <>
            <Title> About Me </Title>
            <Arch1>
                <Images>
                    <img src="/headshot.jpg" alt="Leigh Brown"/>
                    <h4><strong> Leigh Brown </strong></h4>
                    <h5> Sophomore at Boston University</h5>
                    <h5><em>Computer Science and Advertising </em></h5>
                </Images>
                <About>
                    <h2><strong> Contact Me: </strong></h2>
                    <StyledUl>
                        <li><a href ="https://www.linkedin.com/in/leigh-brown-b25989324/" target="_blank"> <em>LinkedIn</em></a>
                        </li>
                        <li><a href="https://github.com/ljbrown4" target="_blank"> <em>Github</em></a>
                        </li>
                        <li ><a href="mailto:ljbrown4@bu.edu" target="_blank"> <i>Email</i></a></li>
                    </StyledUl>

                    <p>
                        Hello! I’m <strong><em>Leigh Brown</em></strong>, a sophomore at Boston University pursuing a
                        Bachelor’s in <strong><em>Computer Science</em></strong> with a minor in <strong><em>Advertising</em></strong> .
                        My passion for technology began in high school, where I discovered the thrill of solving
                        problems and building creative solutions
                        through code. Currently, I’m exploring web app development while honing my skills in <strong>Python,
                        Java, and C.</strong>
                    </p>
                    <p>
                        Beyond programming, I bring leadership and technical expertise from my roles as a Senior Tech
                        Support member in high school and a <strong>Resident Assistant</strong> at BU. Additionally, my experience as a <strong>Store
                        Associate</strong> at Michaels has strengthened my customer service, organizational,
                        and problem-solving skills, as well as my ability to thrive in fast-paced environments. With 14
                        years of dance experience, I’ve cultivated
                        creativity, discipline, and adaptability—qualities that shape my approach to challenges.
                    </p>
                </About>

            </Arch1>

        </>
    );
}