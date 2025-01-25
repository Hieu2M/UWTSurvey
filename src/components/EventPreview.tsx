import React from 'react';
import EventCard from '../components/events/EventCard';

const events = [
    {
        title: "Food For Thought",
        date: "January 16, 2025",
        time: "9:00 AM - 1:00 PM",
        location: "UW Tacoma - 1st Floor TPS Building ",
        description: "Share your perspective about food access here on campus!",
        imageUrl: "./images/FoodForThoughtFlyer.png",
        tags: ["Community", "Feedback", "Interactive"],
        color: "text-red-700",
        available: "past"
    },
    {
        title: "Transpo Talk",
        date: "January 22, 2025",
        time: "11:30 AM - 1:30 PM",
        location: "TPS Room 103",
        description: "Share your perspective on transportation, transit, and other movements involved with our campus.",
        imageUrl: "./images/TranspoTalkFlyer.png",
        tags: ["Community", "Feedback", "Interactive"],
        color: "text-red-700",
        available: "on-going"
    },
    {
        title: "Public Space",
        date: "January 22, 2025",
        time: "11:30 AM - 1:30 PM",
        location: "TPS Lobby",
        description: "Share your perspective on our campus' food topic .",
        imageUrl: "./images/PublicSpacesFlyer.png",
        tags: ["Exhibition", "Sustainability", "Innovation"],
        color: "text-red-700",
        available: "on-going"
    }
];

export const EventPreview = () => {
    return (
        <div className="min-h-screen bg-gray-50">
             {/*Hero Section*/}
            <section className=" text-black py-0">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
                    <p className="text-xl max-w-2xl">
                        Join us at these upcoming events to share your ideas and help shape the future of UW Tacoma's campus design.
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
