import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ padding: '2rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}