'use client';

import { useState } from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [details, setDetails] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, username, details });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // hilang setelah 3 detik
  };

  return (
    <div className="min-h-screen bg-[#FFF5E8] flex flex-col justify-between relative">
      <div className="flex-grow flex flex-col items-center py-16">
        <h1 className="text-6xl font-sakana italic mb-10 text-black">CONTACT US</h1> {/* Ukuran font diperbesar lebih besar */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md p-8 rounded-xl bg-white bg-opacity-90 border-2 border-solid border-black border-opacity-10 shadow-md">
          <div>
            <label className="block text-sm mb-1 text-black">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg bg-gray-300 text-black placeholder-gray-500 focus:outline-none ${poppins.className}`}
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg bg-gray-300 text-black placeholder-gray-500 focus:outline-none ${poppins.className}`}
              placeholder="Username"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">Details</label>
            <input
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg bg-gray-300 text-black placeholder-gray-500 focus:outline-none ${poppins.className}`}
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

      {/* POPUP NOTIFICATION */}
      {showPopup && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg z-50 text-center text-lg font-semibold transition-all duration-300">
          ✅ Success! Your message has been sent.
        </div>
      )}
    </div>
  );
}
