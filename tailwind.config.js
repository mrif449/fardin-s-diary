module.exports = {
    darkMode: 'class',
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3B82F6',
          // Base backgrounds
          light: '#ffffff',    // White background for light mode
          dark: '#0F172A',     // Dark background for dark mode
          // Secondary backgrounds
          'light-secondary': '#f3f4f6',  // Light gray
          'dark-secondary': '#1E293B'    // Dark blue
        }
      },
    },
    plugins: [],
  }