import { Nunito, Roboto_Slab } from 'next/font/google';
 
export const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap'
});

export const robotoSlab = Roboto_Slab({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-slab',
  display: 'swap'
});