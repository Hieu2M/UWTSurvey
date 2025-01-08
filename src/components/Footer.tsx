import React from 'react';
import { Github, Twitter, Instagram, Facebook } from 'lucide-react';

const socialLinks = [
    // { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/udecapstone', label: 'Instagram' },
    // { icon: Github, href: 'https://github.com', label: 'GitHub' }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-purple-700 text-white py-4">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="text-sm">
                    ©{currentYear}; Designed by <a href="https://www.linkedin.com/in/hieutk96/" target="_blank"><b>Hieu Nguyen</b></a>
                </div>

                <div className="flex items-center space-x-6 mt-4 sm:mt-0">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className="hover:text-purple-200 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>

                <a
                    href="/privacy-policy"
                    className="text-sm hover:text-purple-200 transition-colors mt-4 sm:mt-0"
                >
                    All rights reserved.
                </a>
            </div>
        </footer>
    );
}