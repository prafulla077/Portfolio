import Image from "next/image";
import Header from "./Header/header";
import Landing from "./Landing/landing";
import Footer from "./Footer/footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
