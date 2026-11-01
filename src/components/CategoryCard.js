
import React, { useState } from "react";

function CategoryCard({ name, icon, description, onClick }) {
  const [hovered, setHovered] = useState(false);

  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      textAlign: "left",
      padding: "24px",
      minHeight: "190px",
      backgroundColor: hovered ? "#263D32" : "#FFFFFF",
      border: `1px solid ${hovered ? "#263D32" : "#E5E9E3"}`,
      borderRadius: "14px",
      color: hovered ? "#FFFFFF" : "#263D32",
      textDecoration: "none",
      transition: "all 0.25s ease",
      transform: hovered ? "translateY(-5px)" : "translateY(0)",
      boxShadow: hovered
        ? "0 14px 30px rgba(38,61,50,0.12)"
        : "0 3px 12px rgba(38,61,50,0.03)",
      cursor: "pointer",
      boxSizing: "border-box",
      width: "100%",
    },

    iconBox: {
      width: "54px",
      height: "54px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: hovered ? "#3B5546" : "#F7F4EC",
      borderRadius: "12px",
      fontSize: "27px",
      marginBottom: "20px",
      transition: "background-color 0.25s ease",
    },

    name: {
      fontSize: "17px",
      fontWeight: "700",
      margin: "0 0 8px",
      color: hovered ? "#FFFFFF" : "#263D32",
    },

    description: {
      fontSize: "13px",
      lineHeight: "1.6",
      margin: "0 0 18px",
      color: hovered ? "#D8E0D9" : "#777C74",
    },

    explore: {
      marginTop: "auto",
      fontSize: "12px",
      fontWeight: "700",
      color: hovered ? "#E3C18E" : "#A77D48",
    },
  };

  return (
    <button
      type="button"
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={onClick}
    >
      <span style={styles.iconBox}>{icon}</span>

      <h3 style={styles.name}>{name}</h3>

      <p style={styles.description}>{description}</p>

      <span style={styles.explore}>
        Explore category <span aria-hidden="true">→</span>
      </span>
    </button>
  );
}

export default CategoryCard;
