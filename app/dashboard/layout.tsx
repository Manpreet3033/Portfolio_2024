import SideBar from "@/components/SideBar";
import React from "react";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-black-400">
      <Navbar />
      <div className="flex">
        <SideBar />
        <section className="flex flex-1 min-h-screen flex-col px-6 pt-[5.2rem]">
          <div className="mx-auto w-full overflow-x-hidden">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
