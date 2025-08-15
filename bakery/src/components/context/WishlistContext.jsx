

// import { createContext, useContext, useState } from "react";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);

//   // Add to wishlist with categoryId
//   const addToWishlist = (product, categoryId) => {
//     const productWithCategory = { ...product, categoryId };
//     setWishlist((prev) =>
//       prev.some((item) => item.id === product.id) ? prev : [...prev, productWithCategory]
//     );
//   };

//  const removeFromWishlist = (id) => {
//   if (id === 'all') return setWishlist([]);
//   setWishlist((prev) => prev.filter((item) => item.id !== id));
// };


//   // Toggle wishlist: add/remove
//   const toggleWishlist = (product, categoryId) => {
//     const productWithCategory = { ...product, categoryId };
//     setWishlist((prev) => {
//       if (prev.some((item) => item.id === product.id)) {
//         return prev.filter((item) => item.id !== product.id);
//       } else {
//         return [...prev, productWithCategory];
//       }
//     });
//   };

//   const isInWishlist = (productId) => {
//     return wishlist.some((item) => item.id === productId);
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlist,
//         addToWishlist,
//         removeFromWishlist,
//         toggleWishlist,
//         isInWishlist,
//         setWishlist, // needed for Remove All button
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);



import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const clearWishlist = () => setWishlist([]);


 // WishlistContext.js
const addToWishlist = (product, categoryId) => {
  setWishlist((prev) =>
    prev.some((item) => item.id === product.id)
      ? prev
      : [...prev, { ...product, categoryId }]
  );
};

function toggleWishlist(product) {
  setWishlist(prev => {
    if(prev.find(p => p.id === product.id)) {
      return prev.filter(p => p.id !== product.id);
    }
    return [...prev, product]; 
  });
}



  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const removeAllFromWishlist = () => {
    setWishlist([]);
  };

  

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        removeAllFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
