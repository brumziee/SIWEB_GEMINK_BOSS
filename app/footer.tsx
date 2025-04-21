import {
    FaInstagram,
    FaFacebook,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-[#1B1891] text-white px-6 md:px-10 py-10 mt-auto shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
  
          {/* Company Info */}
          <div className="w-full md:w-[40%]">
            <h3 className="text-2xl font-bold mb-3">GEMINK BOSS</h3>
            <p className="text-sm leading-relaxed">
              Gear Up. Game On. Only at GEMINK BOSS.
            </p>
          </div>
  
          {/* Contact Info (2 sub-columns) */}
          <div className="w-full md:w-[60%] flex flex-col sm:flex-row justify-between gap-8">
            {/* Bagian 1 - Hubungi Kami */}
            <div className="space-y-4 flex justify-center items-center">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Hubungi Kami</h4>
                <div className="flex items-start gap-3 justify-center">
                  <FaMapMarkerAlt className="mt-1" />
                  <span>Jl. Pro Player No.77, Yogyakarta</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <FaPhoneAlt /> +62 817-1717-1717
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <FaEnvelope /> geminkboss17@gmail.com
                </div>
              </div>
            </div>
  
            {/* Bagian 2 - Sosial Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-2">Sosial Media</h4>
              <div className="flex items-center gap-3">
                <FaInstagram />
                <a
                  href="https://instagram.com/geminkboss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @geminkboss
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaFacebook />
                <a
                  href="https://facebook.com/geminkboss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GEMINK BOSS Official
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-white mt-10 pt-4 text-center text-sm">
          &copy; 2025 GEMINK BOSS. All rights reserved.
        </div>
      </footer>
    );
  }
  