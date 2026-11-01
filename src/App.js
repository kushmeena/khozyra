
import React from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductSection from "./components/ProductSection";
import About from "./components/About";
import Footer from "./components/Footer";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";
import OffersSlider from "./components/OffersSlider";

function App() {
  return (
  <CartProvider>
  <WishlistProvider>
    <div className="app">
      <Header />
<Hero />
<Categories />
<OffersSlider />
<ProductSection />
<About />
<Footer />
    </div>
  </WishlistProvider>
</CartProvider>
  );
}

export default App;

 
 

























// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="app">
//       <nav className="navbar">
//         <a href="#home" className="logo">Khozyra<span>.</span></a>

//         <div className="nav-links">
//           <a href="#home">Home</a>
//           <a href="#categories">Categories</a>
//           <a href="#products">Products</a>
//           <a href="#about">About</a>
//         </div>

//         <a href="#products" className="nav-button">
//           Explore Now
//         </a>
//       </nav>

//       <section className="hero" id="home">
//         <div className="hero-content">
//           <p className="eyebrow">YOUR SMART SHOPPING GUIDE</p>
//           <h1>Discover More.<br /><span>Choose Better.</span></h1>
//           <p className="hero-description">
//             Find products you'll love across fashion, electronics,
//             beauty and everyday essentials.
//           </p>
//           <a href="#categories" className="primary-button">
//             Explore Categories →
//           </a>
//         </div>

//         <div className="hero-visual">
//           <div className="hero-circle">
//             <span className="hero-emoji">🛍️</span>
//           </div>
//           <div className="floating-card">
//             <span>✨</span>
//             <div>
//               <strong>Smart Finds</strong>
//               <p>Picked for you</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="categories section" id="categories">
//         <div className="section-heading">
//           <p className="eyebrow">EXPLORE YOUR STYLE</p>
//           <h2>Shop by Category</h2>
//           <p>Discover something special for every part of your life.</p>
//         </div>

//         <div className="category-grid">
//           <a href="#products" className="category-card">
//             <span>👗</span><h3>Fashion</h3>
//           </a>
//           <a href="#products" className="category-card">
//             <span>🎧</span><h3>Electronics</h3>
//           </a>
//           <a href="#products" className="category-card">
//             <span>✨</span><h3>Beauty</h3>
//           </a>
//           <a href="#products" className="category-card">
//             <span>🏡</span><h3>Home & Living</h3>
//           </a>
//         </div>
//       </section>

//       <section className="products section" id="products">
//         <div className="section-heading">
//           <p className="eyebrow">OUR HANDPICKED FINDS</p>
//           <h2>Popular Picks</h2>
//           <p>Explore products for your everyday needs.</p>
//         </div>

//         <div className="product-grid">
//           <article className="product-card">
//             <div className="product-image fashion">👟</div>
//             <div className="product-info">
//               <p className="product-category">FASHION</p>
//               <h3>Everyday Sneakers</h3>
//               <p>Comfort meets everyday style.</p>
//               <button onClick={() => alert("Add an affiliate product link here.")}>
//                 View Product →
//               </button>
//             </div>
//           </article>

//           <article className="product-card">
//             <div className="product-image electronics">🎧</div>
//             <div className="product-info">
//               <p className="product-category">ELECTRONICS</p>
//               <h3>Wireless Headphones</h3>
//               <p>Enjoy your favourite sounds.</p>
//               <button onClick={() => alert("Add an affiliate product link here.")}>
//                 View Product →
//               </button>
//             </div>
//           </article>

//           <article className="product-card">
//             <div className="product-image beauty">🧴</div>
//             <div className="product-info">
//               <p className="product-category">BEAUTY</p>
//               <h3>Skincare Essentials</h3>
//               <p>Simple additions to your routine.</p>
//               <button onClick={() => alert("Add an affiliate product link here.")}>
//                 View Product →
//               </button>
//             </div>
//           </article>
//         </div>
//       </section>

//       <section className="about section" id="about">
//         <p className="eyebrow">A BETTER WAY TO DISCOVER</p>
//         <h2>Good finds. Better choices.</h2>
//         <p>
//           Khozyra helps you discover interesting products across
//           categories, so you can explore options and shop confidently.
//         </p>
//       </section>

//       <footer className="footer">
//         <a href="#home" className="logo">Khozyra<span>.</span></a>
//         <p>Discover More. Choose Better.</p>
//         <p>© {new Date().getFullYear()} Khozyra. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
