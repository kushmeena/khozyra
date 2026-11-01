
import React, { useState } from "react";
import { useCart } from "../CartContext";

function ProductCard({ product, onSave, isSaved }) {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const price = Number(product.price) || 0;
  const oldPrice = Number(product.oldPrice) || 0;

  const discount =
    oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : 0;

  const styles = {
    card: {
      background: "#FFFFFF",
      border: "1px solid #E5E9E3",
      borderRadius: "14px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    imageBox: {
      position: "relative",
      width: "100%",
      height: "240px",
      background: "#F7F4EC",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: "10px",
      boxSizing: "border-box",
      display: "block",
    },
    fallback: {
      fontSize: "48px",
      color: "#263D32",
    },
    discount: {
      position: "absolute",
      top: "12px",
      left: "12px",
      padding: "6px 9px",
      borderRadius: "5px",
      background: "#263D32",
      color: "#FFFFFF",
      fontSize: "11px",
      fontWeight: "700",
    },
    heart: {
      position: "absolute",
      top: "10px",
      right: "10px",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "1px solid #E5E9E3",
      background: "#FFFFFF",
      color: isSaved ? "#B64B4B" : "#263D32",
      fontSize: "22px",
      cursor: "pointer",
    },
    details: {
      padding: "17px",
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    category: {
      color: "#A77D48",
      fontSize: "11px",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "8px",
    },
    name: {
      color: "#263D32",
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: 1.5,
      margin: "0 0 9px",
    },
    rating: {
      color: "#777C74",
      fontSize: "13px",
      marginBottom: "12px",
    },
    priceRow: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "16px",
    },
    price: {
      color: "#263D32",
      fontSize: "19px",
      fontWeight: "800",
    },
    oldPrice: {
      color: "#92968F",
      fontSize: "13px",
      textDecoration: "line-through",
    },
    addButton: {
      width: "100%",
      padding: "11px",
      marginTop: "auto",
      marginBottom: "9px",
      border: "1px solid #BD925C",
      borderRadius: "7px",
      background: "#FFFFFF",
      color: "#263D32",
      fontWeight: "700",
      cursor: "pointer",
    },
    viewButton: {
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      padding: "12px",
      border: "none",
      borderRadius: "7px",
      background: "#263D32",
      color: "#FFFFFF",
      fontSize: "13px",
      fontWeight: "700",
      textAlign: "center",
      textDecoration: "none",
      cursor: "pointer",
    },
  };

  return (
    <article
      style={styles.card}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = "translateY(-4px)";
        event.currentTarget.style.boxShadow =
          "0 12px 28px rgba(38, 61, 50, 0.10)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "translateY(0)";
        event.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Product image */}
      <div style={styles.imageBox}>
        {!imageError && product.image ? (
          <img
            key={product.image}
            src={product.image}
            alt={product.name}
            style={styles.image}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <span style={styles.fallback} role="img" aria-label="Image unavailable">
            🛍️
          </span>
        )}

        {discount > 0 && (
          <span style={styles.discount}>{discount}% OFF</span>
        )}

        <button
          type="button"
          style={styles.heart}
          onClick={() => onSave?.(product.id)}
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={Boolean(isSaved)}
        >
          {isSaved ? "♥" : "♡"}
        </button>
      </div>

      {/* Product details */}
      <div style={styles.details}>
        <span style={styles.category}>{product.category}</span>

        <h3 style={styles.name}>{product.name}</h3>

        <div style={styles.rating}>
          {product.rating != null ? (
            <>
              <span style={{ color: "#BD925C" }}>★</span>{" "}
              {product.rating} / 5
            </>
          ) : (
            "Not rated yet"
          )}
        </div>

        <div style={styles.priceRow}>
          <span style={styles.price}>
            ₹{price.toLocaleString("en-IN")}
          </span>

          {oldPrice > price && (
            <span style={styles.oldPrice}>
              ₹{oldPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <button
          type="button"
          style={styles.addButton}
          onClick={() => addToCart(product)}
        >
          + Add to Cart
        </button>

        {product.affiliateUrl ? (
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={styles.viewButton}
          >
            View Product ↗
          </a>
        ) : (
          <button
            type="button"
            style={styles.viewButton}
            onClick={() =>
              alert("Add your actual affiliate URL in products.js first.")
            }
          >
            View Product ↗
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
