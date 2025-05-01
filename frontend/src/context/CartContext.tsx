// 'use client';

// import React, { createContext, useContext, useState, useEffect } from 'react';

// export interface CartItem {
//   id: string;
//   name: string;
//   price: number | string;
//   size: string;
//   quantity: number;
//   slug: string;
// }

// interface CartContextProps {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeCartItem: (id: string) => void;
//   updateCartItem: (id: string, quantity: number) => void;
// }

// const CartContext = createContext<CartContextProps | undefined>(undefined);

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [isInitialized, setIsInitialized] = useState(false); // Флаг для проверки загрузки

//   // Загружаем данные корзины из localStorage при первом рендере
//   useEffect(() => {
//     try {
//       const storedCart = localStorage.getItem('cartItems');
//       if (storedCart) {
//         const parsedCart = JSON.parse(storedCart);
//         console.log('Loaded cart items from localStorage:', parsedCart);
//         setCartItems(parsedCart); // Устанавливаем состояние из localStorage
//       } else {
//         console.log('No cart items found in localStorage.');
//       }
//     } catch (error) {
//       console.error('Ошибка при восстановлении данных корзины:', error);
//     } finally {
//       setIsInitialized(true); // Подтверждаем инициализацию
//     }
//   }, []);

//   // Сохраняем данные корзины в localStorage при каждом изменении
//   useEffect(() => {
//     if (isInitialized) {
//       console.log('Saving cart items to localStorage:', cartItems);
//       localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     }
//   }, [cartItems, isInitialized]);

//   const addToCart = (item: CartItem) => {
//     setCartItems((prevCartItems) => {
//       const existingItem = prevCartItems.find(
//         (cartItem) => cartItem.id === item.id && cartItem.size === item.size
//       );
//       if (existingItem) {
//         console.log('Updating quantity for existing item:', existingItem);
//         return prevCartItems.map((cartItem) =>
//           cartItem.id === item.id && cartItem.size === item.size
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       }
//       console.log('Adding new item to cart:', item);
//       return [...prevCartItems, item];
//     });
//   };

//   const removeCartItem = (id: number) => {
//     console.log('Removing item from cart with id:', id);
//     setCartItems((prevCartItems) =>
//       prevCartItems.filter((item) => item.id !== id)
//     );
//   };

//   const updateCartItem = (id: number, quantity: number) => {
//     console.log('Updating quantity for item with id:', id, 'to:', quantity);
//     setCartItems((prevCartItems) =>
//       prevCartItems.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeCartItem, updateCartItem }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string; // было number, теперь string
  name: string;
  price: number | string;
  size: string;
  quantity: number;
  slug: string;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeCartItem: (id: string) => void; // id теперь string
  updateCartItem: (id: string, quantity: number) => void; // id теперь string
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cartItems');
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
      }
    } catch (error) {
      console.error('Ошибка при восстановлении корзины:', error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size
      );
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === item.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prev, item];
    });
  };

  const removeCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCartItem = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeCartItem, updateCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
