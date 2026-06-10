import { useState } from "react";
import logo from "../assets/logo.svg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiMoon, FiSun, FiUser, FiMenu, FiX } from "react-icons/fi";

function Header({ totalPrice, favoriteCount, onCartClick, onFavClick, isDarkMode, onThemeClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] flex flex-row justify-between items-center p-4 md:p-8 border-b transition-colors ${
      isDarkMode
        ? "bg-[#171923] border-white/10 text-white"
        : "bg-white border-[#F3F3F3] text-black"
    }`}>

      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={logo}    
          alt="logo"
          className="w-10 md:w-12"
        />
        <div>
          <h1 className="text-xl md:text-2xl font-bold leading-none mb-1">
            KROSS STORE
          </h1>
          <p className={`text-xs md:text-sm ${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>
            Магазин лучших кроссовок
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        
        <div className={`hidden md:flex items-center gap-8 ${
          isDarkMode ? "text-gray-300" : "text-gray-500"
        }`}>
          <button
            type="button"
            onClick={onCartClick}
            className="flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0 text-inherit"
          >
            <IoCartOutline size={24} />
            <span>{totalPrice} сом</span>
          </button>

          <button
            type="button"
            onClick={onFavClick}
            className="flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0 text-inherit"
          >
            <FaRegHeart size={22} />
            <span>Закладки{favoriteCount > 0 ? ` (${favoriteCount})` : ""}</span>
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <FiUser size={22} />
            <span>Профиль</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onThemeClick}
          className={`flex items-center justify-center bg-transparent cursor-pointer border-0 p-0 transition-colors ${
            isDarkMode ? "text-yellow-300" : "text-gray-500"
          }`}
        >
          {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className={`block md:hidden p-1 bg-transparent border-0 cursor-pointer ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <FiMenu size={26} />
        </button>
        
      </div>
      

      {isMenuOpen && (
        <div className="fixed inset-0 z-[1100] flex justify-end bg-black/50">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsMenuOpen(false)}></div>
          
          <div className={`relative flex flex-col z-10 h-full w-[270px] p-6 shadow-2xl transition-colors ${
            isDarkMode ? "bg-[#111827] text-white" : "bg-white text-black"
          }`}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Меню</h2>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border cursor-pointer ${
                  isDarkMode ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"
                }`}
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-[16px] font-medium">
              <button
                type="button"
                onClick={() => { onCartClick(); setIsMenuOpen(false); }}
                className="flex items-center gap-3 bg-transparent border-0 p-0 text-left text-inherit cursor-pointer"
              >
                <IoCartOutline size={24} />
                <span>Корзина ({totalPrice} сом)</span>
              </button>

              <button
                type="button"
                onClick={() => { onFavClick(); setIsMenuOpen(false); }}
                className="flex items-center gap-3 bg-transparent border-0 p-0 text-left text-inherit cursor-pointer"
              >
                <FaRegHeart size={24} />
                <span>Закладки {favoriteCount > 0 ? `(${favoriteCount})` : ""}</span>
              </button>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800 cursor-pointer">
                <FiUser size={24} />
                <span>Профиль</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header;