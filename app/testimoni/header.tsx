import * as React from "react";

export const Header = () => {
  return (
    <header className="box-border flex justify-between items-center px-14 py-0 m-0 bg-indigo-800 h-[107px] max-md:px-5 max-md:py-0 max-sm:h-20">
      <h1 className="box-border p-0 m-0 text-2xl text-orange-100 max-sm:text-xl">
        GEMINK BOSS
      </h1>
      <nav className="box-border flex gap-8 items-center p-0 m-0">
        <div className="box-border flex gap-7 p-0 m-0 max-md:hidden">
          <a
            href="#"
            className="box-border p-0 m-0 text-base text-white cursor-pointer"
          >
            Home
          </a>
          <a
            href="#"
            className="box-border p-0 m-0 text-base text-white cursor-pointer"
          >
            Our Team
          </a>
          <a
            href="#"
            className="box-border p-0 m-0 text-base text-white cursor-pointer"
          >
            About Us
          </a>
          <a
            href="#"
            className="box-border p-0 m-0 text-base text-white cursor-pointer"
          >
            Testimoni
          </a>
          <a
            href="#"
            className="box-border p-0 m-0 text-base text-white cursor-pointer"
          >
            Katalog
          </a>
        </div>
        <button className="box-border px-8 py-5 m-0 text-base text-blue-600 bg-white cursor-pointer rounded-[100px] max-md:px-5 max-md:py-4">
          Login
        </button>
      </nav>
    </header>
  );
};
