import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Flexibble",
  description: "A dribble clone for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        {/* @ts-ignore */}
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
