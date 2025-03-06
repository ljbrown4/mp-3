import { Arch2, StyledH3, Sp } from "./Reuse.tsx";

// Props Interface
interface ReuseCodeProps {
    subtitle: string;
    duration?: string; // not needed for organizations
    description: string;
}

export default function ReuseMain({ info }: { info: ReuseCodeProps[] }) {
    return (
        <>
            {info.map((section, value) => (
                <Arch2 key={value}>
                    <StyledH3>
                        <em><u>{section.subtitle}</u></em>
                        {" "} {section.duration && ` --- ${section.duration}`}
                    </StyledH3>
                    <Sp>{section.description}</Sp>
                </Arch2>
            ))}
        </>
    );
}