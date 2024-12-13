import React from 'react';
import { Users, MapPin, Building, Users2 } from 'lucide-react';
import Hero from "../components/Hero.tsx";
import TeamMember from "../components/TeamMember.tsx";
import ProjectFeature from "../components/ProjectFeature.tsx";
import ManifestoSection from "../components/manifesto/ManifestoSection.tsx";
import About from "../components/About.tsx";


const teamMembers = [
    {
        name: "Hieu Nguyen",
        role: "Urban Design/GIS Certificate",
        description: "Advocating for diversity, equity and inclusion",
        imageUrl: "/images/HieuAnalysis.png"
    },
    {
        name: "Raisa Baker",
        role: "UWT Senior Urban Design",
        description: "",
        imageUrl: ""
    },
    {
        name: "Sabien Adderley",
        role: "UWT Senior Urban Design",
        description: "",
        imageUrl: ""
    },
    {
        name: "Yasir Al Sammarraie",
        role: "UWT Senior Urban Design",
        description: "",
        imageUrl: ""
    },
    {
        name: "Hugo Julian Ennis",
        role: "UWT Senior Urban Design",
        description: "",
        imageUrl: ""
    },
    {
        name: "Christy Gonzalez",
        role: "UWT Senior Urban Design",
        description: "",
        imageUrl: "/images/ChristyAnalysis.jpg"
    },
    {
        name: "Asad Hussein",
        role: "UWT Senior Urban Design",
        description: "",
        imageUrl: ""
    },
    {
        name: "Tu T Nguyen",
        role: "UWT Senior Urban Design",
        description: "",
        imageUrl: ""
    },
    {
        name: "Benjamin Smith",
        role: "UWT Senior Urban Design",
        description: "",
        imageUrl: ""
    }
];

const projectFeatures = [
    {
        icon: Users,
        title: "Community-Driven",
        description: "Your input shapes our design decisions"
    },
    {
        icon: MapPin,
        title: "Strategic Planning",
        description: "Creating spaces that work for everyone"
    },
    {
        icon: Building,
        title: "Sustainable Design",
        description: "Environmentally conscious campus development"
    },
    {
        icon: Users2,
        title: "Inclusive Spaces",
        description: "Designing for diversity and accessibility"
    }
];

export default function HomePage() {
    return (
        <>
            <Hero/>
            <ManifestoSection/>

            {/* Project Overview Section */}
            <section id="project" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Redesigning UWT's Future</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Our capstone project collaborating with <b>Civil Engineering 2025 Cohort</b> focuses on redesigning the master plan that enhances the campus
                                experience while preserving UWT's unique character and connection to Tacoma.
                            </p>
                            <div className="space-y-6">
                                {projectFeatures.map((feature, index) => (
                                    <ProjectFeature key={index} {...feature} />
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/images/Downtown-ds.jpg"
                                alt="UWT Campus"
                                className="rounded-xl shadow-2xl"
                            />
                            <div className="absolute -top-6 -right-6 bg-purple-600 text-white p-4 rounded-lg">
                                <a href="#feedback" className="hover:text-purple-300 transition">Join us in shaping the future of
                                    UWT</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <About/>
            {/* Team Section */}
            <section id="team" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Performed GIS analysis</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            There are nine of us in this cohort, and we conducted analyses on various topics related to the University of Washington Tacoma campus,
                            with each team member responsible for a specific area. Below is a graphic summary of each:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Feedback Section */}
            <section id="feedback" className="py-20 bg-purple-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Share Your Campus Experience</h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Your feedback is crucial in helping us understand how students use and experience the campus.
                            Share your thoughts to help shape UWT's future.
                        </p>
                        <a
                            href="https://survey123.arcgis.com/share/53ea8282b80d41faaa2b3eaeed822fd9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition transform hover:scale-105"
                        >
                            Take Our Survey
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}