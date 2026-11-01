
import React, { useEffect, useState } from "react";

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 760);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = {
    green: "#263D32",
    cream: "#F7F4EC",
    gold: "#BD925C",
    white: "#FFFFFF",
    muted: "#737A72",
  };

  const styles = {
    section: {
      background: colors.cream,
      color: colors.green,
      overflow: "hidden",
      padding: isMobile ? "48px 20px 55px" : "75px 5% 85px",
      fontFamily: "Arial, sans-serif",
    },

    container: {
      maxWidth: "1250px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
      alignItems: "center",
      gap: isMobile ? "42px" : "65px",
    },

    eyebrow: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      background: "#EAE8DB",
      color: colors.green,
      borderRadius: "30px",
      padding: "10px 15px",
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "1.3px",
      marginBottom: "25px",
    },

    eyebrowDot: {
      width: "7px",
      height: "7px",
      background: colors.gold,
      borderRadius: "50%",
    },

    heading: {
      fontSize: isMobile ? "43px" : "clamp(48px, 5.2vw, 72px)",
      lineHeight: "1.08",
      letterSpacing: "-2.5px",
      fontWeight: "800",
      margin: "0 0 22px",
      color: colors.green,
    },

    accent: {
      color: colors.gold,
    },

    description: {
      fontSize: "16px",
      lineHeight: "1.9",
      color: colors.muted,
      maxWidth: "490px",
      margin: "0 0 30px",
    },

    buttons: {
      display: "flex",
      flexWrap: "wrap",
      gap: "13px",
      alignItems: "center",
    },

    primaryButton: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      background: colors.green,
      color: colors.white,
      textDecoration: "none",
      padding: "15px 23px",
      borderRadius: "7px",
      fontSize: "14px",
      fontWeight: "700",
      transition: "background 0.2s ease",
    },

    secondaryButton: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      background: "transparent",
      color: colors.green,
      textDecoration: "none",
      padding: "14px 19px",
      border: "1px solid #D8D9CE",
      borderRadius: "7px",
      fontSize: "14px",
      fontWeight: "700",
    },

    divider: {
      border: "none",
      borderTop: "1px solid #E2E1D6",
      margin: "35px 0 22px",
    },

    benefits: {
      display: "flex",
      flexWrap: "wrap",
      gap: "22px",
    },

    benefit: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "12px",
      fontWeight: "600",
      color: colors.green,
    },

    check: {
      color: colors.gold,
      fontWeight: "bold",
      fontSize: "17px",
    },

    showcase: {
      position: "relative",
      minHeight: isMobile ? "390px" : "510px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    backdrop: {
      position: "absolute",
      width: isMobile ? "290px" : "390px",
      height: isMobile ? "290px" : "390px",
      borderRadius: "50%",
      background: "#E8E5D8",
    },

    mainImageCard: {
      position: "relative",
      zIndex: 1,
      width: isMobile ? "75%" : "72%",
      maxWidth: "340px",
      height: isMobile ? "300px" : "400px",
      background: colors.white,
      borderRadius: "180px 180px 16px 16px",
      overflow: "hidden",
      boxShadow: "0 25px 65px rgba(38,61,50,0.12)",
    },

    mainImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    imageLabel: {
      position: "absolute",
      bottom: "15px",
      left: "15px",
      right: "15px",
      background: "rgba(255,255,255,0.95)",
      borderRadius: "9px",
      padding: "13px 15px",
    },

    labelSmall: {
      fontSize: "10px",
      color: colors.muted,
      margin: "0 0 5px",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },

    labelTitle: {
      fontSize: "15px",
      color: colors.green,
      fontWeight: "700",
      margin: 0,
    },

    floatingCard: {
      position: "absolute",
      zIndex: 2,
      background: colors.white,
      padding: "13px",
      borderRadius: "12px",
      boxShadow: "0 12px 35px rgba(38,61,50,0.12)",
      display: "flex",
      alignItems: "center",
      gap: "11px",
    },

    topCard: {
      top: isMobile ? "10px" : "28px",
      right: isMobile ? "0" : "-4px",
    },

    bottomCard: {
      bottom: isMobile ? "8px" : "30px",
      left: isMobile ? "0" : "-5px",
    },

    smallImage: {
      width: "53px",
      height: "57px",
      objectFit: "cover",
      borderRadius: "7px",
      display: "block",
    },

    cardLabel: {
      fontSize: "10px",
      color: colors.muted,
      margin: "0 0 5px",
    },

    cardTitle: {
      fontSize: "12px",
      fontWeight: "700",
      color: colors.green,
      margin: 0,
    },

    cardPrice: {
      fontSize: "12px",
      color: colors.gold,
      fontWeight: "700",
      margin: "5px 0 0",
    },
  };

  const products = {
    main: {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
      alt: "Red everyday sneakers",
    },
    headphones: {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
      alt: "Wireless headphones",
    },
    watch: {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80",
      alt: "Minimal wristwatch",
    },
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        {/* Left: Hero text */}
        <div>
          <div style={styles.eyebrow}>
            <span style={styles.eyebrowDot} />
            YOUR SMART SHOPPING GUIDE
          </div>

          <h1 style={styles.heading}>
            Discover More.
            <br />
            Choose
            <br />
            <span style={styles.accent}>Better.</span>
          </h1>

          <p style={styles.description}>
            Great finds start here. Explore fashion, technology, beauty,
            and everyday essentials to discover products that suit your
            style and budget.
          </p>

          <div style={styles.buttons}>
            <a href="#products" style={styles.primaryButton}>
              Explore Products <span>→</span>
            </a>

            <a href="#categories" style={styles.secondaryButton}>
              Browse Categories <span>↗</span>
            </a>
          </div>

          <hr style={styles.divider} />

          <div style={styles.benefits}>
            <div style={styles.benefit}>
              <span style={styles.check}>✓</span>
              Explore Multiple Categories
            </div>

            <div style={styles.benefit}>
              <span style={styles.check}>✓</span>
              Discover Your Next Find
            </div>
          </div>
        </div>

        {/* Right: Product showcase */}
        <div style={styles.showcase}>
          <div style={styles.backdrop} />

          <div style={styles.mainImageCard}>
            <img
              src={products.main.image}
              alt={products.main.alt}
              style={styles.mainImage}
            />

            <div style={styles.imageLabel}>
              <p style={styles.labelSmall}>FEATURED DISCOVERY</p>
              <p style={styles.labelTitle}>Everyday Style</p>
            </div>
          </div>

          <div style={{ ...styles.floatingCard, ...styles.topCard }}>
            <img
              src={products.headphones.image}
              alt={products.headphones.alt}
              style={styles.smallImage}
            />

            <div>
              <p style={styles.cardLabel}>TECH ESSENTIALS</p>
              <p style={styles.cardTitle}>Wireless Audio</p>
              <p style={styles.cardPrice}>Explore the collection ↗</p>
            </div>
          </div>

          <div style={{ ...styles.floatingCard, ...styles.bottomCard }}>
            <img
              src={products.watch.image}
              alt={products.watch.alt}
              style={styles.smallImage}
            />

            <div>
              <p style={styles.cardLabel}>TIMELESS DESIGN</p>
              <p style={styles.cardTitle}>Everyday Accessories</p>
              <p style={styles.cardPrice}>Find your style ↗</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;




















// import React from "react";

// function Hero() {
//   const styles = {
//     section: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       gap: "50px",
//       padding: "75px 8%",
//       backgroundColor: "#F7F4EC",
//       minHeight: "500px",
//       overflow: "hidden",
//       flexWrap: "wrap",
//       fontFamily: "Arial, sans-serif",
//     },

//     content: {
//       flex: "1 1 350px",
//       maxWidth: "570px",
//     },

//     badge: {
//       display: "inline-block",
//       padding: "9px 14px",
//       backgroundColor: "#E9E1D2",
//       color: "#263D32",
//       borderRadius: "30px",
//       fontSize: "11px",
//       fontWeight: "bold",
//       letterSpacing: "1.5px",
//       marginBottom: "18px",
//     },

//     heading: {
//       fontSize: "clamp(42px, 5vw, 66px)",
//       lineHeight: 1.15,
//       letterSpacing: "-2px",
//       color: "#263D32",
//       margin: "0 0 22px",
//       fontFamily: "Georgia, serif",
//     },

//     highlight: {
//       color: "#BD925C",
//     },

//     description: {
//       fontSize: "16px",
//       lineHeight: 1.9,
//       color: "#777C74",
//       maxWidth: "470px",
//       marginBottom: "30px",
//     },

//     buttons: {
//       display: "flex",
//       alignItems: "center",
//       flexWrap: "wrap",
//       gap: "15px",
//     },

//     primaryButton: {
//       display: "inline-block",
//       padding: "15px 23px",
//       backgroundColor: "#263D32",
//       color: "#FFFFFF",
//       borderRadius: "6px",
//       textDecoration: "none",
//       fontWeight: "bold",
//       fontSize: "14px",
//     },

//     secondaryButton: {
//       display: "inline-block",
//       padding: "14px 22px",
//       border: "1px solid #263D32",
//       color: "#263D32",
//       borderRadius: "6px",
//       textDecoration: "none",
//       fontWeight: "bold",
//       fontSize: "14px",
//     },

//     visual: {
//       flex: "1 1 300px",
//       minWidth: "0",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       position: "relative",
//       padding: "15px",
//     },

//     circle: {
//       width: "min(100%, 360px)",
//       aspectRatio: "1 / 1",
//       borderRadius: "50%",
//       backgroundColor: "#E9E1D2",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       fontSize: "clamp(85px, 12vw, 145px)",
//       boxShadow: "inset 0 0 0 18px rgba(255,255,255,0.25)",
//     },

//     floatingCard: {
//       position: "absolute",
//       bottom: "35px",
//       left: "0",
//       display: "flex",
//       alignItems: "center",
//       gap: "12px",
//       padding: "15px 19px",
//       backgroundColor: "#FFFFFF",
//       borderRadius: "12px",
//       boxShadow: "0 10px 35px rgba(38,61,50,0.12)",
//     },

//     star: {
//       width: "40px",
//       height: "40px",
//       borderRadius: "10px",
//       backgroundColor: "#F7F4EC",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "21px",
//     },

//     cardTitle: {
//       fontSize: "13px",
//       fontWeight: "bold",
//       color: "#263D32",
//       margin: "0 0 5px",
//     },

//     cardText: {
//       fontSize: "11px",
//       color: "#777C74",
//       margin: 0,
//     },
//   };

//   return (
//     <section style={styles.section} id="home">
//       {/* Left content */}
//       <div style={styles.content}>
//         <div style={styles.badge}>
//           YOUR SMART SHOPPING GUIDE
//         </div>

//         <h1 style={styles.heading}>
//           Discover More.
//           <br />
//           <span style={styles.highlight}>Choose Better.</span>
//         </h1>

//         <p style={styles.description}>
//           Find products you'll love across fashion, electronics,
//           beauty, and everyday essentials. Discover your next
//           favourite with Khozyra.
//         </p>

//         <div style={styles.buttons}>
//           <a href="#categories" style={styles.primaryButton}>
//             Explore Categories →
//           </a>

//           <a href="#products" style={styles.secondaryButton}>
//             Discover Products
//           </a>
//         </div>
//       </div>

//       {/* Right visual */}
//       <div style={styles.visual}>
//         <div style={styles.circle} aria-label="Shopping bag illustration">
//           🛍️
//         </div>

//         <div style={styles.floatingCard}>
//           <div style={styles.star}>✦</div>

//           <div>
//             <p style={styles.cardTitle}>Handpicked Finds</p>
//             <p style={styles.cardText}>
//               Discover something special
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
