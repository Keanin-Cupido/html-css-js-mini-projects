import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from '../components/Nav'
 
const poppins = Poppins({
  weight: '200',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Mini Frontend Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full h-full min-h-screen flex items-start justify-start`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
