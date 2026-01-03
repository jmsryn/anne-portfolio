export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-dark-brown text-cream">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight">
                            Anne<span className="text-coral">.</span>
                        </a>
                        <p className="text-sm text-sand mt-1">
                            © {currentYear} Anne-Nora Sabirin. All rights reserved.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-6 text-sm">
                        <a
                            href="#about"
                            className="text-sand hover:text-coral transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="text-sand hover:text-coral transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#experience"
                            className="text-sand hover:text-coral transition-colors"
                        >
                            Experience
                        </a>
                        <a
                            href="#contact"
                            className="text-sand hover:text-coral transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:annesabirin.work@gmail.com"
                            className="w-10 h-10 rounded-full bg-brown/50 flex items-center justify-center text-sand hover:bg-coral hover:text-white transition-colors"
                            aria-label="Email"
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
                        </a>
                        <a
                            href="https://www.linkedin.com/in/anne-sabirin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-brown/50 flex items-center justify-center text-sand hover:bg-coral hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Back to Top */}
                <div className="mt-8 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm text-sand hover:text-coral transition-colors"
                    >
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
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                        Back to Top
                    </a>
                </div>
            </div>
        </footer>
    );
}
