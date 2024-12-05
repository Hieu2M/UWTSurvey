import React from 'react';
import EventCard from '../components/events/EventCard';

const events = [
    {
        title: "Urban Design Workshop",
        date: "January 10, 2024",
        time: "12:30 PM - 1:30 PM",
        location: "UW Tacoma - 1st Floor TPS Building ",
        description: "Join us for an interactive workshop where we'll explore innovative urban design solutions for the UWT campus.",
        imageUrl: "./images/Pizzaflyer.png",
        tags: ["Workshop", "Design", "Interactive"]
    },
    // {
    //     title: "Community Feedback Session",
    //     date: "March 10, 2024",
    //     time: "5:30 PM - 7:00 PM",
    //     location: "William W. Philip Hall",
    //     description: "Share your thoughts and ideas about the future of UWT's campus design in this open community session.",
    //     imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //     tags: ["Community", "Feedback", "Planning"]
    // },
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

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-purple-700 text-white py-20">
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