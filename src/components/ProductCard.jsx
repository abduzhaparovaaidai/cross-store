import { FaHeart, FaRegHeart } from 'react-icons/fa';

function ProductCard({ title, price, image, isAdded, isFavorite, onAdd, onFavorite, isDarkMode }) {
  return (
    <div className={`relative w-full flex flex-col justify-between border rounded-[32px] p-[26px] transition-all duration-300 hover:-translate-y-1 ${
      isDarkMode
        ? "bg-white border-[#E5E7EB] text-[#1F2937] hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
        : "border-[#F3F3F3] bg-white text-black hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
      }`}>

        <button
          type='button'
          onClick={onFavorite}
          className={`absolute left-[30px] top-[30px] w-[32px] h-[32px] border rounded-[8px] flex items-center justify-center cursor-pointer ${
            isFavorite
              ? 'bg-[#FEF0F0] border-[#FEF0F0] text-[#FF8585]'
              : isDarkMode
                ? 'bg-[#111827] border-[#2D3748] text-[#718096]'
                : 'bg-white border-[#F2F2F2] text-[#D3D3D3]'
          }`}
        >
          {isFavorite ? <FaHeart size={14} /> : <FaRegHeart size={14} />}
        </button>

          <div
            className={`w-full h-[150px] rounded-[24px] flex items-center justify-center mb-4 ${
              isDarkMode ? "bg-white" : "bg-white"
            }`}>

            <img
              src={image}
              alt={title}
              className='w-[133px] h-[112px] mx-auto object-contain flex-shrink-0'
            />

          </div>
        

        <h3 className={`text-[14px] font-normal mt-[14px] leading-[100%] line-clamp-2 ${
          isDarkMode ? "text-[#4B5563]" : "text-black"
        }`}>
            {title}
        </h3>

        <div className='flex items-center justify-between mt-auto'>
        <div>
            <p className={`text-[11px] uppercase ${
              isDarkMode ? "text-[#9CA3AF]" : "text-[#BDBDBD]"
            }`}>
                Цена:
            </p>

            <span className={`font-bold text-[14px] ${
              isDarkMode ? "text-[#374151]" : "text-black"
            }`}>
                {price} сом
            </span>
        </div>

        <button
          type='button'
          onClick={onAdd}
          className={`w-[32px] h-[32px] border rounded-[8px] flex items-center justify-center cursor-pointer ${
            isAdded
              ? 'bg-[#9DD558] border-[#9DD558] text-white'
              : isDarkMode
                ? 'bg-[#0F172A] border-white/10 text-slate-400 hover:bg-[#1A2333]'
                : 'bg-white border-[#F2F2F2] text-[#D3D3D3]'
          }`}
        >
            {isAdded ? '✓' : '+'}
        </button>
        </div>
    </div>
  )
}

export default ProductCard
