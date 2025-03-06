import {Title, Arch1} from "../ReuseCode/Reuse.tsx";
import styled from "styled-components";

const Info = styled.div`
    width: 40%;
    margin: 1vh 1vw;

    h3 {
        text-align: left;
        color: #b9bfca;
        margin: 0 2vw;
    }
    p {
        margin-left: 2vw;
    }
    
    @media screen and (max-width: 1000px) {
        width: 100%;
        text-align: center;
        align-items: center;

        h3 {
            text-align: center;
            font-size: calc(12px + 2.1vw);
        }
    }
`;

const Image = styled.div`
    margin: auto;
    width: 60%;
    align-items : center;

    img {
        display: block;
        align-items: center;
        max-width: 100%;
        max-height: 100%;
    }
    
    @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 1vh auto;

        img {
            visibility: hidden; /*don't like how it looks on smaller screens */
        }
    }
`;

export default function Education() {
    return (
        <>
            <Title> Educational Background </Title>
            <Arch1>
                <Info>
                    <h3><u><em>Boston University</em></u></h3>
                    <p><strong>Degree:</strong> <em>Computer Science</em> <br/>
                        <strong>Minor:</strong>: <em> Advertising</em> <br/>
                        <strong>GPA:</strong> 3.79, <em>Dean's List</em> <br/>
                        <strong>Class</strong>: 2027
                    </p>
                    <h3><u><em>Relevant Coursework:</em></u></h3>
                    <p> Intro to Computer Science 1 <em><strong>(Python)</strong></em> <br/>
                        Intro to Computer Science 2: <em><strong> (Java)</strong></em> <br/>
                        Geometric Algorithms <em><strong>(Linear Algebra)</strong></em> <br/>
                        Combinatoric Structures <br/>
                        Computer Systems <em><strong> (Assembly/C)</strong></em> <br/>
                        Analysis of Algorithms <br/>
                        Probability in Computing <br/>
                        Web Development <em><strong>(HTML/CSS/JS/React)</strong></em> <br/>
                        Introduction to Communication Writing
                    </p>
                </Info>
                <Image>
                    <img src ="/public/cds.png" alt="CDS"/>
                </Image>
            </Arch1>

        </>
    );
}