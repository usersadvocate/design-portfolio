import { Link, useParams } from "react-router-dom";
import "../styles/components/footerNav.scss";

const navItems = [
  { id: "bom", label: "BOM" },
  { id: "discovery", label: "Discovery" },
  { id: "plego", label: "Plego" },
];

export default function FooterNav() {
  const { id } = useParams();

  return (
    <nav className="footer-nav">
      <div className="nav-container">
        <Link to="/">← Home</Link>
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={`/project/${item.id}`}
            className={item.id === id ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
