import { Link, useParams } from "react-router-dom";
import "../styles/components/footerNav.scss";

import ArrowLeft from "../icons/arrow-left.svg";
import ArrowRight from "../icons/arrow-right.svg";

const navItems = [
  { id: "bom", label: "BOM Project" },
  { id: "discovery", label: "Discovery Project" },
  { id: "plego", label: "Plego Project" },
];

export default function FooterNav() {
  const { id } = useParams();
  const currentIndex = navItems.findIndex((item) => item.id === id);

  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex !== -1 && currentIndex < navItems.length - 1
      ? navItems[currentIndex + 1]
      : null;

  return (
    <nav className="footer-nav">
      <div className="nav-container">
        <div className="nav-item nav-left">
          {prevItem && (
            <Link to={`/project/${prevItem.id}`}>
              <ArrowLeft className="nav-icon" />
              <span className="label">{prevItem.label}</span>
            </Link>
          )}
        </div>

        <div className="nav-item nav-center">
          <Link to="/">Home</Link>
        </div>

        <div className="nav-item nav-right">
          {nextItem && (
            <Link to={`/project/${nextItem.id}`}>
              <span className="label">{nextItem.label}</span>
              <ArrowRight className="nav-icon" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
