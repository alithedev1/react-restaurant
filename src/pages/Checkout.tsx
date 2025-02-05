import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (name: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { name } });
  };

  const handleAddItem = (name: string, price: string) => {
    dispatch({ type: 'ADD_ITEM', payload: { name, price } });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-8 text-primary">Your Cart</h1>
          <p className="text-gray-600 mb-8">Your cart is empty</p>
          <Link
            to="/menu"
            className="inline-block bg-primary text-white px-6 py-3 hover:bg-primary-dark transition-colors"
          >
            Return to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif font-bold mb-16 text-primary">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {state.items.map((item) => (
              <div
                key={item.name}
                className="bg-white p-6 border border-gray-100 shadow-sm flex items-center justify-between"
              >
                <div>
                  <h3 className="font-medium text-primary">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRemoveItem(item.name)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleAddItem(item.name, item.price)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      for (let i = 0; i < item.quantity; i++) {
                        handleRemoveItem(item.name);
                      }
                    }}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleClearCart}
            className="mt-4 text-red-500 hover:text-red-600 text-sm"
          >
            Clear Cart
          </button>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-serif font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              {state.items.map((item) => (
                <div key={item.name} className="flex justify-between text-gray-600">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dark transition-colors">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;