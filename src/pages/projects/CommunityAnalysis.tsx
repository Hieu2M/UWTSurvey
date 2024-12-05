import React from 'react';
import { Users, Building, Heart, Map } from 'lucide-react';

const communityFactors = [
    {
        icon: Users,
        title: "Social Connections",
        // description: "Analysis of student interaction patterns and community building opportunities."
    },
    {
        icon: Building,
        title: "Local Integration",
        // description: "Study of campus-community relationships and engagement."
    },
    {
        icon: Heart,
        title: "Student Life",
        // description: "Assessment of student activities and social spaces on campus."
    },
    {
        icon: Map,
        title: "Urban Context",
        // description: "Examination of UWT's role in Tacoma's urban fabric."
    }
];

export default function CommunityAnalysis() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gray-50 text-gray-900 py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">Community Connection Analysis</h1>
                    <p className="text-xl max-w-2xl">
                        Understanding how UWT students connect with each other and the broader
                        Tacoma community to strengthen social bonds and create meaningful spaces.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {communityFactors.map((factor, index) => {
                            const Icon = factor.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                    <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                                        <Icon className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{factor.title}</h3>
                                    <p className="text-gray-600">{factor.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Quest for Insights</h2>
                        <div className="prose prose-lg max-w-none">
                            <p>Our community analysis aiming to find:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Gathering spaces</li>
                                <li>Need for better integration with downtown businesses</li>
                                <li>Opportunities for increased cultural programming</li>
                                <li>Potential for expanded community partnerships</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}