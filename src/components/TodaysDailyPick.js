
import React from "react";
import affiliateProducts from "../data/affiliateProducts";
import affiliateLinks from "../data/affiliateLinks";

export default function TodaysDailyPick() {
    const product = affiliateProducts.dailyPick;

    // Use individual product link first, otherwise use store affiliate link
    const storeLink =
        product.affiliateUrl ||
        affiliateLinks[product.platform];

    const discount = Math.round(
        ((product.originalPrice - product.price) /
            product.originalPrice) * 100
    );

    const styles = {
        section: {
            padding: "45px 20px",
            background: "#F7F4EC",
            color: "#263D32",
            fontFamily: "inherit"
        },
        container: {
            maxWidth: "1100px",
            margin: "auto"
        },
        card: {
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            alignItems: "center",
            background: "#fff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 5px 25px rgba(0,0,0,0.06)"
        },
        image: {
            width: "100%",
            maxWidth: "350px",
            height: "280px",
            objectFit: "cover",
            borderRadius: "14px",
            background: "#eee"
        },
        details: {
            flex: "1",
            minWidth: "230px"
        },
        button: {
            display: "inline-block",
            background: "#263D32",
            color: "#fff",
            padding: "13px 25px",
            borderRadius: "7px",
            textDecoration: "none",
            marginTop: "15px",
            fontWeight: "600"
        },
        badge: {
            color: "#BD925C",
            fontWeight: "700",
            fontSize: "13px",
            letterSpacing: "1px"
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <p style={styles.badge}>KHOZYRA DAILY DISCOVERY</p>

                <h2 style={{ fontSize: "28px", marginBottom: "22px" }}>
                    Today's Daily Pick
                </h2>

                <div style={styles.card}>
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            style={styles.image}
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://placehold.co/600x400/F7F4EC/263D32?text=KHOZYRA";
                            }}
                        />
                    ) : (
                        <div style={{
                            ...styles.image,
                            display: "grid",
                            placeItems: "center",
                            fontSize: "65px"
                        }}>
                            ✨
                        </div>
                    )}

                    <div style={styles.details}>
                        <span style={styles.badge}>{product.badge}</span>

                        <h2>{product.name}</h2>

                        <p style={{ color: "#777" }}>
                            {product.description}
                        </p>

                        <p>{product.category} • {product.platform}</p>

                        <h2>
                            ₹{product.price.toLocaleString("en-IN")}
                            <span style={{
                                fontSize: "15px",
                                color: "#888",
                                textDecoration: "line-through",
                                marginLeft: "10px"
                            }}>
                                ₹{product.originalPrice.toLocaleString("en-IN")}
                            </span>
                        </h2>

                        <span style={{
                            color: "#28734C",
                            fontWeight: "bold"
                        }}>
                            {discount}% OFF
                        </span>

                        {storeLink ? (
                            <div>
                                <a
                                    href={storeLink}
                                    target="_blank"
                                    rel="noopener noreferrer sponsored"
                                    style={styles.button}
                                >
                                    Shop on {product.platform} →
                                </a>
                            </div>
                        ) : (
                            <p style={{ color: "#999", fontSize: "13px" }}>
                                Add affiliate link to activate shopping.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
