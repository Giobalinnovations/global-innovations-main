/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        inter: 'var(--inter)',
        'plus-jakarta-sans': 'var(--plus-jakarta-sans)',
        'dm-sans': 'var(--dm-sans)',
      },
      fontSize: {
        '7.5xl': '75px',
        '5.5xl': '50px',
        '4.5xl': '40px',
        '1xl': '22px',
      },
      spacing: {
        2.5: '10px',
        3.5: '15px',
        4.5: '18px',
        7.5: '30px',
        12.5: '50px',
        15: '60px',
        25: '100px',
      },
      boxShadow: {
        '3xl': '0px 14px 21px 0px rgba(58, 66, 89, 0.05)',
        '4xl': '0px 0px 8px 0px rgba(0, 0, 0, 0.15)',
      },
      dropShadow: {
        '3xl': '0 4px 50px rgba(0, 0, 0, 0.15)',
        '4xl': '0 0px 20px rgba(0, 31, 63, 0.15)',
      },
      backgroundImage: {
        'background-linear': 'var(--background-linear)',
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        green: {
          DEFAULT: 'var(--green)',
        },
        red: {
          DEFAULT: 'var(--red)',
        },
        purple: {
          DEFAULT: 'var(--purple)',
        },
        gray: {
          DEFAULT: 'var(--gray)',
        },
      },
      borderRadius: {
        '2.5xl': '20px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'custom-cussor': {
          from: {
            width: '0',
            height: '0',
            opacity: '1',
          },
          to: {
            width: '100%',
            height: '100%',
            opacity: '0',
          },
        },
        slideDown: {
          from: { transform: ' translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        spring: {
          '0%': {
            transform: 'scale(0.2, 0.2)',
            opacity: '0',
          },
          '50%': {
            opacity: '0.9',
          },
          '100%': {
            transform: 'scale(0.9, 0.9)',
            opacity: '0',
          },
        },
        'up-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-16px)' },
        },
        'left-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-15px)' },
        },
      },
      animation: {
        'spring-one': 'spring 3s ease-in-out 0s infinite',
        'spring-two': 'spring 3s ease-in-out 1s infinite',
        'spring-three': 'spring 3s ease-in-out 2s infinite',
        slideDown: 'slideDown 0.35s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'custom-cussor': 'custom-cussor 2s ease-out 0.5s infinite',
        'up-down': 'up-down 1.1s infinite alternate',
        'left-right': 'left-right 1.1s infinite alternate',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'rgb(var(--foreground-rgb))',
            fontSize: '1.125rem',
            lineHeight: '1.8',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            h1: {
              fontSize: '2.25rem',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3',
              fontWeight: '700',
              color: 'rgb(var(--foreground-rgb))',
            },
            h2: {
              fontSize: '1.875rem',
              marginTop: '1.75em',
              marginBottom: '0.75em',
              lineHeight: '1.35',
              fontWeight: '600',
              color: 'rgb(var(--foreground-rgb))',
            },
            h3: {
              fontSize: '1.5rem',
              marginTop: '1.5em',
              marginBottom: '0.75em',
              lineHeight: '1.4',
              fontWeight: '600',
              color: 'rgb(var(--foreground-rgb))',
            },
            'ul > li': {
              paddingLeft: '1.75em',
              position: 'relative',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ol > li': {
              paddingLeft: '0.5em',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: 'var(--primary)',
              backgroundColor: 'rgb(var(--primary-rgb) / 0.05)',
              padding: '1rem 1.5rem',
              borderRadius: '0.5rem',
              margin: '2rem 0',
            },
            code: {
              color: 'rgb(var(--foreground-rgb))',
              backgroundColor: 'rgb(var(--muted-rgb) / 0.2)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            pre: {
              backgroundColor: 'rgb(var(--muted-rgb) / 0.1)',
              padding: '1.25rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            a: {
              color: 'var(--primary)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
