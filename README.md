# Medieval Hello World React Website

A beautiful, medieval-themed "Hello World" website built with React that transports you to the realm of old English design and medieval aesthetics.

## Features

- ⚛️ Built with React 18
- 🏰 Medieval design with old English typography
- 📜 Parchment-style backgrounds and borders
- ⚔️ Medieval symbols and coat of arms
- ⏰ Real-time clock with medieval formatting
- 🎭 Animated medieval symbols with floating effects
- 🌐 Network accessible
- 🚀 Hot reload development server

## Design Elements

- **Typography**: Cinzel (for headings) and Crimson Text (for body text)
- **Color Scheme**: Earth tones, browns, and parchment colors
- **Background**: Rich gradient with subtle texture overlay
- **Borders**: Medieval-style borders with inset shadows
- **Animations**: Gentle floating and glowing effects

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The website will automatically open in your default browser at `http://localhost:3000`

## Access Your Website

- **Local**: http://localhost:3000
- **Network**: http://[YOUR_LOCAL_IP]:3000

## Network Access

To make your website accessible from other devices on your local network:

1. Find your local IP address:
   ```bash
   # On macOS/Linux
   ifconfig | grep "inet " | grep -v 127.0.0.1
   
   # On Windows
   ipconfig | findstr "IPv4"
   ```

2. Other devices can access: `http://[YOUR_IP]:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── App.js          # Main App component with medieval content
├── App.css         # Medieval-themed styling
├── index.js        # App entry point
└── index.css       # Global styles

public/
└── index.html      # HTML template

package.json        # Dependencies and scripts
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Create React App** - Zero-config build setup
- **CSS3** - Medieval styling with animations and gradients
- **Google Fonts** - Cinzel and Crimson Text for authentic typography
- **ES6+** - Modern JavaScript features

## Medieval Theme Details

- **Coat of Arms**: Animated shield symbol at the top
- **Old English Text**: "Hark! Greetings, Fair Traveler!"
- **Medieval Symbols**: Swords, crowns, castles, and dragons
- **Parchment Backgrounds**: Cream and beige tones with subtle textures
- **Medieval Borders**: Rich brown borders with inset shadows
- **Time Display**: Formatted with medieval language

## Customization

- Modify `src/App.js` to change the medieval content
- Update `src/App.css` for styling changes
- Add new medieval-themed components in the `src/` directory
- Customize colors and fonts to match your preferred medieval aesthetic

## Stop the Server

Press `Ctrl+C` in the terminal to stop the development server.
