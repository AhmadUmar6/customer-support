import './globals.css';
import ThemeProvider from './theme/ThemeProvider';

export const metadata = {
  title: 'Customer Support AI',
  description: 'An AI-powered support assistant built with Next.js and Groq API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
