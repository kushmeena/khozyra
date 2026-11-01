
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import WishlistIcon from "./WishlistIcon";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(() => window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 900;
      setMobile(isMobile);

      if (!isMobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    header: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      width: "100%",
      backgroundColor: "#263D32",
      boxShadow: "0 4px 18px rgba(0,0,0,0.16)",
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box",
    },

    container: {
      maxWidth: "1400px",
      minHeight: "82px",
      margin: "0 auto",
      padding: mobile ? "14px 4%" : "14px 5%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: mobile ? "14px" : "24px",
      flexWrap: "wrap",
      boxSizing: "border-box",
    },

    logo: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      textDecoration: "none",
      color: "#FFFFFF",
      flexShrink: 0,
    },

    logoIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "12px",
      backgroundColor: "#BD925C",
      color: "#263D32",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "26px",
      fontWeight: "bold",
    },

    logoText: {
      fontSize: mobile ? "24px" : "28px",
      fontWeight: "bold",
      letterSpacing: "-1px",
      color: "#FFFFFF",
    },

    logoDot: {
      color: "#BD925C",
    },

    tagline: {
      display: "block",
      marginTop: "4px",
      fontSize: "9px",
      letterSpacing: "1.3px",
      color: "#E0D7C8",
    },

    navigation: {
      display: "flex",
      alignItems: "center",
      gap: "27px",
    },

    navLink: {
      textDecoration: "none",
      color: "#FFFFFF",
      fontSize: "14px",
      fontWeight: "600",
      padding: "10px 0",
    },

    actions: {
      display: "flex",
      alignItems: "center",
      justifyContent: mobile ? "space-between" : "flex-end",
      gap: mobile ? "8px" : "12px",
      flexWrap: "wrap",
      width: mobile ? "100%" : "auto",
      boxSizing: "border-box",
    },

    menuButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      flexShrink: 0,
      border: "1px solid #BD925C",
      backgroundColor: "transparent",
      color: "#FFFFFF",
      borderRadius: "8px",
      fontSize: "22px",
      cursor: "pointer",
    },

    mobileNavigation: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      padding: "12px 0 8px",
      borderTop: "1px solid #506357",
    },

    mobileLink: {
      textDecoration: "none",
      color: "#FFFFFF",
      fontSize: "14px",
      fontWeight: "600",
      padding: "12px",
      borderRadius: "7px",
      backgroundColor: "#314A3D",
    },
  };

  const links = [
    ["Home", "#home"],
    ["Categories", "#categories"],
    ["Products", "#products"],
    ["About", "#about"],
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Khozyra brand */}
        <a href="#home" style={styles.logo}>
          <div style={styles.logoIcon}>K</div>

          <div>
            <div style={styles.logoText}>
              Khozyra<span style={styles.logoDot}>.</span>
            </div>

            <span style={styles.tagline}>
              DISCOVER MORE. CHOOSE BETTER.
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        {!mobile && (
          <nav style={styles.navigation}>
            {links.map(([label, link]) => (
              <a key={label} href={link} style={styles.navLink}>
                {label}
              </a>
            ))}
          </nav>
        )}

        {/* Search, wishlist, cart and mobile menu */}
        <div style={styles.actions}>
          <SearchBar />
          <WishlistIcon />
          <CartIcon />

          {mobile && (
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              style={styles.menuButton}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* Mobile navigation */}
        {mobile && menuOpen && (
          <nav style={styles.mobileNavigation}>
            {links.map(([label, link]) => (
              <a
                key={label}
                href={link}
                style={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {label} →
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
