import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center bg-white dark:bg-white items-center w-full min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
