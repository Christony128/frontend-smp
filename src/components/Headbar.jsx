import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";

const NAV_ITEMS = [
  { label: "Shop" },
  { label: "Collections" },
  { label: "About" },
  { label: "Contact" },
];

function Headbar({ searchTerm, onSearchChange, onToggleCart, user, onOpenSignin }) {
  const { darkMode, toggleTheme } = useTheme();
  const { itemCount } = useCart();

  return (
    <header className="header">
      <div className="header-brand">
        <span className="brand-mark">MS</span>
        <div>
          <span className="brand-name">MiniShop</span>
          <span className="brand-tagline">Curated essentials, better shopping</span>
        </div>
      </div>

      <nav className="header-nav">
        {NAV_ITEMS.map((item) => (
          <span key={item.label} className="nav-link">
            {item.label}
          </span>
        ))}
      </nav>

      <div className="header-actions">
        <input
          aria-label="Search items"
          type="search"
          value={searchTerm}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder="Search products"
          className="search-input"
        />

        <button
          type="button"
          className="btn btn-sm btn-ghost"
          onClick={toggleTheme}
          aria-pressed={darkMode}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        <button
          type="button"
          className="btn btn-sm btn-ghost"
          onClick={onToggleCart}
          aria-label="Open cart"
        >
          🛒 {itemCount}
        </button>

        {user ? (
          <div className="head-user">Hello, {user.username || user.id}</div>
        ) : (
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            onClick={onOpenSignin}
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}

export default Headbar;
