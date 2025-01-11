import type { Config } from 'tailwindcss'

    const config: Config = {
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          colors: {
            'primary-dark': '#1a202c',
            'secondary-dark': '#2d3748',
            'accent-color': '#667eea',
            'text-color': '#edf2f7',
            'chat-user': '#4a5568',
            'chat-assistant': '#2f855a',
          },
          fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
          },
          boxShadow: {
            'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
          keyframes: {
            'float': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            },
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
          },
        },
      },
      plugins: [require("daisyui")],
    }
    export default config
