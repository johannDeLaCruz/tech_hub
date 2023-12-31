import "@styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import dynamic from "next/dynamic";
const Providers = dynamic(() => import("@components/Providers"), {
  ssr: false,
});

export const metadata = {
  title: "TechHub",
  description: "Modern Technology Database",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="dark:bg-black bg-white dark:text-white text-black">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
