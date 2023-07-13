import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home({ children }) {
  return (
    <>
      {children}
      <Navbar />
      <Footer />
      <Link href="/login"></Link>
    </>
  );
}
