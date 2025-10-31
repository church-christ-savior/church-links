"use client";

import Image from "next/image";
import React from "react";
import Switch from "./components/Switch";
import { data } from "./data";
import Link from "next/link";
import { BASE } from "./data";

export default function Home() {
  const [theme, setTheme] = React.useState(true);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 flex items-center justify-center px-4 ${
        theme
          ? "bg-[linear-gradient(to_bottom,rgb(45,46,46),rgb(0,0,0))]"
          : "bg-white"
      }`}
    >
      <main className="w-full max-w-[900px] flex flex-col items-center justify-center gap-10 py-10">
        {/* Logo + Title + Theme Switch */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-5 text-center md:text-left">
          <div>
            <Image
              src={`${BASE}/logo.png`}
              alt="Церква Христа-Спасителя"
              width={180}
              height={180}
              className="md:w-[240px] md:h-[240px] w-[140px] h-[140px] object-contain"
            />
          </div>

          <div className="md:mb-8 flex flex-col justify-center items-center md:items-start gap-1">
            <h1
              className={`text-[20px] md:text-[28px] font-semibold mb-3 ${
                theme ? "text-white" : "text-black"
              }`}
            >
              Церква Христа-Спасителя
            </h1>

            <div className="flex gap-2 items-center flex-wrap justify-center md:justify-start">
              <p className={`pb-2 ${theme ? "text-white" : "text-black"}`}>
                Зміна вигляду:
              </p>
              <Switch onChangeTheme={() => setTheme(!theme)} />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 w-full max-w-[560px]">
          {data.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              className={`flex items-center justify-start rounded-[15px] overflow-hidden cursor-pointer transition-all hover:scale-[1.02] ${
                theme
                  ? "bg-white/5 text-white hover:bg-white/10"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              <div className="border-r border-white/5 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] flex justify-center items-center">
                <Image
                  src={theme ? item.iconBlack : item.iconWhite}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex justify-center items-center h-[50px] sm:h-[60px] px-2">
                <h2 className="text-sm sm:text-base md:text-lg">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
