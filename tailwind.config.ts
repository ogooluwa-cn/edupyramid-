/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
    extend: {
      colors: {
        error: {
          unsuccessful: '#EA4335'
        },
        success: {
          successful: '#BDA109'
        },
        main: {
          '100': '#BFA256'
        },
        customBlack: '#000000',
        customWhite: '#FFFFFF',
        greyColor: '#3571f3',
        pannelBlack: '#1F1E25',
        textColor: '#0d027b',
        accent: {
          '100': '#EDCA2C',
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        secondary: {
          '100': '#D4972B',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        neutral: {
          thinGrey: '#ECECEC'
        },
        button: {
          brandCore: '#0c0369'
        },
        gray: {
          lightGray: '#D3D3D3',
          darkGray: '#D3D3D3',
          thinGray: '#ECECEC',
          transGray: '#ffffffcc',
          littleGray: '#ffffff33',
          uniqueGray: '#E0E4E7',
          onGray: '#A9A9A9',
          circleGray: '#D9D9D9',
          circleTextGray: '#9D9D9D',
          selectGray: '#F9F9F9'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        smMax: {
          max: '639px'
        },
        mdMax: {
          max: '767px'
        },
        lgMax: {
          max: '1023px'
        }
      },
      borderRadius: {
        radius: '8px',
        bigRadius: '10px',
        biggerRadius: '15px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      backgroundColor: {
        customBg: '#1F1E25',
        subBg: '#F5F5F5',
        successfull: '#BDA109',
        red: '#FD3549'
      },
      fontSize: {
        'title-mobile': '1.125rem',
        'title-desktop': '1.75rem',
        'subtitle-mobile': '0.875rem',
        'subtitle-desktop': '1rem',
        small: '10px',
        medium: '12px',
        mid: '14px',
        normal: '16px',
        big: '50px'
      },
      fontFamily: {
        sans: [
          'Noto Sans',
          'sans-serif'
        ],
        acme: [
          'Acme',
          'sans-serif'
        ],
        inter: [
          'Inter',
          'sans-serif'
        ],
        poppins: [
          'Poppins',
          'sans-serif'
        ]
      },
      borderColor: {
        'white-transparent': '#ffffff33',
        littleGray: '#ffffff33',
        successfull: '#BDA109'
      },
      borderWidth: {
        '1': '1.03px'
      }
    }
  },
plugins: [require("tailwindcss-animate")],
};

/**
 * Font weights reference (use in Tailwind classes like `font-extrabold`, `font-black`, etc):
 * - font-thin        => 100
 * - font-extralight  => 200
 * - font-light       => 300
 * - font-normal      => 400
 * - font-medium      => 500
 * - font-semibold    => 600
 * - font-bold        => 700
 * - font-extrabold   => 800
 * - font-black       => 900
 */
