import './globals.scss';
import type { Metadata } from 'next';
import { Roboto_Serif } from 'next/font/google';
import ToasterDisplay from '@/components/notifications/ToasterDisplay';

const roboto = Roboto_Serif({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Automation Socials',
  description: 'BoDevops developer',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={roboto.className} lang='en'>
      <body>
        {children}
        <ToasterDisplay />
      </body>
    </html>
  );
}
