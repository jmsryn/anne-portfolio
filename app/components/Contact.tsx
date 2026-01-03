export default function Contact() {
    return (
        <section id="contact" className="section bg-cream-dark/50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <span className="text-coral font-semibold text-sm uppercase tracking-wider">
                        Get In Touch
                    </span>
                    <h2 className="section-title mt-2">Let&apos;s Work Together</h2>
                    <p className="section-subtitle mx-auto">
                        Ready to bring expertise and dedication to your next project.
                        Let&apos;s connect and discuss how I can help.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="glass-card p-6">
                            <h3 className="text-lg font-semibold text-dark-brown mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                {/* Email */}
                                <a
                                    href="mailto:annesabirin.work@gmail.com"
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-cream-dark transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center text-coral group-hover:bg-coral group-hover:text-white transition-colors">
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
                                    </div>
                                    <div>
                                        <p className="text-sm text-warm-gray">Email</p>
                                        <p className="font-medium text-dark-brown">
                                            annesabirin.work@gmail.com
                                        </p>
                                    </div>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/anne-sabirin/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-cream-dark transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-warm-gray">LinkedIn</p>
                                        <p className="font-medium text-dark-brown">
                                            linkedin.com/in/anne-sabirin
                                        </p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-center gap-4 p-3 rounded-xl">
                                    <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center text-amber">
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
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-warm-gray">Location</p>
                                        <p className="font-medium text-dark-brown">Philippines</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="glass-card p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
                                <span className="font-semibold text-dark-brown">
                                    Available for New Projects
                                </span>
                            </div>
                            <p className="text-sm text-brown">
                                Currently accepting new clients for virtual assistance, research
                                projects, and content creation work.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-6">
                        <h3 className="text-lg font-semibold text-dark-brown mb-6">
                            Send a Message
                        </h3>

                        <form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-brown mb-1.5"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-xl bg-cream-dark border border-beige focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all text-dark-brown placeholder-warm-gray"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-brown mb-1.5"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-xl bg-cream-dark border border-beige focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all text-dark-brown placeholder-warm-gray"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-brown mb-1.5"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 rounded-xl bg-cream-dark border border-beige focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all text-dark-brown placeholder-warm-gray"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-brown mb-1.5"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-cream-dark border border-beige focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all text-dark-brown placeholder-warm-gray resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full justify-center"
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
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
