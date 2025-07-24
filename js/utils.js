/**
 * Utility functions for common DOM operations and helpers
 */

const Utils = {
    /**
     * Safely get element by ID with error handling
     */
    getElement(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with ID '${id}' not found`);
        }
        return element;
    },

    /**
     * Safely query selector with error handling
     */
    querySelector(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Element with selector '${selector}' not found`);
        }
        return element;
    },

    /**
     * Safely query all selectors
     */
    querySelectorAll(selector) {
        return document.querySelectorAll(selector);
    },

    /**
     * Debounce function for performance optimization
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Smooth scroll to element
     */
    smoothScrollTo(element, options = {}) {
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                ...options
            });
        }
    }
};

// Export for module usage (if needed later)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
