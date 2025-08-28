import React, { useEffect, useState } from "react";

interface TableOfContentsProps {
  content: Array<{
    type?: string;
    title?: string;
    text?: string | string[];
    items?: string[];
  }>;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
  isActive: boolean;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  // Generate table of contents from content
  useEffect(() => {
    const items: TocItem[] = [];

    content.forEach((block) => {
      // Handle only section headings (Background, Solution, Role, etc.)
      if (block.type === "heading" && typeof block.text === "string") {
        items.push({
          id: block.text.toLowerCase().replace(/\s+/g, "-"),
          text: block.text,
          level: 1,
          isActive: false,
        });
      }
    });

    setTocItems(items);
  }, [content]);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      if (sections.length === 0) return;

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <nav className="table-of-contents">
      <h3 className="toc-title">Table of Contents</h3>
      <ul className="toc-list">
        {tocItems.map((item) => (
          <li
            key={item.id}
            className={`toc-item ${item.level > 1 ? "toc-subitem" : ""} ${
              activeSection === item.id ? "toc-active" : ""
            }`}
          >
            <button
              className="toc-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
