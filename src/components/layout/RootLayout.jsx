import { Outlet } from "react-router";
import NabBar from "./NabBar";
import Footer from "./Footer";
import Sticky from "./Sticky";
import ScrollTop from "../../ScrollTop";
import AuthModal from "../authModel/AuthModel"
const RootLayout = () => {
  return (
    <>
      <ScrollTop />
      <nav className="max-w-[1500px] mx-auto ">
        <NabBar />
        <Sticky />
      </nav>

      <main className="flex min-h-screen max-w-[1500px]  mx-auto flex-col items-baseline justify-between bg-[#131921]">
        <AuthModal/>
        <Outlet />
      </main>
      <footer className="max-w-[1500px] mx-auto ">
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
