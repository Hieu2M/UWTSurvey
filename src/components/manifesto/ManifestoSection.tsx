import React from 'react';
import { Users, Leaf, Network, Shield } from 'lucide-react';
import ManifestoCard from "./ManifestoCard.tsx";

const manifestoItems = [
    {
        icon: Users,
        title: "Diversity, Equity, + Inclusion",
        description: "Valuing and implementing diversity, equity, and inclusion in all designs and efforts",
        details: "ADA, culture, history, belonging, emotional safety, inclusion",
        bgColor: "bg-pink-100",
        iconColor: "text-pink-500",
        borderColor: "border-pink-200"
    },
    {
        icon: Leaf,
        title: "Climate Action",
        description: "Prioritizing sustainability and environmental health through best practices",
        details: "Sustainability, green infrastructure, reducing greenhouse gas emissions, active transportation",
        bgColor: "bg-green-100",
        iconColor: "text-green-500",
        borderColor: "border-green-200"
    },
    {
        icon: Network,
        title: "Community Connections",
        description: "Integrating multi-facetted aspects of the public realm",
        details: "Public realm, surrounding communities, being part of the city, spaces for students",
        bgColor: "bg-yellow-100",
        iconColor: "text-yellow-600",
        borderColor: "border-yellow-200"
    },
    {
        icon: Shield,
        title: "Safety",
        description: "Aspiring physical safety in the built environment",
        details: "Physical environment, flooding, underdeveloped areas",
        bgColor: "bg-cyan-100",
        iconColor: "text-cyan-500",
        borderColor: "border-cyan-200"
    }
];

export default function ManifestoSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Design Manifesto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {manifestoItems.map((item, index) => (
                        <ManifestoCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}