import React from "react";
import ArrowLeft from "../icons/arrow-left.svg";

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
  };
  backLink: React.ReactElement;
}

const renderBlock = (block: Block | ContentBlock, key: React.Key) => {
  if ("title" in block) {
    return (
      <div key={key}>
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
      return (
        <p className="blog-heading" key={key}>
          {block.text}
        </p>
      );
    case "paragraph":
      return (
        <p className="blog-text" key={key}>
          {block.text}
        </p>
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
    <div className="blog-section">
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
  const { title, date, background, solution, role, content, lessons, outcome } =
    data;

  return (
    <div className="about-layout blog-layout">
      {backLink}

      <h1 className="blog-title">
        {title.split(":").map((part, idx) => (
          <span key={idx}>
            {part}
            {idx === 0 && <br />}
          </span>
        ))}
        {date && <span className="blog-date">{date}</span>}
      </h1>

      {renderBlockSection("Background", background)}
      {renderBlockSection("Solution", solution)}
      {renderBlockSection("Role", role)}
      {renderContentBlocks(content)}
      {renderBlockSection("Lessons", lessons)}
      {renderBlockSection("Outcome", outcome)}
    </div>
  );
}
