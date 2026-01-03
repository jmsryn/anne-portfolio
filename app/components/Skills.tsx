const skillCategories = [
    {
        title: "Communication",
        skills: ["English Writing (C2)", "Technical Writing", "Creative Writing", "Public Speaking", "Report Writing"],
        color: "coral",
    },
    {
        title: "Technical Skills",
        skills: ["Data Analytics", "Statistical Analysis", "Research Methodology", "Project Management", "Content Creation"],
        color: "teal",
    },
    {
        title: "Administrative",
        skills: ["Calendar Management", "Email Management", "Document Preparation", "Travel Coordination", "Meeting Scheduling"],
        color: "amber",
    },
];

const tools = [
    { name: "Google Workspace", icon: "📊" },
    { name: "Microsoft 365", icon: "💼" },
    { name: "Adobe Creative Cloud", icon: "🎨" },
    { name: "Canva", icon: "✨" },
    { name: "Notion", icon: "📝" },
    { name: "Slack", icon: "💬" },
    { name: "BaseCamp", icon: "⛺" },
    { name: "GoHighLevel", icon: "🚀" },
    { name: "Google Analytics", icon: "📈" },
    { name: "SPSS/Stats Software", icon: "📉" },
];

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <span className="text-coral font-semibold text-sm uppercase tracking-wider">
                        My Expertise
                    </span>
                    <h2 className="section-title mt-2">Skills & Tools</h2>
                    <p className="section-subtitle">
                        A comprehensive toolkit developed through years of academic and
                        professional experience
                    </p>
                </div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="glass-card p-6">
                            <h3 className="text-lg font-semibold text-dark-brown mb-4 flex items-center gap-2">
                                <span
                                    className={`w-2 h-2 rounded-full ${category.color === "coral"
                                        ? "bg-coral"
                                        : category.color === "teal"
                                            ? "bg-teal"
                                            : "bg-amber"
                                        }`}
                                />
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tools Section */}
                <div className="glass-card p-8">
                    <h3 className="text-lg font-semibold text-dark-brown mb-6 text-center">
                        Tools I Work With
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-cream-dark border border-beige hover:border-amber hover:bg-amber-light/30 transition-all cursor-default group"
                            >
                                <span className="text-xl group-hover:scale-110 transition-transform">
                                    {tool.icon}
                                </span>
                                <span className="text-sm font-medium text-brown">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* English Proficiency Badge */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal/10 to-coral/10 border border-teal/20">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-teal"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>
                            <span className="font-semibold text-dark-brown">EFSET Score: C2</span>
                        </div>
                        <span className="text-warm-gray">|</span>
                        <span className="text-sm text-brown">Proficient English Speaker & Writer</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
