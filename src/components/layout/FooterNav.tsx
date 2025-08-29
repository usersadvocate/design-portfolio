import { Link, useParams } from "react-router-dom";
import { useSyncExternalStore } from "react";
import { useRef, useEffect } from "react";
import "../../styles/components/footerNav.scss";

import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";

const navItems = [
  { id: "onboarding", label: "Onboarding Project" },
  { id: "bom", label: "BOM Project" },
  { id: "discovery", label: "Discovery Project" },
  { id: "plego", label: "Plego Project" },
];

// Custom hook for scroll position
function useScrollPosition() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("scroll", callback);
      return () => window.removeEventListener("scroll", callback);
    },
    () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      return scrollTop + windowHeight >= documentHeight - 10; // 10px threshold
    },
    () => false // Server-side fallback
  );
}

export default function FooterNav() {
  const { id } = useParams();
  const isAtBottom = useScrollPosition();
  const currentIndex = navItems.findIndex((item) => item.id === id);
  const footerRef = useRef<HTMLElement>(null);

  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex !== -1 && currentIndex < navItems.length - 1
      ? navItems[currentIndex + 1]
      : null;

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      footer.style.setProperty("--mouse-x", `${x}px`);
      footer.style.setProperty("--mouse-y", `${y}px`);
    };

    footer.addEventListener("mousemove", handleMouseMove);
    return () => footer.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      ref={footerRef}
      className={`footer-nav ${isAtBottom ? "at-bottom" : ""}`}
    >
      <div className="nav-container">
        <div className="nav-item nav-left">
          {prevItem && (
            <Link to={`/project/${prevItem.id}`} className="nav-link">
              <div className="link-content">
                <ArrowLeft className="nav-icon" />
                <span className="label">{prevItem.label}</span>
              </div>
            </Link>
          )}
        </div>

        <div className="nav-item nav-center">
          <Link to="/project" className="nav-link">
            <div className="link-content">Home</div>
          </Link>
        </div>

        <div className="nav-item nav-right">
          {nextItem && (
            <Link to={`/project/${nextItem.id}`} className="nav-link">
              <div className="link-content">
                <span className="label">{nextItem.label}</span>
                <ArrowRight className="nav-icon" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
