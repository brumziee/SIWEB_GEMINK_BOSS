import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">
                <span className="text-white">GEMINK</span> BOSS
            </div>
            <ul className="flex gap-6 text-sm">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Our Team</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Testimoni</a></li>
                <li><a href="#" className="hover:underline font-bold">Katalog</a></li>
            </ul>
            <div className="flex items-center gap-2">
                <span className="text-sm">Pak Rangga</span>
                <img
                    src="/images/profile.png"
                    alt="Pak Rangga"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        </nav>
    );
};

export default Navbar;