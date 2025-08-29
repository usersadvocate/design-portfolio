import React from "react";

interface AboutLayoutProps {
  data: {
    description: string;
    images: string[];
    caption?: string;
  };
}

export default function AboutLayout({ data }: AboutLayoutProps) {
  const { description, images, caption } = data;

  return (
    <div className="about-layout">
      <p
        className="about-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="about-content-wrapper">
        <div className="about-images">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Community image ${index + 1}`} />
          ))}
        </div>

        {caption && <p className="about-caption">{caption}</p>}
      </div>
    </div>
  );
}
