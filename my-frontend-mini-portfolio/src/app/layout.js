import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from '../components/Nav'
import Footer from '../components/Footer';
 
const poppins = Poppins({
  weight: '200',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Mini Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-[#DDE9F8] w-full h-full min-h-screen flex-col items-start justify-start bg-[#0E2643]`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
