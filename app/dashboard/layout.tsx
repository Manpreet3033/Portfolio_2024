"use client";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { auth, getAuth } from "@clerk/nextjs/server";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = useAuth();
  const router = useRouter();
  if (!userId) {
    router.push("/sign-in");
  } else {
    return (
      <main className="relative bg-black-400">
        <Navbar />
        <div className="flex">
          <SideBar />
          <section className="flex min-h-screen flex-col px-6 pt-[5.2rem]">
            <div className="mx-auto w-full max-w-5xl overflow-x-hidden">
              {children}
            </div>
          </section>
        </div>
      </main>
    );
  }
};

export default Layout;
