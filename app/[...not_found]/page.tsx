import Image from "next/image";
import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <Image
        src="/Error.svg"
        alt="Error - 404"
        className="bg-black-100 items-center justify-center flex w-screen h-screen"
        width={400}
        height={400}
      />
    </div>
  );
};

export default ErrorPage;
