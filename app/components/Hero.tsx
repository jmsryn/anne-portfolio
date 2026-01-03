export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decorations */}
            <div className="decorative-blob w-96 h-96 bg-amber-light top-20 -right-48" />
            <div className="decorative-blob w-80 h-80 bg-teal/30 bottom-20 -left-40" />
            <div className="decorative-blob w-64 h-64 bg-coral/20 top-1/2 left-1/3" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <div
                        className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-dark border border-beige mb-8"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <span className="text-2xl">👋</span>
                        <span className="text-sm font-medium text-brown">
                            Hello, I&apos;m
                        </span>
                    </div>

                    {/* Name */}
                    <h1
                        className="animate-fade-in-up text-5xl md:text-7xl font-bold text-dark-brown mb-6 tracking-tight"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Anne-Nora{" "}
                        <span className="gradient-text">Sabirin</span>
                    </h1>

                    {/* Tagline */}
                    <p
                        className="animate-fade-in-up text-xl md:text-2xl text-warm-gray mb-4"
                        style={{ animationDelay: "0.3s" }}
                    >
                        Virtual Assistant & Research Professional
                    </p>

                    {/* Roles */}
                    <div
                        className="animate-fade-in-up flex flex-wrap justify-center gap-3 mb-10"
                        style={{ animationDelay: "0.4s" }}
                    >
                        {[
                            "Medical VA",
                            "Social Media Manager",
                            "Researcher",
                            "Executive Assistant",
                        ].map((role) => (
                            <span
                                key={role}
                                className="px-4 py-1.5 rounded-full bg-cream-dark border border-sand text-sm font-medium text-brown"
                            >
                                {role}
                            </span>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div
                        className="animate-fade-in-up flex flex-wrap justify-center gap-4 mb-24"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <a href="#contact" className="btn-primary">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                            Get in Touch
                        </a>
                        <a
                            href="mailto:annesabirin.work@gmail.com"
                            className="btn-secondary"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            Email Me
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - positioned outside the content container */}
            <div
                className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                style={{ animationDelay: "0.8s" }}
            >
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-warm-gray hover:text-coral transition-colors"
                >
                    <span className="text-xs font-medium tracking-wider uppercase">
                        Scroll Down
                    </span>
                    <div className="w-6 h-10 border-2 border-sand rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-coral rounded-full animate-pulse-slow" />
                    </div>
                </a>
            </div>
        </section>
    );
}
