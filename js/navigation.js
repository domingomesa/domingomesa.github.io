/**
 * Navigation and smooth scrolling functionality
 */

const Navigation = {
    init() {
        this.setupSmoothScrolling();
        this.setupBackToTop();
    },

    /**
     * Setup smooth scrolling for navigation links
     */
    setupSmoothScrolling() {
        const navLinks = Utils.querySelectorAll('nav a, header a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', this.handleNavClick.bind(this));
        });
    },

    /**
     * Handle navigation link clicks
     */
    handleNavClick(event) {
        event.preventDefault();
        
        const targetId = event.target.getAttribute('href');
        const targetElement = Utils.querySelector(targetId);
        
        if (targetElement) {
            Utils.smoothScrollTo(targetElement);
            this.updateURL(targetId);
        }
    },

    /**
     * Update URL hash after smooth scroll
     */
    updateURL(targetId) {
        if (history.pushState) {
            history.pushState(null, null, targetId);
        }
    },

    /**
     * Setup back-to-top button functionality
     */
    setupBackToTop() {
        const toTopBtn = Utils.getElement('to-top');
        if (!toTopBtn) return;

        // Show/hide button on scroll (debounced for performance)
        const debouncedScroll = Utils.debounce(() => {
            toTopBtn.classList.toggle('show', window.scrollY > 300);
        }, 10);

        window.addEventListener('scroll', debouncedScroll);

        // Smooth scroll to top on click
        toTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.clearURL();
        });
    },

    /**
     * Clear URL hash
     */
    clearURL() {
        if (history.pushState) {
            history.pushState("", document.title, 
                window.location.pathname + window.location.search);
        }
    }
};
