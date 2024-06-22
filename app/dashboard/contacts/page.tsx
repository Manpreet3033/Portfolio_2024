import { CardHoverEffectDemo } from "@/components/Card";
import { getAllContacts } from "@/lib/actions/contact.actions";
import React from "react";

const page = async () => {
  const data = await getAllContacts();
  const contacts = data.allContacts;
  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-center pt-12 text-blue-100">
        All Contacts
      </h1>
      <div className="mt-8">
        <CardHoverEffectDemo items={contacts} />
        {contacts.length === 0 && (
          <p className="text-lg text-neutral-400 text-center">
            No contacts found.
          </p>
        )}
      </div>
    </>
  );
};

export default page;
