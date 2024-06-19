"use client";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ErrorPage from "../[...not_found]/page";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = useAuth();
  const router = useRouter();
  if (!userId) {
    return <ErrorPage />;
  } else {
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
  }
};

export default Layout;
