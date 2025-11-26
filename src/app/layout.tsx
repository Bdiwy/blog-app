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
      <body className="bg-white">
        <Navbar />

        {/* Page Content */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
