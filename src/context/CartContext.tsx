import React, { createContext, useContext, useReducer } from 'react';

interface CartItem {
  name: string;
  price: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { name: string; price: string } }
  | { type: 'REMOVE_ITEM'; payload: { name: string } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      const price = parseFloat(action.payload.price.replace('$', ''));
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + price
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + price
      };
    }
    case 'REMOVE_ITEM': {
      const item = state.items.find(item => item.name === action.payload.name);
      if (!item) return state;
      
      const price = parseFloat(item.price.replace('$', ''));
      
      if (item.quantity === 1) {
        return {
          ...state,
          items: state.items.filter(item => item.name !== action.payload.name),
          total: state.total - price
        };
      }
      
      return {
        ...state,
        items: state.items.map(item =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        total: state.total - price
      };
    }
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
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