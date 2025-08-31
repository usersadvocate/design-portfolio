import React from "react";
import ArrowLeft from "../icons/arrow-left.svg";
import TableOfContents from "./TableOfContents";
import "../styles/components/tableOfContents.scss";

type Block =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string };

type ContentBlock = { title: string; text: string[]; image?: string } | Block;

interface BlogLayoutProps {
  data: {
    title: string;
    date?: string;
    background?: Block[];
    solution?: Block[];
    role?: Block[];
    content?: (ContentBlock | Block)[];
    lessons?: Block[];
    outcome?: Block[];
    closingThoughts?: Block[];
  };
  backLink: React.ReactElement;
}

const renderBlock = (block: Block | ContentBlock, key: React.Key) => {
  if ("title" in block) {
    const id = block.title.toLowerCase().replace(/\s+/g, "-");
    return (
      <div key={key} id={id}>
        <h2 className="section-heading">{block.title}</h2>
        {block.image && (
          <img src={block.image} alt={block.title} className="blog-image" />
        )}
        {block.text.map((text, i) => (
          <p className="blog-text" key={i}>
            {text}
          </p>
        ))}
      </div>
    );
  }

  switch (block.type) {
    case "heading":
      const id = block.text.toLowerCase().replace(/\s+/g, "-");
      return (
        <p className="blog-heading" key={key} id={id}>
          {block.text}
        </p>
      );
    case "paragraph":
      return (
        <p
          className="blog-text"
          key={key}
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case "list":
      return (
        <ul className="blog-list" key={key}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <img className="blog-image" key={key} src={block.src} alt={block.alt} />
      );
    default:
      return null;
  }
};

const renderBlockSection = (heading: string, blocks?: Block[]) =>
  Array.isArray(blocks) && blocks.length > 0 ? (
    <div
      className="blog-section"
      id={heading.toLowerCase().replace(/\s+/g, "-")}
    >
      <h2 className="section-heading">{heading}</h2>
      {blocks.map((block, idx) => renderBlock(block, idx))}
    </div>
  ) : null;

const renderContentBlocks = (content?: ContentBlock[]) =>
  Array.isArray(content) && content.length > 0 ? (
    <div className="blog-section">
      {content.map((block, idx) => renderBlock(block, idx))}
    </div>
  ) : null;

export default function BlogLayout({ data, backLink }: BlogLayoutProps) {
  const {
    title,
    date,
    background,
    solution,
    role,
    content,
    lessons,
    outcome,
    closingThoughts,
  } = data;

  // Extract headings in chronological order for table of contents (excluding main title)
  const allHeadings: Array<{ type: "heading"; text: string }> = [];

  // Add sections in chronological order as they appear in the document
  if (background) {
    allHeadings.push({ type: "heading", text: "Background" });
  }
  if (solution) {
    allHeadings.push({ type: "heading", text: "Solution" });
  }
  if (role) {
    allHeadings.push({ type: "heading", text: "Role" });
  }

  // Add content block titles from content array (they appear after Role section)
  if (content) {
    content.forEach((block) => {
      if ("title" in block && block.title) {
        allHeadings.push({ type: "heading", text: block.title });
      }
    });
  }

  // Add remaining sections in chronological order
  if (lessons) {
    allHeadings.push({ type: "heading", text: "Lessons" });
  }
  if (outcome) {
    allHeadings.push({ type: "heading", text: "Outcome" });
  }
  if (closingThoughts) {
    allHeadings.push({ type: "heading", text: "Closing thoughts" });
  }

  return (
    <div className="about-layout blog-layout">
      {backLink}

      <h1 className="blog-title">
        {title}
        {date && <span className="blog-date">{date}</span>}
      </h1>

      <div className="blog-content">
        <div className="blog-main">
          {renderBlockSection("Background", background)}
          {renderBlockSection("Solution", solution)}
          {renderBlockSection("Role", role)}
          {renderContentBlocks(content)}
          {renderBlockSection("Lessons", lessons)}
          {renderBlockSection("Outcome", outcome)}
          {renderBlockSection("Closing thoughts", closingThoughts)}
        </div>

        <TableOfContents content={allHeadings} />
      </div>
    </div>
  );
}
