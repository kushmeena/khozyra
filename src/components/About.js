
import React from "react";

function About() {
  const features = [
    {
      icon: "🔎",
      title: "Discover Better",
      description:
        "Explore products across different categories and discover options that match your needs.",
    },
    {
      icon: "⚖️",
      title: "Compare with Confidence",
      description:
        "Review product details and available prices to make more informed shopping decisions.",
    },
    {
      icon: "✨",
      title: "Curated for You",
      description:
        "Find useful everyday products across fashion, technology, beauty, and home essentials.",
    },
    {
      icon: "🔗",
      title: "Shop with Ease",
      description:
        "Visit the retailer's website directly through product links when you're ready to shop.",
    },
  ];

  const styles = {
    section: {
      background: "#F7F4EC",
      color: "#263D32",
      padding: "80px 6%",
      fontFamily: "inherit",
    },
    container: {
      maxWidth: "1180px",
      margin: "0 auto",
    },
    label: {
      color: "#A77D48",
      fontSize: "12px",
      fontWeight: "700",
      letterSpacing: "3px",
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: "14px",
    },
    heading: {
      fontSize: "clamp(30px, 4vw, 46px)",
      lineHeight: 1.2,
      fontWeight: "700",
      textAlign: "center",
      margin: "0 auto 18px",
      maxWidth: "760px",
    },
    highlight: {
      color: "#A77D48",
    },
    intro: {
      maxWidth: "720px",
      margin: "0 auto",
      color: "#777C74",
      textAlign: "center",
      fontSize: "16px",
      lineHeight: 1.9,
    },
    divider: {
      width: "64px",
      height: "3px",
      background: "#BD925C",
      borderRadius: "10px",
      margin: "28px auto 44px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
      gap: "20px",
    },
    card: {
      background: "#FFFFFF",
      border: "1px solid #E5E9E3",
      borderRadius: "16px",
      padding: "28px 24px",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    iconBox: {
      width: "54px",
      height: "54px",
      borderRadius: "14px",
      background: "#F7F4EC",
      border: "1px solid #E9DDCA",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "25px",
      marginBottom: "22px",
    },
    cardTitle: {
      fontSize: "19px",
      fontWeight: "700",
      margin: "0 0 12px",
    },
    cardText: {
      color: "#777C74",
      fontSize: "14px",
      lineHeight: 1.8,
      margin: 0,
    },
    banner: {
      marginTop: "48px",
      padding: "34px 28px",
      borderRadius: "18px",
      background: "#263D32",
      color: "#FFFFFF",
      textAlign: "center",
      border: "1px solid #BD925C",
    },
    bannerTitle: {
      fontSize: "clamp(22px, 3vw, 30px)",
      margin: "0 0 12px",
    },
    bannerText: {
      maxWidth: "640px",
      margin: "0 auto 24px",
      color: "#E3E8E2",
      lineHeight: 1.8,
      fontSize: "14px",
    },
    button: {
      display: "inline-block",
      padding: "13px 24px",
      borderRadius: "8px",
      background: "#BD925C",
      color: "#263D32",
      fontWeight: "700",
      fontSize: "14px",
      textDecoration: "none",
    },
    note: {
      textAlign: "center",
      color: "#777C74",
      fontSize: "12px",
      lineHeight: 1.7,
      margin: "24px auto 0",
      maxWidth: "760px",
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <p style={styles.label}>ABOUT KHOZYRA</p>

        <h2 style={styles.heading}>
          Discover More.
          <br />
          <span style={styles.highlight}>Choose Better.</span>
        </h2>

        <p style={styles.intro}>
          Khozyra is a product discovery platform designed to make
          online shopping simpler. Explore different categories,
          review product information, and find options that suit
          your preferences before visiting a retailer.
        </p>

        <div style={styles.divider} />

        <div style={styles.grid}>
          {features.map((feature) => (
            <article key={feature.title} style={styles.card}>
              <div style={styles.iconBox} aria-hidden="true">
                {feature.icon}
              </div>

              <h3 style={styles.cardTitle}>
                {feature.title}
              </h3>

              <p style={styles.cardText}>
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div style={styles.banner}>
          <h3 style={styles.bannerTitle}>
            Your Next Great Find Starts Here.
          </h3>

          <p style={styles.bannerText}>
            Browse our catalog, explore your favorite categories,
            and discover products worth a closer look.
          </p>

          <a href="#products" style={styles.button}>
            Explore Products →
          </a>
        </div>

        <p style={styles.note}>
          Khozyra may use affiliate links. If you purchase through
          qualifying links, we may earn a commission at no extra
          cost to you. Product prices, availability, and retailer
          terms are determined by the respective retailer.
        </p>
      </div>
    </section>
  );
}

export default About;
