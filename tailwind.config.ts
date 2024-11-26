import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const maxContentWidth = 1136; // px
const pageMargin = 24; // px

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ssm: '300px',
      // => @media (min-width: 300px) { ... }
      msm: '400px',
      // => @media (min-width: 400px) { ... }
      mid: '896px',
      'mobile-breakpoint': '1210px',
      ...defaultTheme.screens,
    },
    fontSize: {
      xlTitle1: ['48px', '56px'],
      xlTitle2: ['38px', '46px'],
      largeTitle: ['30px', '38px'],
      title1: ['24px', '32px'],
      title2: ['22px', '28px'],
      title3: ['20px', '24px'],
      headline: ['16px', '24px'],
      body: ['17px', '22px'],
      bodyMedium: ['20px', '28px'],
      bodySmall: ['16px', '24px'],
      callout: ['14px', '20px'],
      subHeadline: ['15px', '20px'],
      footnote: ['13px', '18px'],
      caption: ['12px', '16px'],
      ...defaultTheme.fontSize,
    },
    extend: {
      colors: {
        primaryBackground: {
          DEFAULT: '#FFF',
        },
        primary: {
          DEFAULT: '#FFF',
          hover: '#FFF',
        },
        secondary: {
          DEFAULT: '#00000029',
          hover: '#00000014',
          8: 'rgba(60, 60, 67, 0.08)',
          32: 'rgba(60, 60, 67, 0.32)',
          64: 'rgba(60, 60, 67, 0.64)',
        },
        tertiary: {
          DEFAULT: '#1E164E',
          32: '#00000052',
        },
        indigo: {
          16: 'rgba(34, 21, 84, 0.16)',
          64: 'rgba(30, 22, 78, 0.64)',
          100: 'rgba(30, 22, 78, 1)',
        },
        semantic: { success: '#00A442', error: '#FF453A' },
        neutral: {
          background: '#F1EEE4',
          buttonBorder: 'rgba(218, 218, 218, 0.92)',
        },
        quarternary: {
          background: '#F6F7F9',
        },
        lighter: {
          DEFAULT: '#FFFFFF12',
        },
        white: {
          DEFAULT: '#FFFFFF',
          4: '#FFFFFF0A',
          8: '#FFFFFF14',
          16: '#FFFFFF29',
          24: '#FFFFFF3D',
          32: '#FFFFFF52',
          48: '#FFFFFF7A',
          64: '#FFFFFFA3',
          80: '#FFFFFFCC',
        },
        black: {
          DEFAULT: '#000000',
          4: '#0000000A',
          8: '#00000014',
          16: '#00000029',
          24: '#0000003D',
          32: '#00000052',
          48: '#0000007A',
          64: '#000000A3',
          80: '#000000CC',
        },
        yellow: {
          DEFAULT: '#FFCC00',
          16: '#FFD60A29',
          64: '#FFCC00A3',
          90: '#fff7e1',
        },
        orange: {
          DEFAULT: '#FF5A12',
        },
        lightText: {
          DEFAULT: '#787878',
        },
        dividerFill: {
          DEFAULT: '#e0e0e0',
        },
        primaryButtonFill: {
          DEFAULT: '#000',
          hover: '#333',
        },
        primaryButtonText: {
          DEFAULT: '#fff',
          hover: '#bababa',
        },
      },
      fontFamily: {},
      transitionProperty: {
        'min-width': 'min-width',
      },
      transitionTimingFunction: {
        'trip-ease': 'cubic-bezier(0.25, 0.1, 0, 1)',
      },
      spacing: {
        15: '60px',
        'spacing-01': '4px',
        'spacing-02': '8px',
        'spacing-03': '16px',
        'spacing-04': '24px',
        'spacing-06': '48px',
        'max-content-width': `${maxContentWidth}px`,
        'page-margin': `${pageMargin}px`,
        'content-width': `${maxContentWidth + pageMargin * 2}px`,
      },
      fontSize: {
        22: '1.375rem',
        25: '1.6rem',
        29: '1.8125rem',
        42: '2.625rem',
        52: '3.25rem',
      },
      maxWidth: {
        '8/10': '80%',
        1400: '87.5rem',
        '1/2': '50%',
      },
      maxHeight: {
        600: '37.5rem',
      },
      minHeight: { 200: '200px', 320: '320px' },
      boxShadow: {
        thumbnail: '0px 20px 25px -5px rgba(16,24,40,0.1)',
        medium: '0px 6px 12px 0px rgba(0,0,0,0.10)',
        bottom: '0 16px 12px rgb(23 37 69 / 12%)',
      },
      lineHeight: {
        1.2: '1.2',
        1.4: '1.4',
      },
      borderRadius: {
        '5xl': '40px',
      },
      zIndex: {
        overlays: '10104',
      },
    },
  },
  plugins: [],
};
export default config;
