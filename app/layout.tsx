import './globals.css';
import type { Metadata } from 'next';
import { Inter, Pacifico, Inconsolata, Roboto_Mono } from 'next/font/google';
import Nav from './components/Nav';
import AuthProvider from '@/context/AuthProvider';
import { Providers } from '@/store/Provider';

const inter = Inter({ subsets: ['latin'] });

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto_mono',
});
const pacifito = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifito',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inconsolata.variable} ${pacifito.variable} ${roboto_mono.variable}`}
    >
      <body className={inter.className}>
        <Providers>
          <AuthProvider>
            <Nav />
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
