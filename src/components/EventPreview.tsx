import React from 'react';
import EventCard from '../components/events/EventCard';

const events = [
    {
        title: "Food For Thought",
        date: "January 16, 2025",
        time: "9:00 AM - 1:00 PM",
        location: "UW Tacoma - 1st Floor TPS Building ",
        description: "Share your perspective about food access here on campus!",
        imageUrl: "./images/FoodFlyer.png",
        tags: ["Community", "Feedback", "Interactive"]
    },
    {
        title: "Transpo Talk",
        date: "January 22, 2025",
        time: "11:30 AM - 1:30 PM",
        location: "TPS Room 103",
        description: "Share your perspective on transportation, transit, and other movements involved with our campus.",
        imageUrl: "./images/TranspoTalkFlyer.png",
        tags: ["Community", "Feedback", "Interactive"]
    },
    // {
    //     title: "Sustainable Campus Exhibition",
    //     date: "March 5, 2024",
    //     time: "10:00 AM - 6:00 PM",
    //     location: "Snoqualmie Building",
    //     description: "Explore innovative sustainable design solutions proposed for the UWT campus through interactive exhibits.",
    //     imageUrl: "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     tags: ["Exhibition", "Sustainability", "Innovation"]
    // }
];

export const EventPreview = () => {
    return (
        <div className="min-h-screen bg-gray-50">
             Hero Section
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
