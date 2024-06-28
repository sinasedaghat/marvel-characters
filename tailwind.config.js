export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif']
      },
      spacing: {
        'custom-padding': 'var(--custom-padding)',
      },
    },
  },
  plugins: [],
}
