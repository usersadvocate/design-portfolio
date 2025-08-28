import { useParams } from "react-router-dom";
import "../styles/components/aboutLayout.scss";
import sideProjectsData from "../data/sideProjectsData";
import ArrowLeft from "../icons/arrow-left.svg";

type Block =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string };

type ContentBlock = { title: string; text: string[]; image?: string } | Block;

export default function About() {
  const { id } = useParams();
  const data = id && sideProjectsData[id];

  if (!data) {
    return <div className="about-layout">No content found for ID: {id}</div>;
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
          <img
            className="blog-image"
            key={key}
            src={block.src}
            alt={block.alt}
          />
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

  if (data.type === "blog") {
    const {
      title,
      date,
      background,
      solution,
      role,
      content,
      lessons,
      outcome,
    } = data;

    return (
      <div className="about-layout blog-layout">
        <a className="back-link" href="/">
          <ArrowLeft className="back-link-icon" />
          Back to Home
        </a>

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

  return (
    <div className="about-layout">
      {data.description && (
        <p
          className="about-description"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      )}

      <a
        className="tweet-card"
        href={`https://twitter.com/${data.handle}/status/${data.tweetId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="tweet-header">
          {data.avatar && (
            <img src={data.avatar} alt={data.name} className="tweet-avatar" />
          )}
          <div className="tweet-user">
            <span className="tweet-name">{data.name}</span>
            <span className="tweet-handle">@{data.handle}</span>
          </div>
        </div>

        <p className="tweet-text">
          {data.text.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {data.images?.length ? (
          <div className="tweet-images">
            {data.images.map((src, i) => (
              <img key={i} src={src} alt={`tweet image ${i + 1}`} />
            ))}
          </div>
        ) : null}
      </a>
    </div>
  );
}
