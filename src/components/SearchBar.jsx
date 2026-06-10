import { IoSearchOutline } from "react-icons/io5";

function SearchBar({ value, onChange, isDarkMode }) {
  return (
    <div className={`flex items-center gap-3 border rounded-[10px] px-4 py-3 w-full md:w-[300px] h-[45px] ${
      isDarkMode
        ? "border-[#2D3748] bg-[#1A202C] text-gray-300"
        : "border-[#F3F3F3] bg-white text-black"
    }`}>

      <IoSearchOutline size={22} />

      <input
        type="text"
        value={value}
        onChange={function (event) {
          onChange(event.target.value);
        }}
        placeholder="Поиск..."
        className={`outline-none w-full bg-transparent text-[14px] font-normal placeholder:text-[#C4C4C4] ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      />

    </div>
  )
}

export default SearchBar
