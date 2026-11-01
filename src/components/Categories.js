
import React from "react";
import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = [
    {
      name: "Fashion",
      icon: "👗",
      description: "Discover clothing, shoes and everyday style.",
    },
    {
      name: "Electronics",
      icon: "🎧",
      description: "Explore useful gadgets and smart technology.",
    },
    {
      name: "Beauty",
      icon: "✨",
      description: "Find skincare, beauty and personal care products.",
    },
    {
      name: "Home & Living",
      icon: "🏡",
      description: "Make your space comfortable and beautiful.",
    },
    {
      name: "Lifestyle",
      icon: "🌿",
      description: "Explore accessories and everyday essentials.",
    },
  ];

  const styles = {
    section: {
      padding: "75px 5%",
      backgroundColor: "#FFFFFF",
      fontFamily: "Arial, sans-serif",
    },

    container: {
      maxWidth: "1250px",
      margin: "0 auto",
    },

    header: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
      marginBottom: "32px",
    },

    eyebrow: {
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "1.8px",
      color: "#A77D48",
      margin: "0 0 12px",
    },

    title: {
      fontSize: "clamp(28px, 4vw, 38px)",
      fontWeight: "800",
      letterSpacing: "-1px",
      color: "#263D32",
      margin: "0 0 12px",
    },

    subtitle: {
      color: "#777C74",
      fontSize: "15px",
      lineHeight: "1.8",
      maxWidth: "560px",
      margin: 0,
    },

    count: {
      color: "#777C74",
      fontSize: "13px",
      paddingBottom: "5px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
      gap: "18px",
    },
  };

  const handleCategoryClick = (categoryName) => {
    // Move to the product section and notify it which category was selected.
    window.dispatchEvent(
      new CustomEvent("khozyra-category-selected", {
        detail: categoryName,
      })
    );

    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="categories" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <p style={styles.eyebrow}>EXPLORE OUR COLLECTION</p>

            <h2 style={styles.title}>Shop by Category</h2>

            <p style={styles.subtitle}>
              Discover products across the categories you love.
              Find something useful, inspiring, or just right for you.
            </p>
          </div>

          <span style={styles.count}>5 categories to explore</span>
        </div>

        <div style={styles.grid}>
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              {...category}
              onClick={() => handleCategoryClick(category.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
