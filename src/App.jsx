import { Routes, Route } from "react-router-dom";
import Headbar from "./components/Headbar";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import { useState } from "react";
import CartSidebar from "./components/CartSidebar";
import SignInPopup from "./components/SignInPopup";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [signinOpen, setSigninOpen] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <Headbar
        searchTerm={searchTerm}
        onSearchChange={(v) => setSearchTerm(v)}
        onToggleCart={() => setCartOpen((s) => !s)}
        onOpenSignin={() => setSigninOpen(true)}
        user={user}
      />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {cartOpen && <CartSidebar />}
      {signinOpen && (
        <SignInPopup
          onClose={() => setSigninOpen(false)}
          onSignIn={(u) => setUser(u)}
        />
      )}
    </div>
  );
}

export default App;
