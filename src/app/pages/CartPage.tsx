import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { ChevronLeft, Minus, Plus, Trash2 } from "lucide-react";
import lashesImg from "../../imports/image.png";
import { useCart } from "../context/CartContext";

function priceToNumber(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
}

export function CartPage() {
  const navigate = useNavigate();
  const { items, subtotal, incrementItem, decrementItem, removeFromCart, setItemQuantity } = useCart();
  const [pendingRemove, setPendingRemove] = useState<{ id: string; name: string } | null>(null);

  const deliveryFee = items.length > 0 ? 5 : 0;
  const total = subtotal + deliveryFee;

  return (
    <section className="w-full bg-[#fff4f8] min-h-screen py-10">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white border-2 border-black rounded-full px-8 py-2 font-['Poltawski_Nowy',serif] text-sm tracking-wide text-black hover:bg-black hover:text-white transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        <h1 className="font-['Poltawski_Nowy',serif] text-5xl text-black mb-10">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Cart items table */}
          <div className="lg:col-span-2 border-2 border-[#a0a0a0] rounded-3xl p-6">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <p className="font-['Poltawski_Nowy',serif] text-lg text-black mb-6">
                  Your cart is empty.
                </p>
                <Link
                  to="/products/all"
                  className="inline-block bg-white border-2 border-black rounded-full px-10 py-3 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest text-black hover:bg-black hover:text-white transition-colors"
                >
                  BROWSE PRODUCTS
                </Link>
              </div>
            ) : (
              <>
                {/* Header row */}
                <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_0.5fr] gap-4 pb-4 border-b border-[#b8b8b8] font-['Poltawski_Nowy',serif] text-lg text-black">
                  <span>Product</span>
                  <span>Quantity:</span>
                  <span>Total</span>
                  <span>Action</span>
                </div>

                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="grid grid-cols-[2fr_1fr_1fr_0.5fr] gap-4 items-center py-5 border-b border-[#b8b8b8] last:border-b-0"
                  >
                    {/* Product */}
                    <div className="flex items-center gap-4">
                      <Link
                        to={`/product/${item.product.id}`}
                        className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden border-2 border-black"
                      >
                        <img src={lashesImg} alt={item.product.name} className="w-full h-full object-cover" />
                      </Link>
                      <div>
                        <Link
                          to={`/product/${item.product.id}`}
                          className="font-['MonteCarlo',cursive] text-2xl text-black hover:opacity-70 transition-opacity"
                        >
                          {item.product.name}
                        </Link>
                        <p className="font-['Poltawski_Nowy',serif] text-xs text-[#5e5e5e]">{item.product.code}</p>
                      </div>
                    </div>

                    {/* Quantity with input */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrementItem(item.product.id)}
                        className="w-8 h-8 flex items-center justify-center bg-white border-2 border-black rounded-full hover:bg-[#fec1e0] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) => setItemQuantity(item.product.id, parseInt(e.target.value, 10))}
                        className="w-14 h-9 text-center bg-white border-2 border-black rounded-full font-['Poltawski_Nowy',serif] text-base text-black focus:outline-none focus:ring-2 focus:ring-[#fec1e0] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button
                        onClick={() => incrementItem(item.product.id)}
                        className="w-8 h-8 flex items-center justify-center bg-white border-2 border-black rounded-full hover:bg-[#fec1e0] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Total */}
                    <span className="font-['Poltawski_Nowy',serif] text-base text-black">
                      {(priceToNumber(item.product.price) * item.quantity).toFixed(2)}$
                    </span>

                    {/* Action */}
                    <button
                      onClick={() => setPendingRemove({ id: item.product.id, name: item.product.name })}
                      className="text-black hover:text-red-600 transition-colors justify-self-start"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Order summary */}
          <div className="border-2 border-[#a0a0a0] rounded-3xl p-6">
            <h2 className="font-['Poltawski_Nowy',serif] text-2xl text-black mb-6">Order Summary</h2>
            <div className="space-y-3 font-['Poltawski_Nowy',serif] text-base text-black">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>{subtotal.toFixed(2)}EUR</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>{deliveryFee.toFixed(2)}EUR</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping method</span>
                <span className="text-[#5e5e5e]">Standard</span>
              </div>
            </div>
            <div className="border-t border-[#b8b8b8] my-5" />
            <div className="flex justify-between font-['Poltawski_Nowy',serif] font-bold text-lg text-black mb-6">
              <span>Total</span>
              <span>{total.toFixed(2)}EUR</span>
            </div>
            <button
              disabled={items.length === 0}
              className="w-full bg-white border-2 border-black rounded-full py-4 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest text-black hover:bg-black hover:text-white transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black"
            >
              CHECKOUT NOW
            </button>
          </div>
        </div>

        {/* More products button */}
        <div className="mt-10">
          <Link
            to="/products/all"
            className="inline-block bg-white border-2 border-black rounded-full px-12 py-3 font-['Poltawski_Nowy',serif] text-base text-black hover:bg-black hover:text-white transition-colors"
          >
            More Products
          </Link>
        </div>
      </div>

      {/* Remove confirmation dialog */}
      {pendingRemove && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4"
          onClick={() => setPendingRemove(null)}
        >
          <div
            className="bg-[#fff4f8] border-2 border-black rounded-3xl max-w-md w-full p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-['Poltawski_Nowy',serif] text-2xl text-black mb-3">Remove item?</h3>
            <p className="font-['Poltawski_Nowy',serif] text-base text-black mb-8">
              Do you really want to remove <span className="font-bold">{pendingRemove.name}</span> completely from your cart?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setPendingRemove(null)}
                className="bg-white border-2 border-black rounded-full px-8 py-2.5 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest text-black hover:bg-black hover:text-white transition-colors"
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  removeFromCart(pendingRemove.id);
                  setPendingRemove(null);
                }}
                className="bg-black text-white border-2 border-black rounded-full px-8 py-2.5 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest hover:bg-red-600 hover:border-red-600 transition-colors"
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
