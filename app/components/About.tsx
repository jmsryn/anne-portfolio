import Image from "next/image";

export default function About() {
    const stats = [
        { value: "7+", label: "Years Experience" },
        { value: "3", label: "Published Papers" },
        { value: "C2", label: "English Proficiency" },
        { value: "100+", label: "Research Projects" },
    ];

    return (
        <section id="about" className="section bg-cream-dark/50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            {/* Background Shape */}
                            <div className="absolute inset-4 bg-gradient-to-br from-amber to-coral rounded-3xl transform rotate-3" />

                            {/* Image Container */}
                            <div className="absolute inset-0 glass-card overflow-hidden flex items-center justify-center">
                                <Image
                                    src="https://annesabirin.my.canva.site/annesabirinportfolio/_assets/media/f35f4eb95e25f08341749b38856f1cd0.jpg"
                                    alt="Anne-Nora Sabirin"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass-card px-4 py-3 animate-float">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
                                    <span className="text-sm font-medium text-dark-brown">
                                        Available for Work
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <span className="text-coral font-semibold text-sm uppercase tracking-wider">
                            About Me
                        </span>
                        <h2 className="section-title mt-2 mb-6">
                            Dedicated Professional with a Passion for Excellence
                        </h2>
                        <div className="space-y-4 text-brown leading-relaxed">
                            <p>
                                I am a highly motivated and detail-oriented professional with a
                                strong background in <span className="font-semibold text-dark-brown">Biology, research, and academia</span>.
                                With over 7 years of experience in research consulting, teaching, and
                                administrative support, I bring a unique blend of analytical skills
                                and creative problem-solving to every project.
                            </p>
                            <p>
                                My expertise spans across <span className="font-semibold text-dark-brown">
                                    social media management, academic research, and executive support. </span>
                                I am committed to continuously improving and enhancing my practical
                                skills by taking on challenging tasks and projects.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="glass-card p-4 text-center hover:shadow-lg transition-all"
                                >
                                    <div className="text-2xl font-bold gradient-text">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-warm-gray mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
