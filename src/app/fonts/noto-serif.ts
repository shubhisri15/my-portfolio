import { Noto_Serif } from 'next/font/google';

export const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['200','400','700'], // Pick the weights you need
  variable: '--font-noto-serif',
  display: 'swap',
});