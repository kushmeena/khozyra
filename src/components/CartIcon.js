
import React, { useState } from "react";
import { useCart } from "../CartContext";

function CartIcon() {
  const { cartItems, cartCount, removeFromCart, updateQuantity } = useCart();
  const [open, setOpen] = useState(false);

  const styles = {
    button: {
      display: "flex",
      alignItems: "center",
      gap: "7px",
      padding: "8px 10px",
      border: "1px solid #BD925C",
      borderRadius: "9px",
      background: "transparent",
      color: "#FFFFFF",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
    },
    count: {
      minWidth: "20px",
      height: "20px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: "#BD925C",
      color: "#263D32",
      fontSize: "11px",
    },
    panel: {
      position: "absolute",
      top: "calc(100% + 12px)",
      right: "0",
      width: "min(340px, calc(100vw - 32px))",
      maxHeight: "70vh",
      overflowY: "auto",
      background: "#FFFFFF",
      color: "#263D32",
      border: "1px solid #E5E9E3",
      borderRadius: "12px",
      padding: "18px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
      boxSizing: "border-box",
      zIndex: 1001,
    },
    item: {
      padding: "13px 0",
      borderBottom: "1px solid #E5E9E3",
    },
    itemTitle: {
      fontSize: "14px",
      fontWeight: "700",
      margin: "0 0 6px",
    },
    smallButton: {
      padding: "5px 9px",
      background: "#F7F4EC",
      border: "1px solid #E5E9E3",
      borderRadius: "5px",
      cursor: "pointer",
      color: "#263D32",
    },
    removeButton: {
      border: "none",
      background: "transparent",
      color: "#A14D42",
      cursor: "pointer",
      padding: "5px",
    },
  };

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        style={styles.button}
        aria-label={`Shopping cart with ${cartCount} items`}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 3h2l2.4 11.4a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 8H6" />
          <circle cx="10" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
        Cart <span style={styles.count}>{cartCount}</span>
      </button>

      {open && (
        <div style={styles.panel}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "18px" }}>Your Cart</h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={styles.removeButton}
              aria-label="Close cart"
            >
              ✕
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p style={{ color: "#777C74", fontSize: "14px" }}>
              Your cart is empty. Add a product to get started.
            </p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} style={styles.item}>
                  <p style={styles.itemTitle}>{item.name}</p>
                  <p style={{ margin: "0 0 10px", fontSize: "13px" }}>
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <button
                      type="button"
                      style={styles.smallButton}
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      style={styles.smallButton}
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>

                    <button
                      type="button"
                      style={styles.removeButton}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <p style={{ fontWeight: "700", marginBottom: 0 }}>
                Sample total: ₹{total.toLocaleString("en-IN")}
              </p>

              <p style={{ fontSize: "12px", color: "#777C74" }}>
                This is a planning cart, not a checkout. Final retailer
                prices and availability may differ.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CartIcon;
