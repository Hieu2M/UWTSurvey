import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
<<<<<<< HEAD
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Handle hash navigation
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        // Default scroll to top
=======
    const { pathname, search, hash } = useLocation();

    useEffect(() => {
        // Store current route on navigation
        const fullPath = pathname + search + hash;
        if (pathname !== '/') {
            window.localStorage.setItem('path', fullPath);
            // window.localStorage.setItem('lastVisit', Date.now().toString());
        }

        // Smooth scroll to top
>>>>>>> parent of 9a337b3 (update refresh function 3)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
<<<<<<< HEAD

        // Store current path including hash in sessionStorage
        try {
            const fullPath = pathname + (hash || '');
            if (pathname !== '/') {
                window.sessionStorage.setItem('lastPath', fullPath);
            }
        } catch (e) {
            console.warn('Failed to store path:', e);
        }
    }, [pathname, hash]);
=======
    }, [pathname, search, hash]);
>>>>>>> parent of 9a337b3 (update refresh function 3)

    return null;
}