import { useState } from "react";

import Header from "../components/Header"

import CartDrawer from "../components/CartDrawer";

import Favourites from "../components/Favourites";

import ProductCard from "../components/ProductCard";

import SearchBar from "../components/SearchBar";

import products from "../data/products";

function Home() {
  const [cartItems, setCartItems] = useState([]);

  const [favoriteItems, setFavoriteItems] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isFavOpen, setIsFavOpen] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const [isDarkMode, setIsDarkMode] = useState(false);

  let totalPrice = 0;

  for (let item of cartItems) {
    totalPrice += item.price;
  }

  const filteredProducts = products.filter(function (item) {
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  function openCart() {
    setIsCartOpen(true);
  }

  function openFav() {
    setIsFavOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  function closeFav() {
    setIsFavOpen(false);
  }

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddToCart(product) {
    let isProductAdded = false;

    for (let item of cartItems) {
      if (item.id === product.id) {
        isProductAdded = true;
      }
    }

    if (isProductAdded) {
      setCartItems(cartItems.filter(function (item) {
        return item.id !== product.id;
      }));
      return;
    }

    setCartItems([...cartItems, product]);
  }

  function handleRemoveFromCart(productId) {
    setCartItems(cartItems.filter(function (item) {
      return item.id !== productId;
    }));
  }

  function handleToggleFavorite(product) {
    let isFavorite = false;

    for (let item of favoriteItems) {
      if (item.id === product.id) {
        isFavorite = true;
      }
    }

    if (isFavorite) {
      setFavoriteItems(favoriteItems.filter(function (item) {
        return item.id !== product.id;
      }));
      return;
    }

    setFavoriteItems([...favoriteItems, product]);
  }

  return (
    <div className={`min-h-screen p-10 transition-colors ${
      isDarkMode ? "bg-[#07111F]" : "bg-sky-100"
    }`}>

      <div className={`rounded-[20px] md:rounded-[30px] overflow-hidden mt-[120px] md:mt-[120px] transition-colors ${
        isDarkMode ? "bg-[#0B1423] border border-white/5" : "bg-white"
      }`}>
        <Header
          totalPrice={totalPrice}
          favoriteCount={favoriteItems.length}
          onCartClick={openCart}
          onFavClick={openFav}
          isDarkMode={isDarkMode}
          onThemeClick={toggleTheme}
        />

        <div className="px-4 md:px-8 py-6 md:py-10 flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
          <h2 className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
            Все кроссовки
          </h2>

          <SearchBar value={searchValue} onChange={setSearchValue} isDarkMode={isDarkMode} />
        </div>

        <div className="px-4 md:px-8 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredProducts.map(function (item) {
            return (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                isAdded={cartItems.some(function (cartItem) {
                  return cartItem.id === item.id;
                })}
                isFavorite={favoriteItems.some(function (favoriteItem) {
                  return favoriteItem.id === item.id;
                })}
                onAdd={function () {
                  handleAddToCart(item);
                }}
                onFavorite={function () {
                  handleToggleFavorite(item);
                }}
                isDarkMode={isDarkMode}
              />
            );
          })}
        </div>

      </div>

      {isCartOpen && (
        <CartDrawer
          cartItems={cartItems}
          onClose={closeCart}
          onRemove={handleRemoveFromCart}
          totalPrice={totalPrice}
          setCartItems={setCartItems}
          isDarkMode={isDarkMode}
        />
      )}
      {isFavOpen && (
        <Favourites
          favoriteItems={favoriteItems}
          onClose={closeFav}
          onFavorite={handleToggleFavorite}
          onAdd={handleAddToCart}
          cartItems={cartItems}
          isDarkMode={isDarkMode}
        />
      )}

    </div>
  )
}

export default Home
