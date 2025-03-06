import ReuseMain  from "../ReuseCode/ReuseMain";
import {Title} from "../ReuseCode/Reuse.tsx";


const ExperienceInfo = [
    {
        subtitle: "Store Associate: Michaels Inc.",
        duration: "July 2022 - Present",
        description: `Assist with the day-to-day store operations by waiting on customers,
        operating the cash register, completing shift paperwork and required counts,
        stocking, and customer service. Ensure all customers receive a fast and friendly
        experience by assisting with product location and demonstration, answering questions
        , suggesting suitable options, and resolving customer complaints. Train new associates.`
    },
    {
        subtitle: "Assistant Dance Instructor",
        duration: "October 2019 - May 2022",
        description: `Assisted instructors with teaching proper position, technique, and choreography to students aged 3-8.
        Provided individual assistance to students struggling to improve their technique and master a step.
        Supervised their movement throughout the building and ensured they got to and from class safely.`
    }
];
export default function Experience() {
    return (
        <>
            <Title> Work Experience</Title>
            <ReuseMain info = {ExperienceInfo} />
        </>
    );
}