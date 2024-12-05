import React from 'react';
import { BookOpen, Users, Map, Lightbulb } from 'lucide-react';

const milestones = [
    {
        icon: BookOpen,
        title: "Research Phase",
        description: "Analysis of current campus's typology, infrastructure, green space, etc.",
        date: "September 2024"
    },
    {
        icon: Users,
        title: "Community Engagement",
        description: "Gathering feedback through surveys and workshops",
        date: "February 2025"
    },
    {
        icon: Map,
        title: "Master Planning",
        description: "Redesign UWT's Master Plan",
        date: "March 2025"
    },
    {
        icon: Lightbulb,
        title: "Final Proposal",
        description: "Presenting our vision for UWT's future",
        date: "May 2025"
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gray-50 text-gray-900 py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">About Our Project</h1>
                    <p className="text-xl max-w-2xl">
                        We're a team of senior Urban Design students working to reimagine
                        the University of Washington Tacoma campus through innovative design
                        and community engagement.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-xl text-gray-600">
                            To redesign our campus master plan (created in 2008) that enhances the student experience,
                            promotes sustainability, and strengthens UWT's connection to the
                            Tacoma community through innovative urban design solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Timeline */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Project Timeline</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {milestones.map((milestone, index) => {
                            const Icon = milestone.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                    <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                                        <Icon className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                    <p className="text-gray-600 mb-4">{milestone.description}</p>
                                    <p className="text-sm text-purple-600 font-semibold">{milestone.date}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}