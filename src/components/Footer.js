
import React from "react";

function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#263D32",
      color: "#FFFFFF",
      padding: "45px 24px 20px",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "30px",
      flexWrap: "wrap",
    },
    brand: {
      fontSize: "28px",
      fontWeight: "800",
      margin: "0 0 8px",
    },
    gold: {
      color: "#BD925C",
    },
    description: {
      color: "#D1D8D0",
      fontSize: "14px",
      lineHeight: "1.8",
      maxWidth: "330px",
      margin: 0,
    },
    heading: {
      fontSize: "15px",
      margin: "0 0 15px",
      color: "#FFFFFF",
    },
    linkList: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    link: {
      color: "#D1D8D0",
      textDecoration: "none",
      fontSize: "14px",
    },
    divider: {
      border: "none",
      borderTop: "1px solid #506357",
      margin: "35px auto 18px",
      maxWidth: "1100px",
    },
    bottom: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: "12px",
      flexWrap: "wrap",
      color: "#D1D8D0",
      fontSize: "12px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h2 style={styles.brand}>
            Khozyra<span style={styles.gold}>.</span>
          </h2>
          <p style={styles.description}>
            Discover more. Choose better. Explore products and find options
            that fit your needs.
          </p>
        </div>

        <div>
          <h3 style={styles.heading}>Explore</h3>
          <div style={styles.linkList}>
            <a href="#home" style={styles.link}>Home</a>
            <a href="#categories" style={styles.link}>Categories</a>
            <a href="#products" style={styles.link}>Products</a>
            <a href="#about" style={styles.link}>About Us</a>
          </div>
        </div>

        <div>
          <h3 style={styles.heading}>Shopping Guide</h3>
          <div style={styles.linkList}>
            <a href="#products" style={styles.link}>Discover Products</a>
            <a href="#categories" style={styles.link}>Browse Categories</a>
          </div>
        </div>
      </div>

      <hr style={styles.divider} />

      <div style={styles.bottom}>
        <span>© {new Date().getFullYear()} Khozyra. All rights reserved.</span>
        <span>Discover More. Choose Better.</span>
      </div>
    </footer>
  );
}

export default Footer;
