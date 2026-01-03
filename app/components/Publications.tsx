const publications = [
    {
        title:
            "Ethnobotany, Field Mapping, and Physiological Review on Folkloric Medicinal Plants Among Tausug in Isabela City, Basilan, Philippines",
        authors: "Sabirin, A.N., Montero, J.S., Pimentel, C.S., & Madjos, G.G",
        journal: "International Journal of Botany Studies",
        type: "Research Article",
        link: "https://www.botanyjournals.com/assets/archives/2020/vol5issue4/5-4-36-729.pdf",
    },
    {
        title:
            "Single Nucleotide Polymorphism of Interferon Gamma (IFN-γ) Gene and Its Association to Gastrointestinal Parasite Burden of Crossbred Anglo-Nubian Goats",
        authors:
            "Sabirin, J. M., Dominguez, Alvia, E.T., Moneva, C.S.O., & Kim, K.S.",
        journal: "Philippine Journal of Veterinary and Animal Science",
        type: "Research Article",
        link: "https://www.researchgate.net/publication/388862625_SINGLE_NUCLEOTIDE_POLYMORPHISM_OF_INTERFERON_GAMMA_IFN-g_GENE_AND_ITS_ASSOCIATION_TO_GASTROINTESTINAL_PARASITE_BURDEN_OF_CROSSBRED_ANGLO-NUBIAN_GOATS",
    },
    {
        title:
            "MHC-II DRB Gene Polymorphism and its Association to Gastrointestinal Parasite Burden of Crossbred Anglo-Nubian Goats from a Single Animal Farm in Sultan Naga Dimaporo, Lanao del Norte, Philippines",
        authors:
            "Sabirin, A.N., Dominguez, J.M.D., Tabugo, S.R.M., Sumaya, N.H.N., Alvia, E.T., Kim, K.S., & Moneva, C.S.O.",
        journal: "The Philippine Journal of Veterinary Medicine (SCOPUS)",
        type: "SCOPUS Indexed",
        link: "https://www.researchgate.net/publication/390550853_MHC-II_DRB_Gene_Polymorphism_and_its_Association_to_Gastrointestinal_Parasite_Burden_of_Crossbred_Anglo-Nubian_Goats_from_a_Single_Animal_Farm_in_Sultan_Naga_Dimaporo_Lanao_del_Norte_Philippines",
    },
];

export default function Publications() {
    return (
        <section id="publications" className="section">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <span className="text-coral font-semibold text-sm uppercase tracking-wider">
                        Research Work
                    </span>
                    <h2 className="section-title mt-2">Publications</h2>
                    <p className="section-subtitle">
                        Peer-reviewed research contributions to the scientific community
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {publications.map((pub, index) => (
                        <a
                            href={pub.link}
                            key={pub.title}
                            className="block glass-card p-6 hover:shadow-lg transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="hidden md:flex w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-coral/20 items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-teal"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Type Badge */}
                                    <span
                                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 ${pub.type === "SCOPUS Indexed"
                                            ? "bg-teal/10 text-teal"
                                            : "bg-amber/10 text-amber"
                                            }`}
                                    >
                                        {pub.type}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-dark-brown mb-2 leading-snug">
                                        {pub.title}
                                    </h3>

                                    {/* Authors */}
                                    <p className="text-sm text-brown mb-2">
                                        <span className="font-medium">Authors:</span> {pub.authors}
                                    </p>

                                    {/* Journal */}
                                    <div className="flex items-center gap-2 text-sm text-warm-gray">
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
                                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                            />
                                        </svg>
                                        <span className="italic">{pub.journal}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Research Stats */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-teal/5 via-amber/5 to-coral/5 border border-beige">
                        <div className="text-center">
                            <div className="text-2xl font-bold gradient-text">3</div>
                            <div className="text-xs text-warm-gray">Published Papers</div>
                        </div>
                        <div className="w-px h-8 bg-beige" />
                        <div className="text-center">
                            <div className="text-2xl font-bold gradient-text">1</div>
                            <div className="text-xs text-warm-gray">SCOPUS Indexed</div>
                        </div>
                        <div className="w-px h-8 bg-beige" />
                        <div className="text-center">
                            <div className="text-2xl font-bold gradient-text">7+</div>
                            <div className="text-xs text-warm-gray">Years Research</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
