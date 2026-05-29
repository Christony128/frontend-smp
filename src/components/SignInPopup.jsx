import { useState } from "react";

export default function SignInPopup({ onClose, onSignIn }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = username || email;
    onSignIn({ id, email, username });
    onClose();
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">{mode === "login" ? "Sign In" : "Register"}</h3>
        <form onSubmit={handleSubmit} className="modal-form">
          {mode === "register" && (
            <label>
              Username
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          )}

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">
              {mode === "login" ? "Sign In" : "Register"}
            </button>
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? "Create account" : "Have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
