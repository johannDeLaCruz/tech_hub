import "@styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
  title: "TechHub",
  description: "Modern Technology Database",
};

const footerNavLinks = {
  
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="dark:text-white text-black">
      <body className="dark:bg-black bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
