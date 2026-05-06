/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f5f5f7',
        ink: '#1d1d1f',
        muted: '#707070',
        cta: '#0071e3',
        line: '#d8d8df',
      },
      fontFamily: {
        sans: [
          '"Pretendard Variable"',
          'Pretendard',
          '"Noto Sans KR"',
          '"Apple SD Gothic Neo"',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(29, 29, 31, 0.08)',
      },
    },
  },
  plugins: [],
};
