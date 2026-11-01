
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext(null);

function getSavedWishlist() {
  try {
    const saved = localStorage.getItem("khozyra-wishlist");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }) {
  const [savedProducts, setSavedProducts] = useState(getSavedWishlist);

  useEffect(() => {
    localStorage.setItem(
      "khozyra-wishlist",
      JSON.stringify(savedProducts)
    );
  }, [savedProducts]);

  const toggleSaved = (productId) => {
    setSavedProducts((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId]
    );
  };

  const isSaved = (productId) => savedProducts.includes(productId);

  return (
    <WishlistContext.Provider
      value={{ savedProducts, toggleSaved, isSaved }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
}
