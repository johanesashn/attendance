import Navbar from "./components/Navbar";
import "@/app/globals.css"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'],
});

export const metadata = {
  title: "Go Attend",
  description: "The best attendance web app in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section className="background-white font-poppins">
          <Navbar/>
          <div className="mt-20 pt-2 p-4">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
