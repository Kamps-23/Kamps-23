import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Ulah's project",
  description: "Arcgis Map",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
