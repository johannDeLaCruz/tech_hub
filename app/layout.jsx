import "@styles/globals.css";  
import Nav from "@components/Nav";
import Footer from "@components/Footer";

export const metadata = {
  title: "TechHub",
  description: "Modern Technology Database",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
