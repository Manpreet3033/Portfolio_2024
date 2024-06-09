import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <h1 className="heading text-blue-100 pt-10">
      Project Edit ID Page with id:&nbsp;{params.id}
    </h1>
  );
};

export default page;
