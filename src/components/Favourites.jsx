import React from 'react'
import { FiX } from "react-icons/fi";
import { FaHeart } from 'react-icons/fa'; 

function Favourites(props) {
    const favoriteItems = props.favoriteItems || [];
    const onClose = props.onClose;
    const onFavorite = props.onFavorite;
    const isDarkMode = props.isDarkMode;
    
    return (
         <div className="fixed inset-0 z-[1100] flex justify-end bg-black/40">
              <div
                onClick={onClose}
                className="absolute inset-0 cursor-pointer"
              ></div>
        
              <div className={`relative flex flex-col z-10 h-full w-full md:w-[350px] p-6 transition-colors ${
                isDarkMode ? "bg-[#111827] text-white" : "bg-white text-black"
              }`}>
                <div className="flex items-center justify-between">
                  <h2 className={`text-[24px] font-bold ${isDarkMode ? "text-white" : "text-black"}`}>Избранное</h2>
        
                  <button
                    type="button"
                    onClick={onClose}
                    className={`flex h-9 w-9 items-center justify-center rounded-[8px] border cursor-pointer ${
                      isDarkMode
                        ? "border-[#2D3748] text-[#A0AEC0] hover:text-white"
                        : "border-[#DBDBDB] text-[#B5B5B5] hover:text-black"
                    }`}
                  >
                    <FiX size={20} />
                  </button>
                </div>
        
                {favoriteItems.length === 0 ? (
                  <div className="mt-8 flex flex-1 flex-col items-center justify-center text-center">
                    <span className="text-4xl mb-2">💔</span>
                    <p className={`text-[16px] font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      В закладках пока ничего нет
                    </p>
                  </div>
                ) : (
                  <div className="mt-8 flex flex-1 flex-col gap-5 overflow-y-auto pr-1">
                    {favoriteItems.map(function(item) {
                      return (
                        <div
                          key={item.id}
                          className={`flex min-h-[120px] items-center gap-5 rounded-[20px] border px-5 py-4 ${
                            isDarkMode ? "border-[#2D3748] bg-[#1A202C]" : "border-[#F3F3F3] bg-white"
                          }`}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-[70px] w-[70px] object-contain flex-shrink-0"
                          />
        
                          <div className="flex-1">
                            <p className={`text-[14px] line-clamp-2 ${isDarkMode ? "text-white" : "text-black"}`}>
                              {item.title}
                            </p>
        
                            <div className="flex items-center gap-2 mt-2">
                              <p className="text-[14px] font-bold">
                                {item.price} сом
                              </p>
                              <FaHeart size={12} className="text-[#FF8585]" title="В избранном" />
                            </div>
                          </div>
        
                          <button
                            type="button"
                            onClick={function() {
                              onFavorite(item); 
                            }}
                            className={`flex h-8 w-8 items-center justify-center rounded-[8px] border cursor-pointer transition-colors ${
                              isDarkMode
                                ? "border-[#2D3748] text-[#A0AEC0] hover:text-red-400 hover:border-red-400"
                                : "border-[#F2F2F2] text-[#B5B5B5] hover:text-red-500 hover:border-red-200"
                            }`}
                          >
                            <FiX size={18} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
         </div>
    );
}

export default Favourites;