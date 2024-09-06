"use client";

import Image from "next/image";
import { siteRoutes } from "@/config/site";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(""); // State to track active section

  const scrollToSection = ({ id }: { id: string }) => {
    const elements = document.getElementById(id);
    elements!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 flex w-full items-center justify-between bg-white p-4 px-4 backdrop-saturate-150">
      <div
        className="flex flex-1 cursor-pointer items-center"
        onClick={() => scrollToSection({ id: "main" })}
      >
        <Image
          className="rounded-full"
          src="/logo.png"
          alt="huscale logo"
          width={36}
          height={36}
        />
        <h1 className="ml-2 text-xl font-bold">휴스케일</h1>
      </div>

      <nav className="flex gap-4">
        {siteRoutes.map((item) => (
          <div
            key={item.route}
            className={`cursor-pointer font-bold transition-colors hover:text-primary`}
            onClick={() => scrollToSection({ id: item.route })}
          >
            {item.label}
          </div>
        ))}
      </nav>

      <div></div>
    </div>
  );
};

export default Navbar;
