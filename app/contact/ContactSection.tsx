import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-[#fff6ec] px-4">
      <div className="bg-white p-10 rounded-md shadow-md text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold italic mb-6">CONTACT US</h1>
        <p className="text-xl italic mb-2">geminkboss17@gmail.com</p>
        <p className="text-xl italic mb-2">081717171717</p>
        <p className="text-xl italic">Jl. Jalan</p>
      </div>
    </section>
  );
};

export default ContactSection;