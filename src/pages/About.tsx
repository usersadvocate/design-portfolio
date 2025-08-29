import { useParams } from "react-router-dom";
import "../styles/components/aboutLayout.scss";
import sideProjectsData from "../data/sideProjectsData";
import BlogLayout from "../components/BlogLayout";
import TweetLayout from "../components/TweetLayout";
import AboutLayout from "../components/AboutLayout";
import BackLink from "../components/BackLink";

export default function About() {
  const { id } = useParams();
  const data = id && sideProjectsData[id];

  if (!data) {
    return <div className="about-layout">No content found for ID: {id}</div>;
  }

  if (data.type === "blog") {
    return <BlogLayout data={data} backLink={<BackLink />} />;
  }

  if (data.type === "about") {
    return <AboutLayout data={data} />;
  }

  return <TweetLayout data={data} />;
}
