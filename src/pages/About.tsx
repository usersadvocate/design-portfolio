import { useParams } from "react-router-dom";
import "../styles/components/aboutLayout.scss";
import tweetData from "../data/tweetMap";

export default function About() {
  const { id } = useParams();
  const data = id && tweetData[id];

  if (!data) {
    return <div className="about-layout">No content found for ID: {id}</div>;
  }

  if (data.type === "blog") {
    const { title, background, solution, role, content, lessons, outcome } =
      data;

    const renderSection = (heading: string, content?: string[]) =>
      content && content.length > 0 ? (
        <div className="blog-section">
          <h2 className="section-heading">{heading}</h2>
          {content.map((para, idx) => (
            <p className="blog-text" key={idx}>
              {para}
            </p>
          ))}
        </div>
      ) : null;

    const renderContentBlocks = () =>
      Array.isArray(content)
        ? content.map((block, idx) => (
            <div className="blog-section" key={idx}>
              <h2 className="section-heading">{block.title}</h2>
              {block.image && (
                <img
                  src={block.image}
                  alt={block.title}
                  className="blog-image"
                />
              )}
              {block.text.map((para: string, pIdx: number) => (
                <p className="blog-text" key={pIdx}>
                  {para}
                </p>
              ))}
            </div>
          ))
        : null;

    return (
      <div className="about-layout blog-layout">
        <a className="back-link" href="/">
          ← Back to Home
        </a>
        <h1 className="blog-title">
          {title.split(":").map((part, idx) => (
            <span key={idx}>
              {part}
              {idx === 0 && <br />}
            </span>
          ))}
        </h1>

        {renderSection("Background", background)}
        {renderSection("Solution", solution)}
        {renderSection("Role", role)}

        {renderContentBlocks()}

        {renderSection("Lessons", lessons)}
        {renderSection("Outcome", outcome)}
      </div>
    );
  }

  // Default: tweet layout
  return (
    <div className="about-layout">
      {data.description && (
        <p className="about-description">{data.description}</p>
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

        {data.images && data.images.length > 0 && (
          <div className="tweet-images">
            {data.images.map((src, i) => (
              <img key={i} src={src} alt={`tweet image ${i + 1}`} />
            ))}
          </div>
        )}
      </a>
    </div>
  );
}
