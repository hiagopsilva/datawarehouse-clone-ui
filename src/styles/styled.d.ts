import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;

      backgroundTertiary: string;
      background: string;

      fontPrimaryColor: string;
      fontSecundaryColor: string;

      buttonShadow: string;
    };
  }
}
