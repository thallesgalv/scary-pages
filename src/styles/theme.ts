import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  rem: (param: number) => `${param / 16}rem`,
  color: {
    primary: '#363636',
    secondary: '#302525',
    tertiary: '#685D5D',
    background: '#363636',
    title: '#fff',
    text: '#fff',
  },
  font: {
    tm0x5: {
      size: '0.875rem', // 14px
      line: '1.25rem', // 20px
    },
    tm1: {
      size: '1rem', // 16px
      line: '1.5rem', // 24px
    },
    tm1x5: {
      size: '1.25rem', // 20px
      line: '1.75rem', // 28px
    },
    tm2: {
      size: '1.5rem', // 24px
      line: '2rem', // 32px
    },
    tm3: {
      size: '1.875rem', // 30px
      line: '2.25rem', // 36px
    },
    tm4: {
      size: '2.25rem', // 36px
      line: '2.5rem', // 40px
    },
    tm5: {
      size: '3rem', // 48px
      line: '1',
    },
    tm6: {
      size: '3.75rem', // 60px
      line: '1',
    },
    tm7: {
      size: '4.5rem', // 72px
      line: '1',
    },
    tm8: {
      size: '6rem', // 96px
      line: '1',
    },
    tm9: {
      size: '8rem', // 128px
      line: '1',
    },
  },
  fontFamilyPrimary: 'Nunito',
  fontFamilySecondary: 'Boogaloo',
  menuHeight: 80,
  footerHeight: 60,
  radius: 16,
};

export { theme };
