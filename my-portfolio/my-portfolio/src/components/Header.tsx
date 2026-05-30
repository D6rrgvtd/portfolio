import { Link } from "react-router-dom";
import { Profile } from "../data/portfolio";

interface Props {
  theme: string;
  OnToggleTheme: () => void;
}

export default function Header({ theme, OnToggleTheme }: Props) {
  const navItems = [
    { label: "About", hash: "/about" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="header-logo">
            {Profile.nameEn.split(" ")[0]}<span>.</span>
          </Link>

          <nav>
            <ul className="header-list">
              {navItems.map((item) => (
                <li key={item.hash}>
                  <Link to={item.hash}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <button onClick={OnToggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}