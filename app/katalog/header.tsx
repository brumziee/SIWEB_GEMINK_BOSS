import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 text-white bg-indigo-800">
      <h2 className="text-2xl">GEMINK BOSS</h2>

      <nav className="flex gap-8 max-md:hidden">
        <a href="#" className="text-base cursor-pointer">
          Home
        </a>
        <a href="#" className="text-base cursor-pointer">
          Our Team
        </a>
        <a href="#" className="text-base cursor-pointer">
          About Us
        </a>
        <a href="#" className="text-base cursor-pointer">
          Testimoni
        </a>
        <a href="#" className="text-base cursor-pointer">
          Katalog
        </a>
      </nav>

      <div className="flex items-center">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;46:175&quot; width=&quot;182&quot; height=&quot;74&quot; viewBox=&quot;0 0 182 74&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; class=&quot;profile-icon&quot; style=&quot;width: 182px; height: 74px&quot;> <text fill=&quot;white&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;Poppins&quot; font-size=&quot;16&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;17.6016&quot; y=&quot;45.168&quot;>Pak Rangga</tspan></text> <path d=&quot;M182 33.5C182 49.7924 168.569 63 152 63C135.431 63 122 49.7924 122 33.5C122 17.2076 135.431 4 152 4C168.569 4 182 17.2076 182 33.5Z&quot; fill=&quot;url(#pattern0_46_175)&quot;></path> <line x1=&quot;0.5&quot; x2=&quot;0.5&quot; y2=&quot;74&quot; stroke=&quot;white&quot;></line> <defs> <pattern id=&quot;pattern0_46_175&quot; patternContentUnits=&quot;objectBoundingBox&quot; width=&quot;1&quot; height=&quot;1&quot;> <use xlink:href=&quot;#image0_46_175&quot; transform=&quot;matrix(0.00338983 0 0 0.00344729 0 -0.0670784)&quot;></use> </pattern>  </defs> </svg>",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
