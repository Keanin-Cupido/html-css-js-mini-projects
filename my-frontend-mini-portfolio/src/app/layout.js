import { Poppins } from "next/font/google";
import "./globals.css";
 
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
