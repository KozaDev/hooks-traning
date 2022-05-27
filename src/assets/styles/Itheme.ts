import { Imode } from './colors';
import { Isizes } from './sizes';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: Imode;
    sizes: Isizes;
  }
}
