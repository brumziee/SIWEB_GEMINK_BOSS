"use client";

import { useState } from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = () => {
    console.log({ email, username, details });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf5e6] to-[#1e1eff] flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center py-16">
        <h1 className="text-3xl font-sakana italic mb-10 text-black">CONTACT US</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md p-8 rounded-xl bg-white bg-opacity-90 shadow-md">
          <div>
            <label className="block text-sm mb-1 text-black">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-white focus:outline-none ${poppins.className}`}
              placeholder="Asep@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-white focus:outline-none ${poppins.className}`}
              placeholder="Asep"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">Details</label>
            <input
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-white focus:outline-none ${poppins.className}`}
              placeholder="Enter your problem details"
            />
          </div>
          <button
            type="submit"
            className={`bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-10 py-3 mt-4 text-lg ${poppins.className}`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
