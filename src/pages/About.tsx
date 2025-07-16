import { useParams } from "react-router-dom";
import "../styles/components/aboutLayout.scss";
import tweetData from "../data/tweetMap";

export default function About() {
  const { id } = useParams();
  const data = id && tweetData[id];

  if (!data) {
    return <div className="about-layout">No tweet found for ID: {id}</div>;
  }

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
