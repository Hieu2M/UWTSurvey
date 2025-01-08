import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react';

const contactInfo = [
    {
        icon: Instagram,
        title: "Instagram",
        details: "@udecapstone",
        link: "https://instagram.com/udecapstone"
    },
    // {
    //     icon: Mail,
    //     title: "Email",
    //     details: "uwtdesign@uw.edu",
    //     link: "mailto:uwtdesign@uw.edu"
    // },
    // {
    //     icon: Phone,
    //     title: "Phone",
    //     details: "(253) 000-000",
    //     link: "tel:+12536924000"
    // },
    {
        icon: MapPin,
        title: "Location",
        details: "TPS Room 103 - 1900 Commerce Street, Tacoma, WA 98402",
        link: "https://goo.gl/maps/1234"
    }
];

const contactInfo2 = [
    // {
    //     icon: Instagram,
    //     title: "Instagram",
    //     details: "@uwt_urbandesign",
    //     link: "https://instagram.com/uwt_urbandesign"
    // },
    {
        icon: Mail,
        title: "Email",
        details: "bsafar@uw.edu",
        link: "mailto:bsafar@uw.edu"
    },
    {
        icon: Phone,
        title: "Phone",
        details: "(253) 692-4673",
        link: "tel:+12536924673"
    },
    {
        icon: MapPin,
        title: "Location",
        details: "Pinkerton Building, 312 - 1900 Commerce Street, Tacoma, WA 98402",
        link: "https://goo.gl/maps/1234"
    }
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create Instagram DM link with pre-filled message
        const message = `Name: ${formData.name}%0A`;
        const email = `Email: ${formData.email}%0A`;
        const userMessage = `Message: ${formData.message}`;
        const instagramUrl = `https://ig.me/m/uwtinvolvement/inbox?message=${message}${email}${userMessage}`;

        // Open Instagram in a new tab
        window.open(instagramUrl, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Contact Hero */}
            <section className="bg-purple-700 text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl max-w-2xl">
                        If you are having any confusion or question, don't hesitate to get in touch. <br/>Below are the
                        link to our project manager and our team's contact method.
                    </p>
                </div>
            </section>


            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-6">Project Manager - Bára Šafářová, Ph.D.</h1>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo2.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                    <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                                        <Icon className="h-6 w-6 text-purple-600"/>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-purple-600 hover:text-purple-700 transition-colors"
                                            target={info.link.startsWith('http') ? '_blank' : undefined}
                                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        >
                                            {info.details}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600">{info.details}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-6">2024-2025 Cohort Contact</h1>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                    <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                                        <Icon className="h-6 w-6 text-purple-600"/>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-purple-600 hover:text-purple-700 transition-colors"
                                            target={info.link.startsWith('http') ? '_blank' : undefined}
                                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        >
                                            {info.details}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600">{info.details}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            {/*<section className="py-20 bg-gray-50">*/}
            {/*    <div className="container mx-auto px-6">*/}
            {/*        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">*/}
            {/*            <div className="flex items-center space-x-3 mb-6">*/}
            {/*                <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>*/}
            {/*                <Instagram className="h-6 w-6 text-purple-600" />*/}
            {/*            </div>*/}
            {/*            <form onSubmit={handleSubmit} className="space-y-6">*/}
            {/*                <div>*/}
            {/*                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">*/}
            {/*                        Name*/}
            {/*                    </label>*/}
            {/*                    <input*/}
            {/*                        type="text"*/}
            {/*                        id="name"*/}
            {/*                        value={formData.name}*/}
            {/*                        onChange={handleChange}*/}
            {/*                        required*/}
            {/*                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">*/}
            {/*                        Email*/}
            {/*                    </label>*/}
            {/*                    <input*/}
            {/*                        type="email"*/}
            {/*                        id="email"*/}
            {/*                        value={formData.email}*/}
            {/*                        onChange={handleChange}*/}
            {/*                        required*/}
            {/*                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">*/}
            {/*                        Message*/}
            {/*                    </label>*/}
            {/*                    <textarea*/}
            {/*                        id="message"*/}
            {/*                        value={formData.message}*/}
            {/*                        onChange={handleChange}*/}
            {/*                        required*/}
            {/*                        rows={4}*/}
            {/*                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"*/}
            {/*                    ></textarea>*/}
            {/*                </div>*/}
            {/*                <button*/}
            {/*                    type="submit"*/}
            {/*                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"*/}
            {/*                >*/}
            {/*                    <span>Send via Instagram</span>*/}
            {/*                    <Instagram className="h-5 w-5" />*/}
            {/*                </button>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    );
}