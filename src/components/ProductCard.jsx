import { Link } from "react-router-dom";
import PurchaseButton from "./PurchaseButton";
import RatingWidget from "./RatingWidget";

export default function ProductCard({ item }) {
  return (
    <article className="product-card">
      <Link to={`/item/${item.id}`} className="product-image-link">
        <img src={item.image} alt={item.name} className="product-image" />
      </Link>

      <div className="product-body">
        <h3 className="product-title">{item.name}</h3>
        <p className="product-category">{item.category}</p>
        <p className="product-price">₹{item.price.toFixed(2)}</p>
        <p className="product-desc">{item.description}</p>
        <div className="product-actions">
          <PurchaseButton item={item} />
          <RatingWidget />
        </div>
      </div>
    </article>
  );
}
