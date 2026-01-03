const services = [

    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
        ),
        title: "Social Media Management",
        description: "Strategic content creation, scheduling, and community management across platforms. Developing engaging narratives that build brand presence and audience growth.",
        tags: ["Content Strategy", "Analytics", "Community Building"],
        projects: [
            { name: "Say Hello Isla", url: "https://sayhelloisla.co/about" },
            { name: "Lampara Dream Project", url: "https://www.facebook.com/lamparadreamproject" },
            { name: "DOST Scholars Initiative Club", url: "https://www.facebook.com/zc.siclub" },
        ],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Research & Data Analysis",
        description: "Comprehensive research support including literature reviews, data collection tool design, statistical analysis, and detailed research reporting with academic rigor.",
        tags: ["Statistical Analysis", "Literature Review", "Data Visualization"],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Executive Assistance",
        description: "High-level administrative support including calendar management, travel coordination, meeting preparation, and executive communication on behalf of leaders.",
        tags: ["Calendar Management", "Travel Planning", "Correspondence"],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        title: "Content Creation & Writing",
        description: "Professional technical and creative writing services including reports, articles, newsletters, and educational content with meticulous attention to detail.",
        tags: ["Technical Writing", "Copywriting", "Editing"],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
        title: "Project Management",
        description: "End-to-end project coordination using modern tools and methodologies. Ensuring timely deliverables, clear communication, and stakeholder satisfaction.",
        tags: ["Agile", "Task Coordination", "Reporting"],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: "Medical Virtual Assistance",
        description: "Specialized support for healthcare professionals including patient scheduling, medical documentation, insurance coordination, and healthcare communication management.",
        tags: ["HIPAA Compliant", "EMR Systems", "Patient Care"],
    }
];

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <span className="text-coral font-semibold text-sm uppercase tracking-wider">
                        What I Offer
                    </span>
                    <h2 className="section-title mt-2">Services</h2>
                    <p className="section-subtitle">
                        Comprehensive virtual assistance and professional support tailored to
                        your specific needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="glass-card p-6 group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral/10 to-amber/10 flex items-center justify-center text-coral mb-4 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-dark-brown mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-brown leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2.5 py-1 rounded-full bg-cream-dark text-warm-gray"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Projects handled (if any) */}
                            {service.projects && service.projects.length > 0 && (
                                <div className="mt-4 pt-4 border-t border-cream-dark">
                                    <p className="text-xs font-semibold text-warm-gray uppercase tracking-wider mb-2">
                                        Projects Handled:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.projects.map((project, i) => (
                                            <a
                                                key={i}
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-coral/10 text-coral hover:bg-coral hover:text-white transition-colors"
                                            >
                                                {project.name}
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
