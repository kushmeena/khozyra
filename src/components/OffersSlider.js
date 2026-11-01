 
import React, { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Amazon",
    image: "/images/products/amazon.png",
    color: "#F3A847",
    background: "#FFF5E6",
    description: "Explore electronics, fashion and home deals.",
    link: "https://www.amazon.in/",
  },
  {
    id: 2,
    name: "Flipkart",
    image: "/images/products/flipkart.png",
    color: "#2874F0",
    background: "#EAF2FF",
    description: "Discover deals across popular categories.",
    link: "https://www.flipkart.com/",
  },
  {
    id: 3,
    name: "Myntra",
    image: "/images/products/myntra.png",
    color: "#FF3F6C",
    background: "#FFF0F4",
    description: "Explore fashion, footwear and accessories.",
    link: "https://www.myntra.com/",
  },
  {
    id: 4,
    name: "AJIO",
    image: "/images/products/ajio.png",
    color: "#263D32",
    background: "#EAF0EA",
    description: "Discover fashion and lifestyle collections.",
    link: "https://www.ajio.com/",
  },
  {
    id: 5,
    name: "Nykaa",
    image: "/images/products/nykaa.png",
    color: "#FC2779",
    background: "#FFF0F6",
    description: "Explore beauty and skincare products.",
    link: "https://www.nykaa.com/",
  },
  {
    id: 6,
    name: "Meesho",
    image: "/images/products/meesho.png",
    color: "#9F2089",
    background: "#F9EAF7",
    description: "Browse fashion and everyday essentials.",
    link: "https://www.meesho.com/",
  },
];

const styles = {
  section: {
    padding: "64px 6%",
    background: "#F7F4EC",
    color: "#263D32",
    overflow: "hidden",
    fontFamily: "inherit",
  },
  heading: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  eyebrow: {
    color: "#A77D48",
    fontSize: "11px",
    fontWeight: 800,
    letterSpacing: "2px",
  },
  title: {
    margin: "10px 0",
    fontSize: "clamp(25px, 3vw, 36px)",
    lineHeight: 1.2,
  },
  subtitle: {
    margin: 0,
    color: "#777C74",
    fontSize: "14px",
    lineHeight: 1.7,
  },
  arrows: {
    display: "flex",
    gap: "10px",
  },
  arrow: {
    width: "42px",
    height: "42px",
    border: "1px solid #BD925C",
    borderRadius: "50%",
    background: "#FFFFFF",
    color: "#263D32",
    fontSize: "20px",
    cursor: "pointer",
  },
  viewport: {
    width: "100%",
    overflow: "hidden",
  },
  track: {
    display: "flex",
    transition: "transform 0.55s ease",
  },
  page: {
    flex: "0 0 100%",
    minWidth: 0,
    display: "grid",
    gap: "20px",
    boxSizing: "border-box",
  },
  card: {
    minWidth: 0,
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "#FFFFFF",
    border: "1px solid #E5E9E3",
    borderRadius: "16px",
    boxSizing: "border-box",
    boxShadow: "0 4px 15px rgba(38, 61, 50, 0.04)",
  },
  logo: {
    width: "76px",
    height: "76px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15px",
    flexShrink: 0,
    overflow: "hidden",
  },
  cardTitle: {
    margin: "20px 0 8px",
    fontSize: "21px",
  },
  description: {
    margin: "0 0 16px",
    color: "#777C74",
    fontSize: "14px",
    lineHeight: 1.7,
  },
  note: {
    color: "#777C74",
    fontSize: "11px",
    lineHeight: 1.6,
    marginBottom: "18px",
  },
  link: {
    marginTop: "auto",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "11px 15px",
    background: "#263D32",
    color: "#FFFFFF",
    borderRadius: "7px",
    fontSize: "13px",
    fontWeight: 700,
    textDecoration: "none",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "9px",
    marginTop: "28px",
  },
  dot: {
    width: "9px",
    height: "9px",
    padding: 0,
    border: 0,
    borderRadius: "50%",
    background: "#C8CEC5",
    cursor: "pointer",
  },
  activeDot: {
    width: "26px",
    height: "9px",
    padding: 0,
    border: 0,
    borderRadius: "8px",
    background: "#263D32",
    cursor: "pointer",
  },
  disclaimer: {
    margin: "22px 0 0",
    textAlign: "center",
    color: "#777C74",
    fontSize: "11px",
    lineHeight: 1.7,
  },
};

function OffersSlider() {
  const [activePage, setActivePage] = useState(0);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const cardsPerPage =
    screenWidth <= 560 ? 1 : screenWidth <= 850 ? 2 : 3;

  const pages = [];

  for (let i = 0; i < products.length; i += cardsPerPage) {
    pages.push(products.slice(i, i + cardsPerPage));
  }

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActivePage(0);
  }, [cardsPerPage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePage((current) => (current + 1) % pages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [pages.length]);

  const previousSlide = () => {
    setActivePage((current) =>
      current === 0 ? pages.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActivePage((current) => (current + 1) % pages.length);
  };

  return (
    <section id="offers" style={styles.section}>
      <div style={styles.heading}>
        <div>
          <span style={styles.eyebrow}>SHOP SMARTER</span>
          <h2 style={styles.title}>Offers Across Platforms</h2>
          <p style={styles.subtitle}>
            Discover your favourite shopping destinations in one place.
          </p>
        </div>

        <div style={styles.arrows}>
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous offers"
            style={styles.arrow}
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next offers"
            style={styles.arrow}
          >
            &#8594;
          </button>
        </div>
      </div>

      <div style={styles.viewport}>
        <div
          style={{
            ...styles.track,
            transform: `translateX(-${activePage * 100}%)`,
          }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              style={{
                ...styles.page,
                gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
              }}
            >
              {page.map((product) => (
                <article key={product.id} style={styles.card}>
                  <div
                    style={{
                      ...styles.logo,
                      background: product.background,
                    }}
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} logo`}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "8px",
                        boxSizing: "border-box",
                      }}
                      onError={(event) => {
                        console.error(
                          `Logo failed to load: ${product.image}`
                        );
                        event.currentTarget.style.display = "none";
                        event.currentTarget.parentElement.textContent =
                          product.name;
                        event.currentTarget.parentElement.style.color =
                          product.color;
                        event.currentTarget.parentElement.style.fontWeight =
                          "bold";
                      }}
                    />
                  </div>

                  <h3 style={styles.cardTitle}>{product.name}</h3>

                  <p style={styles.description}>
                    {product.description}
                  </p>

                  <span style={styles.note}>
                    Check the retailer's official website for current offers.
                  </span>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                  >
                    Explore {product.name} <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.dots}>
        {pages.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setActivePage(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={activePage === index}
            style={index === activePage ? styles.activeDot : styles.dot}
          />
        ))}
      </div>

      <p style={styles.disclaimer}>
        Khozyra is an independent discovery platform. Offers and prices can
        change; please check the retailer's website for current details.
      </p>
    </section>
  );
}

export default OffersSlider;
