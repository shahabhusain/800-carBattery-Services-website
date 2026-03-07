import "./globals.css";
import Footer from "./src/Footer";
import Header from "./src/Header";
import TopBar from "./src/TopBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
