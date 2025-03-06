import {Title} from "../ReuseCode/Reuse.tsx";
import ReuseMain  from "../ReuseCode/ReuseMain";

const LeadershipInfo = [
    {
        subtitle: "Resident Assistant: Boston University",
        duration: "August 2024 - Present",
        description: `As an RA, I interact with the residents regularly, fostering a supportive and
        engaging environment. I hold community meetings at least once a month to review
        policies and procedures, while also focusing on community building and addressing
        any community issues. I assist in facilitating hall openings and closings throughout the year,
        ensuring a smooth transition for residents. I handle both routine and emergency maintenance
        requests, as well as other resident concerns that may arise. Additionally, I anticipate
        residents' needs, identify potential problems, and make appropriate referrals to help them
        overcome obstacles such as personal fears, uncertainties, and conflicts.`
    },
    {
        subtitle: "Senior Tech Support",
        duration: "May 2020 - August 2023",
        description: `Projected selections to allow online attendees to participate in service.
        Responded to online requests and troubleshot any issues.
        Reported equipment and system malfunctions.
        Assisted with storage and security of electrical equipment.
        Hosted weekly meetings to review procedures, brainstorm solutions,
        and stay up to date on the systems.`
    }
];

export default function Leadership() {
    return (
        <>
            <Title> Leadership </Title>
            <ReuseMain info = {LeadershipInfo}/>
        </>
    );
}