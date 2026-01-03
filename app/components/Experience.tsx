const experiences = [
    {
        title: "College Instructor",
        company: "Liceo de Cagayan University",
        location: "Cagayan De Oro, Philippines",
        period: "2024 - Present",
        type: "Full-time",
        description: [
            "Delivered engaging and comprehensive lectures in Molecular Biology, Immunology, Epidemiology, and other Biology-related subjects",
            "Mentored students in academic performance and research projects, offering personalized guidance",
            "Consecutively awarded as Best Teaching Personnel for outstanding teaching performance",
        ],
    },
    {
        title: "Academic Research Consultant",
        company: "Freelance",
        location: "Philippines",
        period: "2017 - 2024",
        type: "Contract",
        description: [
            "Produced high-quality research deliverables including literature reviews, data analysis, and detailed reports",
            "Leveraged strong analytical skills and extensive knowledge of research methodologies",
            "Designed and implemented data collection tools including surveys and interviews",
        ],
    },
    {
        title: "Social Media Manager & Communications",
        company: "Advocating Youth for Outstanding Sustainability",
        location: "Zamboanga City, Philippines",
        period: "Aug 2021 - May 2022",
        type: "Volunteer",
        description: [
            "Developed engaging content and communication materials including letters, narrative reports, and captions",
            "Designed compelling publicity materials enhancing the organization's public image",
            "Tracked project progress and prepared updates for weekly/monthly publicity efforts",
        ],
    },
    {
        title: "Founder & President",
        company: "DOST Scholars Initiative Club of Zamboanga",
        location: "Zamboanga City, Philippines",
        period: "2020 - 2022",
        type: "Leadership",
        description: [
            "Coordinated student-led science initiatives including interactive meetings and advocacy campaigns",
            "Strengthened academic and institutional linkages with partner schools and local government units",
            "Led community-driven science projects advancing inclusive education and civic responsibility",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section bg-cream-dark/50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <span className="text-coral font-semibold text-sm uppercase tracking-wider">
                        My Journey
                    </span>
                    <h2 className="section-title mt-2">Work Experience</h2>
                    <p className="section-subtitle">
                        A track record of professional excellence in education, research, and
                        community leadership
                    </p>
                </div>

                <div className="max-w-3xl mx-auto relative pl-8">
                    {/* Timeline Line */}
                    <div className="timeline-line" />

                    {/* Experience Items */}
                    {experiences.map((exp, index) => (
                        <div
                            key={`${exp.title}-${exp.company}`}
                            className="relative pb-12 last:pb-0"
                        >
                            {/* Timeline Dot */}
                            <div
                                className="timeline-dot"
                                style={{ top: "8px" }}
                            />

                            {/* Card */}
                            <div className="glass-card p-6 ml-6 hover:shadow-lg transition-all">
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-dark-brown">
                                            {exp.title}
                                        </h3>
                                        <p className="text-coral font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-block px-3 py-1 rounded-full bg-coral/10 text-coral text-xs font-medium">
                                            {exp.type}
                                        </span>
                                        <p className="text-sm text-warm-gray mt-1">{exp.period}</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-1 text-sm text-warm-gray mb-4">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    {exp.location}
                                </div>

                                {/* Description */}
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-brown"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
