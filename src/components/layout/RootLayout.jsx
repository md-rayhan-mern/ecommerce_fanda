import { Outlet } from "react-router";
import NabBar from "./NabBar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <NabBar />
      <main className="flex min-h-screen max-w-[1500px] flex-col items-baseline justify-between bg-[#131921]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
