
import React from "react";
import { useCart } from "../CartContext";

function ProductDetails({ product, onBack }) {
  const { addToCart } = useCart();

  if (!product) return null;

  const price = Number(product.price) || 0;
  const oldPrice = Number(product.oldPrice) || 0;
  const discount =
    oldPrice > price && oldPrice > 0
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : 0;

  const styles = {
    page: {
      background: "#F7F4EC",
      minHeight: "65vh",
      padding: "40px 6%",
      color: "#263D32",
    },
    back: {
      background: "transparent",
      border: "1px solid #BD925C",
      color: "#263D32",
      padding: "10px 16px",
      borderRadius: "8px",
      cursor: "pointer",
      marginBottom: "28px",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
      gap: "40px",
      alignItems: "start",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    imageBox: {
      background: "#FFFFFF",
      borderRadius: "18px",
      padding: "24px",
      minHeight: "320px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #E5E9E3",
    },
    image: {
      width: "100%",
      maxHeight: "420px",
      objectFit: "contain",
    },
    info: { padding: "10px 0" },
    category: {
      color: "#A77D48",
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontSize: "12px",
      fontWeight: "700",
    },
    name: {
      fontSize: "clamp(28px, 4vw, 42px)",
      lineHeight: 1.2,
      margin: "12px 0",
    },
    description: {
      color: "#777C74",
      lineHeight: 1.8,
      margin: "20px 0",
    },
    price: { fontSize: "28px", fontWeight: "700" },
    oldPrice: {
      color: "#777C74",
      textDecoration: "line-through",
      marginLeft: "12px",
    },
    button: {
      display: "inline-block",
      background: "#263D32",
      color: "#FFFFFF",
      padding: "14px 22px",
      border: "none",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "600",
      cursor: "pointer",
      margin: "10px 10px 0 0",
    },
    secondary: {
      background: "#FFFFFF",
      color: "#263D32",
      border: "1px solid #BD925C",
    },
    note: {
      fontSize: "12px",
      color: "#777C74",
      lineHeight: 1.6,
      marginTop: "18px",
    },
  };

  return (
    <section style={styles.page}>
      <button style={styles.back} onClick={onBack}>
        ← Back to products
      </button>

      <div style={styles.layout}>
        <div style={styles.imageBox}>
          <img
            src={product.image}
            alt={product.name}
            style={styles.image}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div style={styles.info}>
          <div style={styles.category}>{product.category}</div>

          <h1 style={styles.name}>{product.name}</h1>

          {product.brand &&
            product.brand !== "Add brand name" && (
              <p>Brand: {product.brand}</p>
            )}

          {product.rating != null && (
            <p>★ {product.rating} / 5</p>
          )}

          <p style={styles.description}>
            {product.description || "Product details coming soon."}
          </p>

          <div>
            <span style={styles.price}>
              ₹{price.toLocaleString("en-IN")}
            </span>

            {oldPrice > price && (
              <span style={styles.oldPrice}>
                ₹{oldPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {discount > 0 && (
            <p style={{ color: "#A77D48", fontWeight: "600" }}>
              {discount}% off
            </p>
          )}

          <div>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

            {product.affiliateUrl ? (
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={styles.button}
              >
                Visit Store ↗
              </a>
            ) : (
              <button
                style={{ ...styles.button, ...styles.secondary }}
                onClick={() =>
                  alert("Add your actual affiliate URL in products.js first.")
                }
              >
                Visit Store
              </button>
            )}
          </div>

          <p style={styles.note}>
            Prices and availability may change on the retailer's website.
            Khozyra directs you to the retailer to complete your purchase.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
