import { FiArrowLeft, FiArrowRight, FiPackage, FiX } from "react-icons/fi";

function CartDrawer(props) {
  const cartItems = props.cartItems;

  const onClose = props.onClose;

  const onRemove = props.onRemove;

  const totalPrice = props.totalPrice;

  const setCartItems = props.setCartItems;

  const isDarkMode = props.isDarkMode;


  const tax = Math.round(totalPrice * 0.05);

  function handleCheckout() {
    const phoneNumber = '996220220110';
    let message = 'Здравствуйте! Новый заказ: \n\n';

    cartItems.forEach(function (item, index){
      message += `${index + 1}. ${item.title} - ${item.price} сом\n`;
    });

    message += `\nНалог 5%: ${tax} сом\nИтого: ${totalPrice + tax} сом`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    setCartItems([]);
    onClose();
  }

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
          <h2 className={`text-[24px] font-bold ${isDarkMode ? "text-white" : "text-black"}`}>Корзина</h2>

          <button
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

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <FiPackage size={150} className="mb-5 text-[#9DD558]"/>

            <h3 className={`text-[22px] font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>
              Корзина пустая
            </h3>

            <p className="mb-8 mt-3 text-[16px] text-[#9D9D9D]">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>

            <button
              onClick={onClose}
              className="flex h-[55px] w-full items-center justify-center gap-8 rounded-[18px] border-0 bg-[#9DD558] text-[16px] font-semibold text-white cursor-pointer"
            >
              <FiArrowLeft size={20} />
              Вернуться назад
            </button>
          </div>
        ) : (
          <>
            <div className="mt-8 flex flex-1 flex-col gap-5 overflow-y-auto">
              {cartItems.map(function(item) {
                return (
                <div
                  key={item.id}
                  className={`flex min-h-[120px] items-center gap-5 rounded-[20px] border px-5 py-4 ${
                    isDarkMode ? "border-[#2D3748] bg-[#1A202C]" : "border-[#F3F3F3]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[70px] w-[70px]"
                  />

                  <div className="flex-1">
                    <p className={`text-[14px] ${isDarkMode ? "text-white" : "text-black"}`}>
                      {item.title}
                    </p>

                    <p className="mt-2 text-[14px] font-bold">
                      {item.price} сом
                    </p>
                  </div>

                  <button
                    onClick={ function() {
                      onRemove(item.id);
                    }}
                    className={`items-center rounded-[8px] border cursor-pointer ${
                      isDarkMode
                        ? "border-[#2D3748] text-[#A0AEC0]"
                        : "text-[#B5B5B5]"
                    }`}
                  >
                    <FiX size={18} />
                  </button>
                </div>
                );
              })}
            </div>

            <div className="pt-6">
              <div className="mb-5 flex items-end gap-2 text-[16px]">
                <span>Итого: </span>
                <span className={`mb-1 flex-1 w-full border border-b border-dashed ${
                  isDarkMode ? "border-[#3A4556]" : "border-[DFDFDF]"
                }`}></span>
                <span>{totalPrice} сом</span>
              </div>

              <div className="mb-6 flex items-end gap-2 text-[16px]">
                <span>Налог 5%: </span>                
                <span className={`mb-1 flex-1 w-full border border-b border-dashed ${
                  isDarkMode ? "border-[#3A4556]" : "border-[DFDFDF]"
                }`}></span>
                <span>{tax} сом</span>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="flex h-[55px] w-full items-center justify-center gap-8 rounded-[18px] border-0 bg-[#9DD558] text-[16px] font-semibold text-white cursor-pointer"
              >
                Оформить заказ
                <FiArrowRight size={22} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
