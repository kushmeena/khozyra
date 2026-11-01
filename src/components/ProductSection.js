
import React, { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useWishlist } from "../WishlistContext";

function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const { savedProducts, toggleSaved, isSaved } = useWishlist();

  const categories = [
    "All",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home & Living",
    "Lifestyle",
  ];

  useEffect(() => {
    const handleCategory = (event) => {
      setActiveCategory(event.detail);
    };

    const handleSearch = (event) => {
      setSearchTerm(event.detail);
    };

    window.addEventListener(
      "khozyra-category-selected",
      handleCategory
    );
    window.addEventListener("khozyra-search", handleSearch);

    return () => {
      window.removeEventListener(
        "khozyra-category-selected",
        handleCategory
      );
      window.removeEventListener("khozyra-search", handleSearch);
    };
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const query = searchTerm.trim().toLowerCase();

    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      (product.description || "").toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const styles = {
    section: {
      backgroundColor: "#F7F4EC",
      padding: "75px 5%",
      fontFamily: "Arial, sans-serif",
      scrollMarginTop: "30px",
    },

    container: {
      maxWidth: "1250px",
      margin: "0 auto",
    },

    eyebrow: {
      color: "#A77D48",
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "1.8px",
      margin: "0 0 12px",
    },

    heading: {
      color: "#263D32",
      fontSize: "clamp(28px, 4vw, 38px)",
      fontWeight: "800",
      letterSpacing: "-1px",
      margin: "0 0 12px",
    },

    description: {
      color: "#777C74",
      fontSize: "15px",
      lineHeight: "1.8",
      margin: "0 0 28px",
    },

    filterRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "30px",
    },

    filterButton: (active) => ({
      padding: "10px 17px",
      borderRadius: "25px",
      border: `1px solid ${active ? "#263D32" : "#DDE1D8"}`,
      backgroundColor: active ? "#263D32" : "#FFFFFF",
      color: active ? "#FFFFFF" : "#465248",
      fontSize: "13px",
      fontWeight: "600",
      cursor: "pointer",
    }),

    resultText: {
      fontSize: "13px",
      color: "#777C74",
      marginBottom: "18px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "22px",
    },

    empty: {
      padding: "45px 20px",
      textAlign: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
      border: "1px solid #E5E9E3",
      color: "#777C74",
    },

    emptyTitle: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#263D32",
      margin: "0 0 10px",
    },

    resetButton: {
      marginTop: "12px",
      padding: "11px 18px",
      border: "none",
      borderRadius: "7px",
      backgroundColor: "#263D32",
      color: "#FFFFFF",
      cursor: "pointer",
      fontWeight: "600",
    },

    wishlistInfo: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      padding: "9px 13px",
      marginBottom: "22px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E5E9E3",
      borderRadius: "8px",
      color: "#263D32",
      fontSize: "13px",
    },
  };

  return (
    <section id="products" style={styles.section}>
      <div style={styles.container}>
        <p style={styles.eyebrow}>OUR PRODUCT COLLECTION</p>

        <h2 style={styles.heading}>Discover Your Next Find</h2>

        <p style={styles.description}>
          Explore our collection and find products that fit your
          everyday needs and personal style.
        </p>

        <div style={styles.wishlistInfo}>
          <span style={{ color: "#B64B4B", fontSize: "18px" }}>
            ♥
          </span>
          <span>
            Saved to wishlist: <strong>{savedProducts.length}</strong>
          </span>
        </div>

        <div style={styles.filterRow}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              style={styles.filterButton(
                activeCategory === category
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {searchTerm && (
          <p style={styles.resultText}>
            Search results for: <strong>{searchTerm}</strong>
            {" · "}
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                window.dispatchEvent(
                  new CustomEvent("khozyra-search", {
                    detail: "",
                  })
                );
              }}
              style={{
                border: "none",
                background: "transparent",
                color: "#A77D48",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Clear search
            </button>
          </p>
        )}

        <p style={styles.resultText}>
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        {filteredProducts.length > 0 ? (
          <div style={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSave={toggleSaved}
                isSaved={isSaved(product.id)}
              />
            ))}
          </div>
        ) : (
          <div style={styles.empty}>
            <div style={{ fontSize: "38px", marginBottom: "12px" }}>
              🔎
            </div>

            <h3 style={styles.emptyTitle}>No products found</h3>

            <p>
              Try another category or search for a different product.
            </p>

            <button
              type="button"
              style={styles.resetButton}
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");

                window.dispatchEvent(
                  new CustomEvent("khozyra-search", {
                    detail: "",
                  })
                );
              }}
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductSection;
