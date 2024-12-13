import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ManifestoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string;
    bgColor: string;
    iconColor: string;
    borderColor: string;
}

export default function ManifestoCard({
  icon: Icon,
  title,
  description,
  details,
  bgColor,
  iconColor,
  borderColor
}: ManifestoCardProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className={`relative mb-4 ${borderColor}`}>
                <div className={`w-32 h-32 rounded-full ${bgColor} flex items-center justify-center relative z-10`}>
                    <Icon className={`w-12 h-12 ${iconColor}`} />
                </div>
                <div className="absolute top-1/2 left-full w-full h-0.5 bg-purple-200 -translate-y-1/2 hidden lg:block"></div>
            </div>
            <h3 className={`text-xl font-bold mb-3 ${iconColor}`}>{title}</h3>
            <p className="text-gray-700 mb-3 max-w-xs">{description}</p>
            <p className="text-sm text-gray-500">{details}</p>
        </div>
    );
}