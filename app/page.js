import Image from "next/image";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" min-h-screen ">
      <Landing/>
      <About/>
      <Footer />
    </div>
  );
}
