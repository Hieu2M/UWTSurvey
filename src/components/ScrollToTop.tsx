import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, search, hash } = useLocation();

    useEffect(() => {
        // Store current route on navigation
        const fullPath = pathname + search + hash;
        if (pathname !== '/') {
            window.localStorage.setItem('path', fullPath);
            // window.localStorage.setItem('lastVisit', Date.now().toString());
        }

        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname, search, hash]);

    return null;
}