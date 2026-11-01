
import React from "react";
import affiliateProducts from "../data/affiliateProducts";
import affiliateLinks from "../data/affiliateLinks";

export default function TodaysBestDeals() {
  const products = affiliateProducts.deals;

  const styles = {
    section: {
      padding: "45px 20px",
      background: "#fff",
      color: "#263D32"
    },
    container: {
      maxWidth: "1150px",
      margin: "auto"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "22px"
    },
    card: {
      border: "1px solid #eee",
      borderRadius: "13px",
      overflow: "hidden",
      background: "#fff"
    },
    image: {
      width: "100%",
      height: "190px",
      objectFit: "cover",
      background: "#F7F4EC"
    },
    body: {
      padding: "16px"
    },
    button: {
      display: "block",
      textAlign: "center",
      background: "#263D32",
      color: "white",
      padding: "11px",
      borderRadius: "6px",
      textDecoration: "none",
      marginTop: "13px"
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <p style={{ color: "#BD925C", fontWeight: "bold" }}>
          HANDPICKED SAVINGS
        </p>

        <h2>Today's Best Deals</h2>

        <p style={{ color: "#777", marginBottom: "25px" }}>
          Interesting products at prices worth checking.
        </p>

        <div style={styles.grid}>
          {products.map((product) => {
            const discount = Math.round(
              ((product.originalPrice - product.price) /
                product.originalPrice) * 100
            );

            // Correct location: inside map()
            const storeLink =
              product.affiliateUrl ||
              affiliateLinks[product.platform];

            return (
              <div key={product.id} style={styles.card}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.image}
                  loading="lazy"
                />

                <div style={styles.body}>
                  <span style={{ color: "#BD925C", fontSize: "12px" }}>
                    {product.badge}
                  </span>

                  <h3>{product.name}</h3>

                  <p style={{ color: "#888" }}>
                    {product.category} • {product.platform}
                  </p>

                  <h3>
                    ₹{product.price.toLocaleString("en-IN")}
                    <span style={{
                      fontSize: "13px",
                      color: "#999",
                      textDecoration: "line-through",
                      marginLeft: "8px"
                    }}>
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </h3>

                  <p style={{ color: "#28734C" }}>
                    Save {discount}%
                  </p>

                  {storeLink && (
                    <a
                      href={storeLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={styles.button}
                    >
                      Shop on {product.platform} →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
