import "@styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
  title: "TechHub",
  description: "Modern Technology Database",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="dark:text-white text-black">
      <body className="dark:bg-black bg-white">
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
