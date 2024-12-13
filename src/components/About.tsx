import React from 'react';
import {BookOpen, Users, Map, Lightbulb, Tag} from 'lucide-react';

const milestones = [
    {
        icon: BookOpen,
        title: "Research Phase",
        description: "Analysis of current campus's typology, infrastructure, green space, etc.",
        date: "September 2024",
        tags: "Past",
        borderColor: "text-red-700"
    },
    {
        icon: Users,
        title: "Community Engagement",
        description: "Collaborate with Civil Engineering 2025 Cohort to gathering feedback through surveys and workshops",
        date: "January - February 2025",
        tags: "Upcoming",
        borderColor: "text-blue-600"
    },
    {
        icon: Map,
        title: "Master Planning",
        description: "Collaborate with Civil Engineering 2025 Cohort to redesign UWT's Master Plan",
        date: "March 2025",
        tags: "Upcoming",
        borderColor: "text-blue-600"
    },
    {
        icon: Lightbulb,
        title: "Final Proposal",
        description: "Presenting our vision for UWT's future",
        date: "May 2025",
        tags: "Upcoming",
        borderColor: "text-blue-600"
    }
];

export default function About() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Project Timeline</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {milestones.map((milestone, index) => {
                        const Icon = milestone.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                                    <Icon className="h-6 w-6 text-purple-600"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                <p className="text-gray-600 mb-4">{milestone.description}</p>
                                <p className={`text-sm ${milestone.borderColor} font-semibold`}>{milestone.date}</p>
                                <div className="flex flex-wrap gap-2">
                                    <div
                                        className={`flex items-center px-3 py-1 bg-purple-100 ${milestone.borderColor} rounded-full text-sm`}
                                    >
                                        <Tag className="h-3 w-3 mr-1"/>
                                        {milestone.tags}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}