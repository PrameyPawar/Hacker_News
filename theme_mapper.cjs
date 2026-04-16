const fs = require('fs');

const rawColors = {
  'on-background': '#1c1b1c',
  'error': '#ba1a1a',
  'on-secondary-fixed-variant': '#7a3006',
  'on-error': '#ffffff',
  'on-tertiary-fixed-variant': '#00497b',
  'secondary-fixed': '#ffdbcd',
  'on-primary-fixed': '#360f00',
  'surface-container-lowest': '#ffffff',
  'surface-tint': '#a33e00',
  'tertiary-fixed-dim': '#9ccaff',
  'surface-container-low': '#f6f3f4',
  'on-tertiary-fixed': '#001d35',
  'on-primary': '#ffffff',
  'on-primary-fixed-variant': '#7c2e00',
  'on-surface': '#1c1b1c',
  'on-tertiary': '#ffffff',
  'inverse-primary': '#ffb596',
  'background': '#fcf8f9',
  'inverse-on-surface': '#f3f0f1',
  'tertiary-container': '#009cfc',
  'surface-bright': '#fcf8f9',
  'outline': '#8e7164',
  'on-primary-container': '#561d00',
  'surface-container-high': '#eae7e8',
  'primary-fixed': '#ffdbcd',
  'surface-variant': '#e5e2e3',
  'secondary-fixed-dim': '#ffb596',
  'on-secondary-fixed': '#360f00',
  'on-error-container': '#93000a',
  'secondary-container': '#fe9565',
  'surface-container-highest': '#e5e2e3',
  'error-container': '#ffdad6',
  'on-secondary-container': '#752d03',
  'inverse-surface': '#313031',
  'primary': '#a33e00',
  'surface': '#fcf8f9',
  'tertiary-fixed': '#d0e4ff',
  'on-secondary': '#ffffff',
  'surface-container': '#f0edee',
  'primary-fixed-dim': '#ffb596',
  'primary-container': '#ff6600',
  'on-tertiary-container': '#003155',
  'tertiary': '#0062a1',
  'outline-variant': '#e3bfb1',
  'secondary': '#99461d',
  'surface-dim': '#dcd9da',
  'on-surface-variant': '#5a4136'
};

const darkOverrides = {
  'background': '#131213',
  'on-background': '#fcf8f9',
  'surface': '#131213',
  'on-surface': '#fcf8f9',
  'surface-variant': '#5a4136',
  'on-surface-variant': '#e3bfb1',
  'surface-container-lowest': '#090809',
  'surface-container-low': '#1c1b1c',
  'surface-container': '#232223',
  'surface-container-high': '#2b2a2b',
  'surface-container-highest': '#363435',
  'primary': '#ffb596',
  'on-primary': '#561d00',
  'primary-container': '#7c2e00',
  'on-primary-container': '#ffdbcd',
  'outline': '#b59a8e',
  'outline-variant': '#5a4136',
  'secondary': '#ffb596',
  'on-secondary': '#561d00',
  'tertiary': '#9ccaff',
  'on-tertiary': '#003258',
  'surface-tint': '#ffb596',
  'surface-bright': '#363435',
  'surface-dim': '#141314',
  'inverse-surface': '#e5e2e3',
  'inverse-on-surface': '#313031',
  'inverse-primary': '#a33e00'
};

let cssLight = ':root {\n';
let cssDark = '.dark {\n';
let twColors = {};

for (const key of Object.keys(rawColors)) {
  cssLight += `  --color-${key}: ${rawColors[key]};\n`;
  const darkValue = darkOverrides[key] || rawColors[key];
  cssDark += `  --color-${key}: ${darkValue};\n`;
  twColors[key] = `var(--color-${key})`;
}
cssLight += '}\n';
cssDark += '}\n';

// Prepend to index.css
const oldCss = fs.readFileSync('src/index.css', 'utf-8');
const cleanOldCss = oldCss.replace(/:root\s*\{[\s\S]*?\}\n/, '').replace(/\.dark\s*\{[\s\S]*?\}\n/, '');
const cssContent = cssLight + '\n' + cssDark + '\n' + cleanOldCss;
fs.writeFileSync('src/index.css', cssContent);

// Update tailwind.config.js
let twConfig = fs.readFileSync('tailwind.config.js', 'utf-8');
const replacement = `"colors": ` + JSON.stringify(twColors, null, 8);
twConfig = twConfig.replace(/"colors":\s*\{[\s\S]*?\}(?=,\n\s*"borderRadius")/m, replacement);
fs.writeFileSync('tailwind.config.js', twConfig);

console.log("Theme converted successfully!");
