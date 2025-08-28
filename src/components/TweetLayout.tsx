interface TweetLayoutProps {
  data: {
    description?: string;
    name: string;
    handle: string;
    avatar?: string;
    text: string;
    images?: string[];
    tweetId: string;
  };
}

export default function TweetLayout({ data }: TweetLayoutProps) {
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
