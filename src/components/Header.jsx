import React from "react";

const Header = () => {
    return(
    <>
        <div className="flex items-center justify-between px-4 py-3 md:px-10 xl:px-14 border-b-2 bg-[#E8B1B1] ">
            <h1 className="text-[#FFFF] font-semibold md:text-xl xl:text-2xl">NARA<span className="text-[#FFFF]">MAKEAP</span></h1>
            <nav className="hidden md:block justify-between">
                <ul className="flex space-x-14 lg:space-x-16 xl:space-x-24 text-[#FFFF] font-medium text-base lg:text-lg xl:text-2xl">
                    <li className="hover:text-[#FFFF] cursor-pointer">Beranda</li>
                    <li className="hover:text-[#FFFF] cursor-pointer">Cari MUA</li>
                    <li className="hover:text-[#FFFF] cursor-pointer">Deskripsi</li>
                    <li className="hover:text-[#FFFF] cursor-pointer">Rekomendasi</li>
                </ul>
            </nav>
        </div>
    </> 
    );
};

export default Header;