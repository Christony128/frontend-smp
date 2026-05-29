import { Link } from "react-router-dom";
import { useState } from "react";
import items from "../data/items";
import ProductCard from "../components/ProductCard";

function Home({ searchTerm = "" }) {
  const q = searchTerm.trim().toLowerCase();
  // Filter controls
  const [selectedCategory, setSelectedCategory] = useState("all");
  const prices = items.map((i) => i.price);
  const maxPrice = Math.max(...prices);
  const [priceLimit, setPriceLimit] = useState(maxPrice);

  const filtered = items
    .filter((it) =>
      q
        ? [it.name, it.category, it.description].some((field) =>
            String(field).toLowerCase().includes(q),
          )
        : true,
    )
    .filter((it) => (selectedCategory === "all" ? true : it.category === selectedCategory))
    .filter((it) => it.price <= priceLimit);

  return (
    <main className="page home-page">
      <section className="home-hero">
        <div>
          <p className="hero-eyebrow">Curated marketplace</p>
          <h1 className="hero-title">
            Discover premium products that feel made for you.
          </h1>
          <p className="hero-copy">
            Shop everyday favorites across home, tech, fitness, and lifestyle.
            Every item is selected for quality, value, and real usefulness.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="filters">
        <label>
          Category
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All</option>
            {[...new Set(items.map((i) => i.category))].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label>
          Max price: ₹{priceLimit}
          <input
            type="range"
            min={0}
            max={Math.ceil(maxPrice)}
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
          />
        </label>
      </section>

      <section className="product-list">
        {filtered.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </section>
    </main>
  );
}

export default Home;
