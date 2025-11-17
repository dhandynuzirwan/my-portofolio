import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2025 - Present",
            title: "Web Developer",
            company: "PT Arsa Jaya Prima",
            type: "Fulltime",
            description: "Developing and maintaining the company's web applications, ensuring functionality and responsive design. I also manage on-page and technical SEO (Search Engine Optimization) strategies to improve organic traffic and search rankings."
        },
        {
        year: "November 2024",
        title: "Career Development Center Team",
        company: "BIMAWA UAD",
        type: "Part-time",
        description: "Managed team activities and designed social media content using Figma."
        },
        {
            year: "Sep 2024",
            title: "UI/UX Designer & Web Developer (Intern)",
            company: "PT Faltek Cahaya Indonesia - Semarang",
            type: "Intern",
            description: "Designed and developed a financial management web system for a contractor company[cite: 14, 54]. Created wireframes, user flows, and high-fidelity prototypes in Figma[cite: 15, 55]."
        },
        {
            year: "Aug 2024",
            title: "Panen Pintar - 2nd Place Winner",
            company: "Technology Days (UI/UX Competition, National Level)",
            type: "Competition", // Menggunakan 'type' Kompetisi
            description: "Designed a smart farming mobile app prototype using Figma[cite: 27, 69]. Conducted user research, competitor analysis, and pain point identification[cite: 28, 70]."
        },
            {
            year: "Mar 2024",
            title: "UI/UX Designer & Project Manager",
            company: "PT Bias Promosindo Jaya",
            type: "Freelance", // Asumsi, bisa diganti
            description: "Led the team in developing a company profile website from planning to deployment[cite: 19, 60]. Designed responsive UI layouts using Figma and Bootstrap[cite: 20, 61]."
        },
        {
            year: "Jan 2024",
            title: "Social Media Admin & Visual Designer",
            company: "Master's Program in Mathematics Education, UAD",
            type: "Part-time", // Asumsi, bisa diganti
            description: "Designed engaging visual content, banners, and templates for social media using Figma[cite: 23, 65]. Analyzed content performance and optimized visuals[cite: 24, 66]."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;