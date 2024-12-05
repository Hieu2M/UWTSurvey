import React from 'react';
import { Bus, Car, Train, Bike } from 'lucide-react';

const transportModes = [
    {
        icon: Bus,
        title: "Public Transit",
        // description: "Analysis of bus routes, frequency, and student usage patterns."
    },
    {
        icon: Car,
        title: "Parking Solutions",
        // description: "Study of parking availability and alternative transportation options."
    },
    {
        icon: Train,
        title: "Light Rail Impact",
        // description: "Future implications of the Tacoma Link expansion for campus accessibility."
    },
    {
        icon: Bike,
        title: "Active Transport",
        // description: "Assessment of bicycle and pedestrian infrastructure around campus."
    }
];

export default function TransportationAnalysis() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gray-50 text-gray-900 py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">Transportation Analysis</h1>
                    <p className="text-xl max-w-2xl">
                        Examining how students travel to and from campus to improve accessibility
                        and promote sustainable transportation options.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {transportModes.map((mode, index) => {
                            const Icon = mode.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                    <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                                        <Icon className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{mode.title}</h3>
                                    <p className="text-gray-600">{mode.description}</p>
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
                            <p>Our research aiming to find transportation trends:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Percentage of students rely on public transportation</li>
                                <li>Parking availability during peak hours</li>
                                <li>Interest in bicycle commuting</li>
                                <li>Pedestrian connections to downtown</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}