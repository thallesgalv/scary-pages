import 'styled-components';

// interface Font {
//   size?: string;
//   line?: string;
// }

declare module 'styled-components' {
  export interface DefaultTheme {
    rem: (number) => string;
    color?: {
      primary?: string;
      secondary?: string;
      tertiary?: string;
      background?: string;
      title?: string;
      text?: string;
    };
    font?: {
      tm0x5?: {
        size?: string;
        line?: string;
      };
      tm1?: {
        size?: string;
        line?: string;
      };
      tm1x5?: {
        size?: string;
        line?: string;
      };
      tm2?: {
        size?: string;
        line?: string;
      };
      tm3?: {
        size?: string;
        line?: string;
      };
      tm4?: {
        size?: string;
        line?: string;
      };
      tm5?: {
        size?: string;
        line?: string;
      };
      tm6?: {
        size?: string;
        line?: string;
      };
      tm7?: {
        size?: string;
        line?: string;
      };
      tm8?: {
        size?: string;
        line?: string;
      };
      tm9?: {
        size?: string;
        line?: string;
      };
    };
    fontFamilyPrimary?: string;
    fontFamilySecondary?: string;
    menuHeight: number;
    footerHeight: number;
    radius: number;
    spacing?: number;
    maxWidth?: number;
  }
}
