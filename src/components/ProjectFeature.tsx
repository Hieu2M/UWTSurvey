import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProjectFeatureProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function ProjectFeature({ icon: Icon, title, description }: ProjectFeatureProps) {
    return (
        <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-2 rounded-lg">
                <Icon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}