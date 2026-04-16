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
        "on-background": "var(--color-on-background)",
        "error": "var(--color-error)",
        "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant)",
        "on-error": "var(--color-on-error)",
        "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant)",
        "secondary-fixed": "var(--color-secondary-fixed)",
        "on-primary-fixed": "var(--color-on-primary-fixed)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "surface-tint": "var(--color-surface-tint)",
        "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",
        "surface-container-low": "var(--color-surface-container-low)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
        "on-primary": "var(--color-on-primary)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
        "on-surface": "var(--color-on-surface)",
        "on-tertiary": "var(--color-on-tertiary)",
        "inverse-primary": "var(--color-inverse-primary)",
        "background": "var(--color-background)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
        "tertiary-container": "var(--color-tertiary-container)",
        "surface-bright": "var(--color-surface-bright)",
        "outline": "var(--color-outline)",
        "on-primary-container": "var(--color-on-primary-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        "primary-fixed": "var(--color-primary-fixed)",
        "surface-variant": "var(--color-surface-variant)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed)",
        "on-error-container": "var(--color-on-error-container)",
        "secondary-container": "var(--color-secondary-container)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "error-container": "var(--color-error-container)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        "inverse-surface": "var(--color-inverse-surface)",
        "primary": "var(--color-primary)",
        "surface": "var(--color-surface)",
        "tertiary-fixed": "var(--color-tertiary-fixed)",
        "on-secondary": "var(--color-on-secondary)",
        "surface-container": "var(--color-surface-container)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim)",
        "primary-container": "var(--color-primary-container)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        "tertiary": "var(--color-tertiary)",
        "outline-variant": "var(--color-outline-variant)",
        "secondary": "var(--color-secondary)",
        "surface-dim": "var(--color-surface-dim)",
        "on-surface-variant": "var(--color-on-surface-variant)"
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
