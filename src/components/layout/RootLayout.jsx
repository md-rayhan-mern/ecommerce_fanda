import { Outlet } from "react-router";
import NabBar from "./NabBar";
import Footer from "./Footer";
import Sticky from "./Sticky";
import ScrollTop from "../../ScrollTop";
const RootLayout = () => {
  return (
    <>
      <ScrollTop />
      <nav className="max-w-[1500px] mx-auto ">
        <NabBar />
        <Sticky />
      </nav>

      <main className="flex min-h-screen max-w-[1500px]  mx-auto flex-col items-baseline justify-between bg-[#131921]">
        <Outlet />
      </main>
      <footer className="max-w-[1500px] mx-auto ">
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
