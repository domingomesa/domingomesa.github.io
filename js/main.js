/**
 * Main application entry point
 * Coordinates all modules and initializes the application
 */

const App = {
    /**
     * Initialize the application
     */
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this.start.bind(this));
        } else {
            this.start();
        }
    },

    /**
     * Start all application modules
     */
    start() {
        try {
            // Initialize all modules
            UI.init();
            Navigation.init();

            console.log('Portfolio application initialized successfully');
        } catch (error) {
            console.error('Error initializing application:', error);
        }
    },

    /**
     * Handle any global errors
     */
    handleError(error) {
        console.error('Application error:', error);
        // Could add error reporting here in the future
    }
};

// Global error handler
window.addEventListener('error', (event) => {
    App.handleError(event.error);
});

// Initialize the application
App.init();
