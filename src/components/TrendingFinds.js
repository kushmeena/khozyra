
import React from "react";
import affiliateProducts from "../data/affiliateProducts";
import affiliateLinks from "../data/affiliateLinks";

export default function TrendingFinds() {
    const products = affiliateProducts.trending;

    const styles = {
        section: {
            padding: "45px 20px",
            background: "#F7F4EC",
            color: "#263D32",
            fontFamily: "inherit"
        },
        container: {
            maxWidth: "1150px",
            margin: "auto"
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "20px"
        },
        card: {
            background: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #eee"
        },
        image: {
            width: "100%",
            height: "185px",
            objectFit: "cover",
            background: "#eee"
        },
        body: {
            padding: "15px"
        },
        button: {
            display: "inline-block",
            background: "#263D32",
            color: "#fff",
            padding: "10px 16px",
            textDecoration: "none",
            borderRadius: "6px",
            marginTop: "8px"
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <p style={{
                    color: "#BD925C",
                    fontWeight: "bold",
                    letterSpacing: "1px"
                }}>
                    THE KHOZYRA EDIT
                </p>

                <h2 style={{ fontSize: "28px" }}>
                    Trending Finds
                </h2>

                <p style={{ color: "#777", marginBottom: "25px" }}>
                    Discover fashion, grooming and lifestyle essentials.
                </p>

                <div style={styles.grid}>
                    {products.map((product) => {
                        const storeLink =
                            product.affiliateUrl ||
                            affiliateLinks[product.platform];

                        return (
                            <div key={product.id} style={styles.card}>
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
                                        fontSize: "48px"
                                    }}>
                                        ✨
                                    </div>
                                )}

                                <div style={styles.body}>
                                    <span style={{
                                        color: "#BD925C",
                                        fontSize: "12px",
                                        fontWeight: "bold"
                                    }}>
                                        {product.category}
                                    </span>

                                    <h3 style={{ fontSize: "17px" }}>
                                        {product.name}
                                    </h3>

                                    <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                                        ₹{product.price.toLocaleString("en-IN")}
                                        <span style={{
                                            color: "#999",
                                            fontSize: "13px",
                                            textDecoration: "line-through",
                                            marginLeft: "8px"
                                        }}>
                                            ₹{product.originalPrice.toLocaleString("en-IN")}
                                        </span>
                                    </p>

                                    <p style={{ fontSize: "12px", color: "#888" }}>
                                        Available on {product.platform}
                                    </p>

                                    {storeLink ? (
                                        <a
                                            href={storeLink}
                                            target="_blank"
                                            rel="noopener noreferrer sponsored"
                                            style={styles.button}
                                        >
                                            Shop on {product.platform} →
                                        </a>
                                    ) : (
                                        <p style={{ fontSize: "12px", color: "#999" }}>
                                            Add affiliate link
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
