# Portfolio Website - Code Organization

## Project Structure

```
domingomesa.github.io/
├── index.html              # Main HTML file
├── package.json            # Project configuration
├── README.md              # Project documentation
│
├── css/                   # Stylesheets
│   ├── variables.css      # CSS variables and reset
│   ├── components.css     # Reusable components
│   └── style.css         # Main styles
│
├── js/                    # JavaScript modules
│   ├── utils.js          # Utility functions
│   ├── ui.js             # UI components
│   ├── navigation.js     # Navigation functionality
│   └── main.js           # Application entry point
│
└── img/                   # Images and assets
```

## Code Organization

### JavaScript Architecture

The JavaScript code is organized into modular components:

- **`utils.js`**: Common utility functions and DOM helpers
- **`ui.js`**: UI components and interactive elements
- **`navigation.js`**: Navigation and smooth scrolling
- **`main.js`**: Application coordinator and entry point

### CSS Architecture

CSS is organized using a component-based approach:

- **`variables.css`**: CSS custom properties and global styles
- **`components.css`**: Reusable UI components
- **`style.css`**: Page-specific styles

### Benefits of This Structure

1. **Modularity**: Each file has a single responsibility
2. **Maintainability**: Easy to find and modify specific functionality
3. **Scalability**: Easy to add new features without touching existing code
4. **Performance**: Can optimize loading and caching strategies
5. **Debugging**: Easier to isolate and fix issues

## Development

### Local Development

```bash
# Start local server
npm run dev
```

### File Loading Order

Files are loaded in dependency order:
1. CSS variables and reset
2. Component styles
3. Main styles
4. JavaScript utilities
5. JavaScript modules
6. Main application

## Future Enhancements

This structure supports easy addition of:
- Build tools (Webpack, Vite, etc.)
- CSS preprocessors (Sass, PostCSS)
- JavaScript bundling
- Image optimization
- Testing frameworks
- Linting tools
