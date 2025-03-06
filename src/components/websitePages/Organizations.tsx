import {Title} from "../ReuseCode/Reuse.tsx";
import ReuseMain  from "../ReuseCode/ReuseMain";

const OrgInfo = [
    {
        subtitle: "NSBE Boston University Chapter",
        duration: "",
        description: `As a member, I engage with a community of over 120 Black STEM students,
        fostering both academic excellence and a strong sense of community. I participate
        in professional development workshops, contribute to community service projects,
        and attend study sessions that support my academic and professional growth.`
    },
    {
        subtitle: "Boston University Women in Computer Science Club",
        duration: "",
        description: `As a member, I engage and network with other women in Computer Science, creating a
        supportive and successful community. I attend meetings, events, and professional
        development workshops that help me grow both academically and professionally.`
    },
    {
        subtitle: "Boston University Afrithms",
        duration: "",
        description: `As a member of Afrithms, I learn Afrobeats and West African dance
        styles, immersing myself in the rich cultural traditions of these dance forms.
        I actively perform on stage, showcasing our routines at various events and competitions,
        and continuously refine my skills through practice and collaboration with fellow dancers.`
    }
];

export default function Organizations() {
    return (
        <>
            <Title> Organizations and Clubs</Title>
            <ReuseMain info = {OrgInfo}/>
        </>
    );
}