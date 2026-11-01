
import React, { useState } from "react";
import { useWishlist } from "../WishlistContext";
import products from "../data/products";

function WishlistIcon() {
  const { savedProducts, toggleSaved } = useWishlist();
  const [open, setOpen] = useState(false);

  const wishlistItems = products.filter((product) =>
    savedProducts.includes(product.id)
  );

  const styles = {
    wrapper: {
      position: "relative",
    },
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
      boxSizing: "border-box",
      padding: "18px",
      background: "#FFFFFF",
      color: "#263D32",
      border: "1px solid #E5E9E3",
      borderRadius: "12px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
      zIndex: 1001,
    },
    item: {
      display: "flex",
      gap: "12px",
      padding: "13px 0",
      borderBottom: "1px solid #E5E9E3",
    },
    image: {
      width: "65px",
      height: "65px",
      objectFit: "cover",
      borderRadius: "7px",
      background: "#F7F4EC",
      flexShrink: 0,
    },
    removeButton: {
      border: "none",
      background: "transparent",
      color: "#A14D42",
      cursor: "pointer",
      padding: "5px 0",
      fontSize: "12px",
    },
    viewButton: {
      display: "inline-block",
      marginTop: "5px",
      color: "#A77D48",
      fontSize: "12px",
      fontWeight: "700",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.wrapper}>
      <button
        type="button"
        style={styles.button}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={`Wishlist with ${savedProducts.length} saved products`}
      >
        <span style={{ fontSize: "21px" }}>♡</span>
        <span>Wishlist</span>
        <span style={styles.count}>{savedProducts.length}</span>
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
            <h3 style={{ margin: 0, fontSize: "18px" }}>
              My Wishlist
            </h3>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close wishlist"
              style={{
                border: "none",
                background: "transparent",
                color: "#263D32",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✕
            </button>
          </div>

          {wishlistItems.length === 0 ? (
            <p style={{ color: "#777C74", fontSize: "14px" }}>
              Your wishlist is empty. Tap a product's heart to save it.
            </p>
          ) : (
            wishlistItems.map((product) => (
              <div key={product.id} style={styles.item}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.image}
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                />

                <div style={{ minWidth: 0, flex: 1 }}>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      margin: "0 0 5px",
                    }}
                  >
                    {product.name}
                  </p>

                  <p style={{ fontSize: "13px", margin: "0 0 4px" }}>
                    ₹{Number(product.price).toLocaleString("en-IN")}
                  </p>

                  {product.affiliateUrl && (
                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={styles.viewButton}
                    >
                      View Product ↗
                    </a>
                  )}

                  <div>
                    <button
                      type="button"
                      style={styles.removeButton}
                      onClick={() => toggleSaved(product.id)}
                    >
                      Remove from wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default WishlistIcon;
