/**
 * UI components and interactive elements
 */

const UI = {
    init() {
        this.updateFooterYear();
        this.setupDynamicContent();
    },

    /**
     * Update footer year dynamically
     */
    updateFooterYear() {
        const yearElement = Utils.getElement('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    },

    /**
     * Setup any dynamic content that might be added later
     */
    setupDynamicContent() {
        // This can be expanded for future dynamic features
        // like loading animations, dynamic project cards, etc.
        console.log('UI components initialized');
    },

    /**
     * Show loading state for future AJAX calls
     */
    showLoading(element) {
        if (element) {
            element.classList.add('loading');
        }
    },

    /**
     * Hide loading state
     */
    hideLoading(element) {
        if (element) {
            element.classList.remove('loading');
        }
    },

    /**
     * Add animation classes for future enhancements
     */
    addAnimation(element, animationClass) {
        if (element) {
            element.classList.add(animationClass);
            
            // Remove animation class after animation completes
            element.addEventListener('animationend', () => {
                element.classList.remove(animationClass);
            }, { once: true });
        }
    }
};
