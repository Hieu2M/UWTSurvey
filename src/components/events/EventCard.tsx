import React from 'react';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';

interface EventCardProps {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    imageUrl: string;
    tags: string[];
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  imageUrl,
  tags
}: EventCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <div className="space-y-2 mb-4">
                    <div className="flex items-center text-purple-500 font-bold">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center text-purple-500 font-bold">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{location}</span>
                    </div>
                </div>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                        >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}