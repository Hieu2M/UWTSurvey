import React from 'react';
import { Coffee, ShoppingBag, Utensils, Clock } from 'lucide-react';

const findings = [
    {
        icon: Coffee,
        title: "Campus Dining Patterns",
        // description: "Analysis of peak dining hours and student preferences for food options on campus."
    },
    {
        icon: ShoppingBag,
        title: "Local Food Access",
        // description: "Mapping of affordable food options within walking distance of campus."
    },
    {
        icon: Utensils,
        title: "Dietary Preferences",
        // description: "Survey results showing the diversity of dietary needs and preferences."
    },
    {
        icon: Clock,
        title: "Time Constraints",
        // description: "Impact of class schedules on student dining habits and food choices."
    }
];

export default function FoodAnalysis() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gray-50 text-gray-900 py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">Campus Food Analysis</h1>
                    <p className="text-xl max-w-2xl">
                        Understanding how UWT students interact with campus dining options and local food establishments
                        to create more accessible and diverse food options.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {findings.map((finding, index) => {
                            const Icon = finding.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                    <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                                        <Icon className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{finding.title}</h3>
                                    <p className="text-gray-600">{finding.description}</p>
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
                            <p>Our analysis aiming to find patterns in campus dining:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Percentage of students prefer quick-service options between classes</li>
                                <li>Affordable options within 5-minute walking distance</li>
                                <li>Demand for diverse dietary options (vegetarian, halal, etc.)</li>
                                <li>Peak dining hours and class transition periods</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}