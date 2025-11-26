import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata = {
  title: "My Blog App",
  description: "Simple blog built with Next.js & TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-orange min-h-screen flex flex-col">
        <Navbar />

        {/* Content takes all remaining height */}
        <main className="grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
