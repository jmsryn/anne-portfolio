const education = [
    {
        degree: "Master of Science in Biology",
        major: "Major in General Biology",
        institution: "Mindanao State University - Iligan Institute of Technology",
        period: "2022 - 2025",
        highlights: [
            "DOST-ASTHRDP Scholar",
            "DOST-ASTHRDP Research Exchange (Sandwich) Program",
        ],
    },
    {
        degree: "Bachelor of Science in Biology",
        major: "Major in Medical Biology",
        institution: "Western Mindanao State University",
        period: "2018 - 2022",
        highlights: [
            "DOST-SEI Scholar",
            "Magna Cum Laude",
            "Academic Excellence Award (DOST)",
        ],
    },
];

export default function Education() {
    return (
        <section id="education" className="section bg-cream-dark/50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <span className="text-coral font-semibold text-sm uppercase tracking-wider">
                        Academic Background
                    </span>
                    <h2 className="section-title mt-2">Education</h2>
                    <p className="section-subtitle">
                        A strong foundation in the sciences with consistent academic
                        excellence
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <div
                            key={edu.degree}
                            className="glass-card p-6 relative overflow-hidden group"
                        >
                            {/* Accent Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-coral via-amber to-teal opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="pl-4">
                                {/* Period Badge */}
                                <span className="inline-block px-3 py-1 rounded-full bg-coral/10 text-coral text-xs font-medium mb-3">
                                    {edu.period}
                                </span>

                                {/* Degree */}
                                <h3 className="text-xl font-semibold text-dark-brown mb-1">
                                    {edu.degree}
                                </h3>
                                <p className="text-coral font-medium mb-2">{edu.major}</p>

                                {/* Institution */}
                                <div className="flex items-center gap-2 text-brown mb-4">
                                    <svg
                                        className="w-4 h-4 text-warm-gray"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                    </svg>
                                    {edu.institution}
                                </div>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2">
                                    {edu.highlights.map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber/10 to-teal/10 text-sm font-medium text-dark-brown"
                                        >
                                            <svg
                                                className="w-4 h-4 text-amber"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
