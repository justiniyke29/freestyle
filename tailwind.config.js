/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontFamily: {
        proximaNovaBold: ['"Proxima-Nova-Bold", sans-serif'],
        proximaNovaLight: ['"Proxima-Nova-Light", sans-serif'],
        proximaNovaMedium: ['"Proxima-Nova-Medium", sans-serif'],
        proximaNovaRegular: ['"Proxima-Nova-Regular", sans-serif'],
        proximaNovaSemibold: ['"Proxima-Nova-Semibold", sans-serif'],
        sfProTextBold: ['"SFProText-Bold", sans-serif'],
        sfProTextLight: ['"SFProText-Light", sans-serif'],
        sfProTextMedium: ['"SFProText-Medium", sans-serif'],
        sfProTextRegular: ['"SFProText-Regular", sans-serif'],
        sfProTextSemibold: ['"SFProText-Semibold", sans-serif'],
      },
      fontSize: {
        xxs: '0.65rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      extend: {
        colors: {
          'myafro-black': '#313131',
          'afro-black-500': '#030303',
          primary: {
            main: '#FF7D8F',
            dark: '#bc5966',
            light: '#ffcbd2',
            bg: '#FFF1F4',
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        backgroundImage: {
          // 'subscribe-image':
          //   "url('/assets/images/vendor/public-view/subscribe-image.png')",
          // 'venues-pattern':
          //   "url('/assets/images/vendor/public-view/image-2.png')",
          // 'scribble-pattern':
          //   "url('/assets/images/vendor/public-view/image-1.png')",
          // 'subscribe-background':
          //   "url('/assets/images/vendor/public-view/SubscriptionBackground.png')",
        },
      },
    },
  plugins: [require("tailwindcss-animate")],
};