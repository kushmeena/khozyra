
import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    window.dispatchEvent(
      new CustomEvent("khozyra-search", {
        detail: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const styles = {
    form: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #BD925C",
      borderRadius: "8px",
      padding: "4px 8px",
    },

    input: {
      width: "140px",
      maxWidth: "30vw",
      padding: "8px 5px",
      border: "none",
      outline: "none",
      background: "transparent",
      color: "#263D32",
      fontSize: "13px",
    },

    button: {
      border: "none",
      background: "transparent",
      color: "#263D32",
      fontSize: "17px",
      cursor: "pointer",
      padding: "5px",
    },
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
        aria-label="Search products"
        style={styles.input}
      />

      <button type="submit" aria-label="Search" style={styles.button}>
        🔍
      </button>
    </form>
  );
}

export default SearchBar;
