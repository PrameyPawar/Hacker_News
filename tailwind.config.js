/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-background": "#1c1b1c",
        "error": "#ba1a1a",
        "on-secondary-fixed-variant": "#7a3006",
        "on-error": "#ffffff",
        "on-tertiary-fixed-variant": "#00497b",
        "secondary-fixed": "#ffdbcd",
        "on-primary-fixed": "#360f00",
        "surface-container-lowest": "#ffffff",
        "surface-tint": "#a33e00",
        "tertiary-fixed-dim": "#9ccaff",
        "surface-container-low": "#f6f3f4",
        "on-tertiary-fixed": "#001d35",
        "on-primary": "#ffffff",
        "on-primary-fixed-variant": "#7c2e00",
        "on-surface": "#1c1b1c",
        "on-tertiary": "#ffffff",
        "inverse-primary": "#ffb596",
        "background": "#fcf8f9",
        "inverse-on-surface": "#f3f0f1",
        "tertiary-container": "#009cfc",
        "surface-bright": "#fcf8f9",
        "outline": "#8e7164",
        "on-primary-container": "#561d00",
        "surface-container-high": "#eae7e8",
        "primary-fixed": "#ffdbcd",
        "surface-variant": "#e5e2e3",
        "secondary-fixed-dim": "#ffb596",
        "on-secondary-fixed": "#360f00",
        "on-error-container": "#93000a",
        "secondary-container": "#fe9565",
        "surface-container-highest": "#e5e2e3",
        "error-container": "#ffdad6",
        "on-secondary-container": "#752d03",
        "inverse-surface": "#313031",
        "primary": "#a33e00",
        "surface": "#fcf8f9",
        "tertiary-fixed": "#d0e4ff",
        "on-secondary": "#ffffff",
        "surface-container": "#f0edee",
        "primary-fixed-dim": "#ffb596",
        "primary-container": "#ff6600",
        "on-tertiary-container": "#003155",
        "tertiary": "#0062a1",
        "outline-variant": "#e3bfb1",
        "secondary": "#99461d",
        "surface-dim": "#dcd9da",
        "on-surface-variant": "#5a4136"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "keyframes": {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "pop": {
          "0%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" }
        }
      },
      "animation": {
        "slide-up": "slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "pop": "pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards"
      },
      "fontFamily": {
        "headline": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ],
}
