import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-js App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
